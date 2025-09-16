import { Stack, Typography } from "@mui/material"
import { attackSpeedUpgrades, bounceChanceUpgrades, bounceTargetsUpgrades, criticalChanceUpgrades, criticalFactorUpgrades, damageUpgrades, getWorkshopUpgradeInitialCost, getWorkshopUpgradeCostForLevel, getWorkshopUpgradeValueForLevel, multishotChanceUpgrades, multishotTargetsUpgrades, rapidFireChanceUpgrades, WorkshopUpgradeType } from "../../data/battleUpgrades"
import { LabResearchType } from "../../data/labResearches"
import { LAB_AND_START_SETUP_STORAGE_KEY } from "../lab_and_start_setup/LabAndStartSetup"
import type { Upgrade } from "../../data/type"
import { WorkshopStats } from "../../data/stats"
import StateDisplay from "./StateDisplay"

const RAPID_FIRE_BONUS = 4 // 400% attack speed bonus
const RAPID_FIRE_DURATION = 1 // 1 second duration


export type UpgradeState = {
    index: number,
    changedStat?: keyof Omit<UpgradeState, 'index' | 'changedStat'>,
    statCost?: number,
    damage: Upgrade,
    attackSpeed: Upgrade,
    critChance: Upgrade,
    critFactor: Upgrade,
    multishotChance: Upgrade,
    multishotTargets: Upgrade,
    rapidFireChance: Upgrade,
    bounceChance: Upgrade,
    bounceTargets: Upgrade
}

let inMemoryCacheLabResearch: Partial<Record<LabResearchType, number>> = {}
let inMemoryCacheWorkshopStartLevels: Partial<Record<WorkshopUpgradeType, number>> = {}

function getLabMultiplierForStat(stat: LabResearchType): number {
    if (inMemoryCacheLabResearch[stat]) return inMemoryCacheLabResearch[stat]

    const localStoredValues = localStorage.getItem(LAB_AND_START_SETUP_STORAGE_KEY)
    if (!localStoredValues) return 1

    const parsedValues = JSON.parse(localStoredValues).lab as Record<LabResearchType, { id: LabResearchType, level: number, value: number }>
    inMemoryCacheLabResearch[stat] = parsedValues[stat].value || 1
    return inMemoryCacheLabResearch[stat]
}

function getWorkshopStartLevelForStat(stat: WorkshopUpgradeType): number {
    if (inMemoryCacheWorkshopStartLevels[stat]) return inMemoryCacheWorkshopStartLevels[stat]

    const localStoredValues = localStorage.getItem(LAB_AND_START_SETUP_STORAGE_KEY)
    if (!localStoredValues) return 0

    const parsedValues = JSON.parse(localStoredValues).workshop as Record<WorkshopUpgradeType, { id: WorkshopUpgradeType, level: number, value: number }>
    inMemoryCacheWorkshopStartLevels[stat] = parsedValues[stat]?.level || 0
    return inMemoryCacheWorkshopStartLevels[stat]
}

function calculateDps({
    damage,
    attackSpeed,
    critChance,
    critFactor,
    multishotChance,
    multishotTargets,
    rapidFireChance,
    bounceChance,
    bounceTargets
}: UpgradeState): number {

    // Calculate lab updated values
    const labDamage = damage.value * getLabMultiplierForStat(LabResearchType.Damage)
    const labAttackSpeed = attackSpeed.value * getLabMultiplierForStat(LabResearchType.AttackSpeed)
    const labCritChance = critChance.value  // No lab upgrade for crit chance
    const labCritFactor = critFactor.value * getLabMultiplierForStat(LabResearchType.CritFactor)
    const labMultishotChance = multishotChance.value  // No lab upgrade
    const labMultishotTargets = multishotTargets.value  // No lab upgrade
    const labRapidFireChance = rapidFireChance.value  // No lab upgrade
    const labBounceChance = bounceChance.value  // No lab upgrade
    const labBounceTargets = bounceTargets.value  // No lab upgrade


    // Calculate multipliers
    const critMultiplier = 1 + (labCritChance / 100) * (labCritFactor / 100 - 1)
    const multishotMultiplier = 1 + (labMultishotChance / 100) * (labMultishotTargets - 1)
    const bounceMultiplier = 1 + (labBounceChance / 100) * (labBounceTargets - 1)

    // Rapid fire increases attack speed by 400% for 1 second
    // Average increase over time = (400% * 1s) / (1s + average time between rapid fire procs)
    // Average time between procs = 1 / attackSpeed * (100 / rapidFireChance)

    const averageTimeBetweenProcs = 1 / labAttackSpeed * (100 / labRapidFireChance)
    const averageIncreaseOverTime = (RAPID_FIRE_BONUS * RAPID_FIRE_DURATION) / (RAPID_FIRE_DURATION + averageTimeBetweenProcs)
    const attackSpeedFinal = labAttackSpeed * (1 + averageIncreaseOverTime / 100)


    return labDamage * attackSpeedFinal * critMultiplier * multishotMultiplier * bounceMultiplier
}


function calculateNextBestState(currentState: UpgradeState): UpgradeState {
    const currentDps = calculateDps(currentState)

    const nextValues = {
        damage: getWorkshopUpgradeValueForLevel(damageUpgrades, currentState.damage.level + 1),
        attackSpeed: getWorkshopUpgradeValueForLevel(attackSpeedUpgrades, currentState.attackSpeed.level + 1),
        critChance: getWorkshopUpgradeValueForLevel(criticalChanceUpgrades, currentState.critChance.level + 1),
        critFactor: getWorkshopUpgradeValueForLevel(criticalFactorUpgrades, currentState.critFactor.level + 1),
        multishotChance: getWorkshopUpgradeValueForLevel(multishotChanceUpgrades, currentState.multishotChance.level + 1),
        multishotTargets: getWorkshopUpgradeValueForLevel(multishotTargetsUpgrades, currentState.multishotTargets.level + 1),
        rapidFireChance: getWorkshopUpgradeValueForLevel(rapidFireChanceUpgrades, currentState.rapidFireChance.level + 1),
        bounceChance: getWorkshopUpgradeValueForLevel(bounceChanceUpgrades, currentState.bounceChance.level + 1),
        bounceTargets: getWorkshopUpgradeValueForLevel(bounceTargetsUpgrades, currentState.bounceTargets.level + 1),
    }

    const nextDpsValues = {
        damage: calculateDps({ ...currentState, damage: { ...currentState.damage, value: nextValues.damage } }),
        attackSpeed: calculateDps({ ...currentState, attackSpeed: { ...currentState.attackSpeed, value: nextValues.attackSpeed } }),
        critChance: calculateDps({ ...currentState, critChance: { ...currentState.critChance, value: nextValues.critChance } }),
        critFactor: calculateDps({ ...currentState, critFactor: { ...currentState.critFactor, value: nextValues.critFactor } }),
        multishotChance: calculateDps({ ...currentState, multishotChance: { ...currentState.multishotChance, value: nextValues.multishotChance } }),
        multishotTargets: calculateDps({ ...currentState, multishotTargets: { ...currentState.multishotTargets, value: nextValues.multishotTargets } }),
        rapidFireChance: calculateDps({ ...currentState, rapidFireChance: { ...currentState.rapidFireChance, value: nextValues.rapidFireChance } }),
        bounceChance: calculateDps({ ...currentState, bounceChance: { ...currentState.bounceChance, value: nextValues.bounceChance } }),
        bounceTargets: calculateDps({ ...currentState, bounceTargets: { ...currentState.bounceTargets, value: nextValues.bounceTargets } }),
    }

    const nextCostValues = {
        damage: getWorkshopUpgradeCostForLevel(damageUpgrades, currentState.damage.level + 1, getWorkshopStartLevelForStat(WorkshopUpgradeType.Damage)),
        attackSpeed: getWorkshopUpgradeCostForLevel(attackSpeedUpgrades, currentState.attackSpeed.level + 1, getWorkshopStartLevelForStat(WorkshopUpgradeType.AttackSpeed)),
        critChance: getWorkshopUpgradeCostForLevel(criticalChanceUpgrades, currentState.critChance.level + 1, getWorkshopStartLevelForStat(WorkshopUpgradeType.CritChance)),
        critFactor: getWorkshopUpgradeCostForLevel(criticalFactorUpgrades, currentState.critFactor.level + 1, getWorkshopStartLevelForStat(WorkshopUpgradeType.CritFactor)),
        multishotChance: getWorkshopUpgradeCostForLevel(multishotChanceUpgrades, currentState.multishotChance.level + 1, getWorkshopStartLevelForStat(WorkshopUpgradeType.MultishotChance)),
        multishotTargets: getWorkshopUpgradeCostForLevel(multishotTargetsUpgrades, currentState.multishotTargets.level + 1, getWorkshopStartLevelForStat(WorkshopUpgradeType.MultishotTargets)),
        rapidFireChance: getWorkshopUpgradeCostForLevel(rapidFireChanceUpgrades, currentState.rapidFireChance.level + 1, getWorkshopStartLevelForStat(WorkshopUpgradeType.RapidFireChance)),
        bounceChance: getWorkshopUpgradeCostForLevel(bounceChanceUpgrades, currentState.bounceChance.level + 1, getWorkshopStartLevelForStat(WorkshopUpgradeType.BounceChance)),
        bounceTargets: getWorkshopUpgradeCostForLevel(bounceTargetsUpgrades, currentState.bounceTargets.level + 1, getWorkshopStartLevelForStat(WorkshopUpgradeType.BounceTargets)),
    }

    let bestEfficiency = 0
    let bestStat: keyof typeof nextDpsValues | null = null
    let bestCost = 0

    for (const [stat, dps] of Object.entries(nextDpsValues)) {
        const increase = dps - currentDps
        const cost = nextCostValues[stat as keyof typeof nextCostValues]
        if (cost <= 0) continue // No more upgrades available
        const efficiency = increase / cost
        if (efficiency > bestEfficiency) {
            bestEfficiency = efficiency
            bestStat = stat as keyof typeof nextDpsValues
            bestCost = cost
        }
    }

    if (!bestStat) return currentState // No upgrades available

    const nextBestState: UpgradeState = { ...currentState, index: currentState.index + 1, changedStat: bestStat, statCost: bestCost }
    nextBestState[bestStat] = { ...nextBestState[bestStat], level: nextBestState[bestStat].level + 1, value: nextValues[bestStat], cost: nextCostValues[bestStat] }
    return nextBestState;
}


export default function AttackUpgrades() {
    const stateList: UpgradeState[] = []

    // Clear cache on component mount
    inMemoryCacheLabResearch = {}
    inMemoryCacheWorkshopStartLevels = {}

    const localStoredValues = localStorage.getItem(LAB_AND_START_SETUP_STORAGE_KEY)
    if (!localStoredValues) return (<Typography variant="body1" gutterBottom>Please set your lab and workshop start levels in the Lab and Start Setup tab.</Typography>)
    const parsedValues = JSON.parse(localStoredValues).workshop as Record<WorkshopUpgradeType, { id: WorkshopUpgradeType, level: number, value: number, cost: number }>

    const initialState: UpgradeState = {
        index: 1,
        damage: parsedValues[WorkshopUpgradeType.Damage] || { id: WorkshopUpgradeType.Damage, level: 0, value: 0, cost: getWorkshopUpgradeInitialCost(damageUpgrades) },
        attackSpeed: parsedValues[WorkshopUpgradeType.AttackSpeed] || { id: WorkshopUpgradeType.AttackSpeed, level: 0, value: 0, cost: getWorkshopUpgradeInitialCost(attackSpeedUpgrades) },
        critChance: parsedValues[WorkshopUpgradeType.CritChance] || { id: WorkshopUpgradeType.CritChance, level: 0, value: 0, cost: getWorkshopUpgradeInitialCost(criticalChanceUpgrades) },
        critFactor: parsedValues[WorkshopUpgradeType.CritFactor] || { id: WorkshopUpgradeType.CritFactor, level: 0, value: 0, cost: getWorkshopUpgradeInitialCost(criticalFactorUpgrades) },
        multishotChance: parsedValues[WorkshopUpgradeType.MultishotChance] || { id: WorkshopUpgradeType.MultishotChance, level: 0, value: 0, cost: getWorkshopUpgradeInitialCost(multishotChanceUpgrades) },
        multishotTargets: parsedValues[WorkshopUpgradeType.MultishotTargets] || { id: WorkshopUpgradeType.MultishotTargets, level: 0, value: 0, cost: getWorkshopUpgradeInitialCost(multishotTargetsUpgrades) },
        rapidFireChance: parsedValues[WorkshopUpgradeType.RapidFireChance] || { id: WorkshopUpgradeType.RapidFireChance, level: 0, value: 0, cost: getWorkshopUpgradeInitialCost(rapidFireChanceUpgrades) },
        bounceChance: parsedValues[WorkshopUpgradeType.BounceChance] || { id: WorkshopUpgradeType.BounceChance, level: 0, value: 0, cost: getWorkshopUpgradeInitialCost(bounceChanceUpgrades) },
        bounceTargets: parsedValues[WorkshopUpgradeType.BounceTargets] || { id: WorkshopUpgradeType.BounceTargets, level: 0, value: 0, cost: getWorkshopUpgradeInitialCost(bounceTargetsUpgrades) },
    }

    while (true) {
        const currentState = stateList.length === 0 ? initialState : stateList[stateList.length - 1]
        const nextState = calculateNextBestState(currentState)
        if (nextState.index === currentState.index) break // No more upgrades available
        stateList.push(nextState)
    }

    const backgroundColors: Record<string, string> = {
        damage: 'rgba(255, 0, 0, 0.1)',
        attackSpeed: 'rgba(0, 255, 0, 0.1)',
        critChance: 'rgba(0, 0, 255, 0.1)',
        critFactor: 'rgba(255, 0, 255, 0.1)',
        multishotChance: 'rgba(255, 165, 0, 0.1)',
        multishotTargets: 'rgba(0, 255, 128, 0.1)',
        rapidFireChance: 'rgba(0, 255, 255, 0.1)',
        bounceChance: 'rgba(196, 196, 196, 0.1)',
        bounceTargets: 'rgba(92, 92, 92, 0.1)',
    }

    return (
        <Stack direction="column" display="flex" alignItems="center" padding={2} gap={2} overflow="auto" maxHeight="80vh">
            {stateList.length > 0 ?
                stateList.map((state, idx) => (
                    <Stack direction="row" key={idx} sx={{ padding: 2, width: 'fit-content', border: '1px solid lightgray', borderRadius: 2, backgroundColor: backgroundColors[state.changedStat] }} alignItems="center" spacing={4}>
                        <Typography variant="body1" gutterBottom>
                            {state.changedStat ? `${WorkshopStats.find(stat => stat.id === state.changedStat)?.label} -> ${(state[state.changedStat] as Upgrade).value} for $${state.statCost}` : `No upgrades available`}
                        </Typography>
                        <StateDisplay state={state} />
                    </Stack>
                ))
                : <Typography variant="body1" gutterBottom>No upgrades available, please set your lab and workshop start levels in the Lab and Start Setup tab.</Typography>
            }
        </Stack >
    )
}
