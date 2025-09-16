import type { WorkshopUpgradeType } from "./battleUpgrades"
import type { LabResearchType } from "./labResearches"

export type Upgrade = {
    id: WorkshopUpgradeType
    level: number
    cost: number
    value: number
}

export type LabResearch = {
    id: LabResearchType
    level: number
    value: number
}
