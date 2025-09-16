
import {
    attackSpeedStr,
    bounceChanceStr,
    bounceTargetsStr,
    criticalChanceStr,
    criticalFactorStr,
    damageStr,
    defenseFlatStr,
    defensePercentStr,
    healthRegenStr,
    healthStr,
    multishotChanceStr,
    multishotTargetsStr,
    rapidFireChanceStr,
} from "./dataStrings";

import type { Upgrade } from "./type";
import { kToNumber } from "./utils";


export type WorkshopUpgradeType =
    "damage" |
    "attackSpeed" |
    "critChance" |
    "critFactor" |
    "multishotChance" |
    "multishotTargets" |
    "rapidFireChance" |
    "bounceChance" |
    "bounceTargets" |
    "health" |
    "healthRegen" |
    "defensePercent" |
    "defenseFlat"


export const WorkshopUpgradeType: { [key: string]: WorkshopUpgradeType } = {
    Damage: "damage",
    AttackSpeed: "attackSpeed",
    CritChance: "critChance",
    CritFactor: "critFactor",
    MultishotChance: "multishotChance",
    MultishotTargets: "multishotTargets",
    RapidFireChance: "rapidFireChance",
    BounceChance: "bounceChance",
    BounceTargets: "bounceTargets",
    Health: "health",
    HealthRegen: "healthRegen",
    DefensePercent: "defensePercent",
    DefenseFlat: "defenseFlat"
};


function formatDataString(dataString: string, id: WorkshopUpgradeType): Upgrade[] {
    return dataString.split('\n').map(line => {
        const [level, value, cost] = line.split('\t').map(item => item.trim())
        return {
            id,
            level: kToNumber(level),
            cost: kToNumber(cost),
            value: kToNumber(value)
        }
    })
}


export const damageUpgrades: Upgrade[] = formatDataString(damageStr, WorkshopUpgradeType.Damage)
export const attackSpeedUpgrades: Upgrade[] = formatDataString(attackSpeedStr, WorkshopUpgradeType.AttackSpeed)
export const criticalChanceUpgrades: Upgrade[] = formatDataString(criticalChanceStr, WorkshopUpgradeType.CritChance)
export const criticalFactorUpgrades: Upgrade[] = formatDataString(criticalFactorStr, WorkshopUpgradeType.CritFactor)
export const multishotChanceUpgrades: Upgrade[] = formatDataString(multishotChanceStr, WorkshopUpgradeType.MultishotChance)
export const multishotTargetsUpgrades: Upgrade[] = formatDataString(multishotTargetsStr, WorkshopUpgradeType.MultishotTargets)
export const rapidFireChanceUpgrades: Upgrade[] = formatDataString(rapidFireChanceStr, WorkshopUpgradeType.RapidFireChance)
export const bounceChanceUpgrades: Upgrade[] = formatDataString(bounceChanceStr, WorkshopUpgradeType.BounceChance)
export const bounceTargetsUpgrades: Upgrade[] = formatDataString(bounceTargetsStr, WorkshopUpgradeType.BounceTargets)
export const healthUpgrades: Upgrade[] = formatDataString(healthStr, WorkshopUpgradeType.Health)
export const healthRegenUpgrades: Upgrade[] = formatDataString(healthRegenStr, WorkshopUpgradeType.HealthRegen)
export const defencePercentUpgrades: Upgrade[] = formatDataString(defensePercentStr, WorkshopUpgradeType.DefensePercent)
export const defenceFlatUpgrades: Upgrade[] = formatDataString(defenseFlatStr, WorkshopUpgradeType.DefenseFlat)


export const allWorkshopUpgrades: { [key: string]: Upgrade[] } = {
    [WorkshopUpgradeType.Damage]: damageUpgrades,
    [WorkshopUpgradeType.AttackSpeed]: attackSpeedUpgrades,
    [WorkshopUpgradeType.CritChance]: criticalChanceUpgrades,
    [WorkshopUpgradeType.CritFactor]: criticalFactorUpgrades,
    [WorkshopUpgradeType.MultishotChance]: multishotChanceUpgrades,
    [WorkshopUpgradeType.MultishotTargets]: multishotTargetsUpgrades,
    [WorkshopUpgradeType.RapidFireChance]: rapidFireChanceUpgrades,
    [WorkshopUpgradeType.BounceChance]: bounceChanceUpgrades,
    [WorkshopUpgradeType.BounceTargets]: bounceTargetsUpgrades,
    [WorkshopUpgradeType.Health]: healthUpgrades,
    [WorkshopUpgradeType.HealthRegen]: healthRegenUpgrades,
    [WorkshopUpgradeType.DefensePercent]: defencePercentUpgrades,
    [WorkshopUpgradeType.DefenseFlat]: defenceFlatUpgrades,
}


export function getWorkshopUpgradeValueForLevel(upgrade: Upgrade[], level: number): number {
    let entry

    try {
        // Entry should be at index level - 1
        entry = upgrade[level - 1]
    } catch {
        entry = undefined
    }

    if (!entry || entry.level !== level) {
        entry = upgrade.find(r => r.level === level)
    }

    return entry ? entry.value : 0
}