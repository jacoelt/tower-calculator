import type { WorkshopUpgradeType } from "../../data/battleUpgrades"
import type { LabResearchType } from "../../data/labResearches"


export type LabStat = {
    id: LabResearchType
    label: string
}

export type UpgradeStat = {
    id: WorkshopUpgradeType
    label: string
}