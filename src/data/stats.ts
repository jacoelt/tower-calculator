import type { LabStat, UpgradeStat } from "../components/lab_and_start_setup/type"
import { WorkshopUpgradeType } from "./battleUpgrades"
import { LabResearchType } from "./labResearches"

export const LabStats: LabStat[] = [
    { id: LabResearchType.Damage, label: "Damage" },
    { id: LabResearchType.CritFactor, label: "Crit Factor" },
    { id: LabResearchType.AttackSpeed, label: "Attack Speed" },
    { id: LabResearchType.DefenseFlat, label: "Defense Flat" },
    { id: LabResearchType.DefensePercent, label: "Defense Percent" },
]


export const WorkshopStats: UpgradeStat[] = [
    { id: WorkshopUpgradeType.Damage, label: "Damage" },
    { id: WorkshopUpgradeType.CritFactor, label: "Crit Factor" },
    { id: WorkshopUpgradeType.AttackSpeed, label: "Attack Speed" },
    { id: WorkshopUpgradeType.CritChance, label: "Crit Chance" },
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