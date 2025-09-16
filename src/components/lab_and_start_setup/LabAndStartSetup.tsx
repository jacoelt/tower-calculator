import { Stack } from "@mui/material"
import LabSetup from "./LabSetup"
import WorkshopSetup from "./WorkshopSetup"
import { LabResearchType } from "../../data/labResearches"
import { WorkshopUpgradeType } from "../../data/battleUpgrades"
import type { LabResearch, Upgrade } from "../../data/type"
import usePersistantState from "../../utils/usePersistantState"
import type { LabStat, UpgradeStat } from "./type"


const labStats: LabStat[] = [
    { id: LabResearchType.Damage, label: "Damage" },
    { id: LabResearchType.CritFactor, label: "Crit Factor" },
    { id: LabResearchType.AttackSpeed, label: "Attack Speed" },
    { id: LabResearchType.DefenseFlat, label: "Defense Flat" },
    { id: LabResearchType.DefensePercent, label: "Defense Percent" },
]


const workshopStats: UpgradeStat[] = [
    { id: WorkshopUpgradeType.Damage, label: "Damage" },
    { id: WorkshopUpgradeType.AttackSpeed, label: "Attack Speed" },
    { id: WorkshopUpgradeType.CritChance, label: "Crit Chance" },
    { id: WorkshopUpgradeType.CritFactor, label: "Crit Factor" },
    { id: WorkshopUpgradeType.MultishotChance, label: "Multishot Chance" },
    { id: WorkshopUpgradeType.MultishotTargets, label: "Multishot Targets" },
    { id: WorkshopUpgradeType.RapidFireChance, label: "Rapid Fire Chance" },
    { id: WorkshopUpgradeType.BounceChance, label: "Bounce Chance" },
    { id: WorkshopUpgradeType.BounceTargets, label: "Bounce Targets" },
    { id: WorkshopUpgradeType.Health, label: "Health" },
    { id: WorkshopUpgradeType.HealthRegen, label: "Health Regen" },
    { id: WorkshopUpgradeType.DefensePercent, label: "Defense Percent" },
    { id: WorkshopUpgradeType.DefenseFlat, label: "Defense Flat" },
]


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
            [WorkshopUpgradeType.Damage]: { id: WorkshopUpgradeType.Damage, level: 0, value: 0, cost: -1 },
            [WorkshopUpgradeType.AttackSpeed]: { id: WorkshopUpgradeType.AttackSpeed, level: 0, value: 0, cost: -1 },
            [WorkshopUpgradeType.CritChance]: { id: WorkshopUpgradeType.CritChance, level: 0, value: 0, cost: -1 },
            [WorkshopUpgradeType.CritFactor]: { id: WorkshopUpgradeType.CritFactor, level: 0, value: 0, cost: -1 },
            [WorkshopUpgradeType.MultishotChance]: { id: WorkshopUpgradeType.MultishotChance, level: 0, value: 0, cost: -1 },
            [WorkshopUpgradeType.MultishotTargets]: { id: WorkshopUpgradeType.MultishotTargets, level: 0, value: 0, cost: -1 },
            [WorkshopUpgradeType.RapidFireChance]: { id: WorkshopUpgradeType.RapidFireChance, level: 0, value: 0, cost: -1 },
            [WorkshopUpgradeType.BounceChance]: { id: WorkshopUpgradeType.BounceChance, level: 0, value: 0, cost: -1 },
            [WorkshopUpgradeType.BounceTargets]: { id: WorkshopUpgradeType.BounceTargets, level: 0, value: 0, cost: -1 },
            [WorkshopUpgradeType.Health]: { id: WorkshopUpgradeType.Health, level: 0, value: 0, cost: -1 },
            [WorkshopUpgradeType.HealthRegen]: { id: WorkshopUpgradeType.HealthRegen, level: 0, value: 0, cost: -1 },
            [WorkshopUpgradeType.DefensePercent]: { id: WorkshopUpgradeType.DefensePercent, level: 0, value: 0, cost: -1 },
            [WorkshopUpgradeType.DefenseFlat]: { id: WorkshopUpgradeType.DefenseFlat, level: 0, value: 0, cost: -1 },
        },
    }

    const [data, setData] = usePersistantState("lab_and_workshop_setup", defaultData)

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
                {labStats.map(stat => (<LabSetup stat={stat} research={data.lab[stat.id]} onChange={onLabChange} key={stat.id} />))}
            </Stack>
            <Stack>
                <h2>Workshop Upgrade Levels</h2>
                {workshopStats.map(stat => (<WorkshopSetup stat={stat} upgrade={data.workshop[stat.id]} onChange={onWorkshopChange} key={stat.id} />))}
            </Stack>
        </Stack>
    )
}
