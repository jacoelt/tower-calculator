import { Stack } from "@mui/material"
import LabSetup from "./LabSetup"
import WorkshopSetup from "./WorkshopSetup"
import { LabResearchType } from "../../data/labResearches"
import { attackSpeedUpgrades, bounceChanceUpgrades, bounceTargetsUpgrades, criticalChanceUpgrades, criticalFactorUpgrades, damageUpgrades, defenseFlatUpgrades, defensePercentUpgrades, getWorkshopUpgradeInitialCost, getWorkshopUpgradeInitialValue, healthRegenUpgrades, healthUpgrades, multishotChanceUpgrades, multishotTargetsUpgrades, rapidFireChanceUpgrades, WorkshopUpgradeType } from "../../data/battleUpgrades"
import type { LabResearch, Upgrade } from "../../data/type"
import usePersistantState from "../../utils/usePersistantState"
import { LabStats, WorkshopStats } from "../../data/stats"


export const LAB_AND_START_SETUP_STORAGE_KEY = "lab_and_start_setup"


export default function LabAndStartSetup() {

    const defaultData = {
        lab: {
            [LabResearchType.Damage]: { id: LabResearchType.Damage, level: 0, value: 0 },
            [LabResearchType.CritFactor]: { id: LabResearchType.CritFactor, level: 0, value: 0 },
            [LabResearchType.AttackSpeed]: { id: LabResearchType.AttackSpeed, level: 0, value: 0 },
            [LabResearchType.DefenseFlat]: { id: LabResearchType.DefenseFlat, level: 0, value: 0 },
            [LabResearchType.DefensePercent]: { id: LabResearchType.DefensePercent, level: 0, value: 0 },
        },
        workshop: {
            [WorkshopUpgradeType.Damage]: {
                id: WorkshopUpgradeType.Damage,
                level: 0,
                value: getWorkshopUpgradeInitialValue(damageUpgrades),
                cost: getWorkshopUpgradeInitialCost(damageUpgrades),
            },
            [WorkshopUpgradeType.AttackSpeed]: {
                id: WorkshopUpgradeType.AttackSpeed,
                level: 0,
                value: getWorkshopUpgradeInitialValue(attackSpeedUpgrades),
                cost: getWorkshopUpgradeInitialCost(attackSpeedUpgrades),
            },
            [WorkshopUpgradeType.CritChance]: {
                id: WorkshopUpgradeType.CritChance,
                level: 0,
                value: getWorkshopUpgradeInitialValue(criticalChanceUpgrades),
                cost: getWorkshopUpgradeInitialCost(criticalChanceUpgrades),
            },
            [WorkshopUpgradeType.CritFactor]: {
                id: WorkshopUpgradeType.CritFactor,
                level: 0,
                value: getWorkshopUpgradeInitialValue(criticalFactorUpgrades),
                cost: getWorkshopUpgradeInitialCost(criticalFactorUpgrades),
            },
            [WorkshopUpgradeType.MultishotChance]: {
                id: WorkshopUpgradeType.MultishotChance,
                level: 0,
                value: getWorkshopUpgradeInitialValue(multishotChanceUpgrades),
                cost: getWorkshopUpgradeInitialCost(multishotChanceUpgrades),
            },
            [WorkshopUpgradeType.MultishotTargets]: {
                id: WorkshopUpgradeType.MultishotTargets,
                level: 0,
                value: getWorkshopUpgradeInitialValue(multishotTargetsUpgrades),
                cost: getWorkshopUpgradeInitialCost(multishotTargetsUpgrades),
            },
            [WorkshopUpgradeType.RapidFireChance]: {
                id: WorkshopUpgradeType.RapidFireChance,
                level: 0,
                value: getWorkshopUpgradeInitialValue(rapidFireChanceUpgrades),
                cost: getWorkshopUpgradeInitialCost(rapidFireChanceUpgrades),
            },
            [WorkshopUpgradeType.BounceChance]: {
                id: WorkshopUpgradeType.BounceChance,
                level: 0,
                value: getWorkshopUpgradeInitialValue(bounceChanceUpgrades),
                cost: getWorkshopUpgradeInitialCost(bounceChanceUpgrades),
            },
            [WorkshopUpgradeType.BounceTargets]: {
                id: WorkshopUpgradeType.BounceTargets,
                level: 0,
                value: getWorkshopUpgradeInitialValue(bounceTargetsUpgrades),
                cost: getWorkshopUpgradeInitialCost(bounceTargetsUpgrades),
            },
            [WorkshopUpgradeType.Health]: {
                id: WorkshopUpgradeType.Health,
                level: 0,
                value: getWorkshopUpgradeInitialValue(healthUpgrades),
                cost: getWorkshopUpgradeInitialCost(healthUpgrades),
            },
            [WorkshopUpgradeType.HealthRegen]: {
                id: WorkshopUpgradeType.HealthRegen,
                level: 0,
                value: getWorkshopUpgradeInitialValue(healthRegenUpgrades),
                cost: getWorkshopUpgradeInitialCost(healthRegenUpgrades),
            },
            [WorkshopUpgradeType.DefensePercent]: {
                id: WorkshopUpgradeType.DefensePercent,
                level: 0,
                value: getWorkshopUpgradeInitialValue(defensePercentUpgrades),
                cost: getWorkshopUpgradeInitialCost(defensePercentUpgrades),
            },
            [WorkshopUpgradeType.DefenseFlat]: {
                id: WorkshopUpgradeType.DefenseFlat,
                level: 0,
                value: getWorkshopUpgradeInitialValue(defenseFlatUpgrades),
                cost: getWorkshopUpgradeInitialCost(defenseFlatUpgrades),
            },
        },
    }

    const [data, setData] = usePersistantState(LAB_AND_START_SETUP_STORAGE_KEY, defaultData)

    const onLabChange = (research: LabResearch) => {
        data.lab[research.id] = research
        setData({ ...data })
    }

    const onWorkshopChange = (upgrade: Upgrade) => {
        data.workshop[upgrade.id] = upgrade
        setData({ ...data })
    }

    return (
        <Stack direction="row" display="flex" justifyContent="space-around" padding={2} gap={4}>
            <Stack>
                <h2>Lab Research Levels</h2>
                {LabStats.map(stat => (<LabSetup stat={stat} research={data.lab[stat.id]} onChange={onLabChange} key={stat.id} />))}
            </Stack>
            <Stack>
                <h2>Workshop Upgrade Levels</h2>
                {WorkshopStats.map(stat => (<WorkshopSetup stat={stat} upgrade={data.workshop[stat.id]} onChange={onWorkshopChange} key={stat.id} />))}
            </Stack>
        </Stack>
    )
}
