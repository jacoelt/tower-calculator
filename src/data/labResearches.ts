import { LAB_AND_START_SETUP_STORAGE_KEY } from "../components/lab_and_start_setup/constants";
import { labAttackSpeedStr, labCritFactorStr, labDamageStr, labDefenseFlatStr, labDefensePercentStr } from "./dataStrings";
import type { LabResearch } from "./type";
import { kToNumber } from "./utils";


export type LabResearchType =
    "damage" |
    "critFactor" |
    "attackSpeed" |
    "defenseFlat" |
    "defensePercent"


export const LabResearchType: { [key: string]: LabResearchType } = {
    Damage: "damage",
    CritFactor: "critFactor",
    AttackSpeed: "attackSpeed",
    DefenseFlat: "defenseFlat",
    DefensePercent: "defensePercent"
};


function formatDataString(dataString: string, id: LabResearchType): LabResearch[] {
    return dataString.split('\n').map(line => {
        const [level, value] = line.split('\t').map(item => item.trim())
        return {
            id,
            level: kToNumber(level) + 1,
            value: kToNumber(value)
        }
    })
}


export const labDamageResearch: LabResearch[] = formatDataString(labDamageStr, LabResearchType.Damage)
export const labCritFactorResearch: LabResearch[] = formatDataString(labCritFactorStr, LabResearchType.CritFactor)
export const labAttackSpeedResearch: LabResearch[] = formatDataString(labAttackSpeedStr, LabResearchType.AttackSpeed)
export const labDefenseFlatResearch: LabResearch[] = formatDataString(labDefenseFlatStr, LabResearchType.DefenseFlat)
export const labDefensePercentResearch: LabResearch[] = formatDataString(labDefensePercentStr, LabResearchType.DefensePercent)


export const allLabResearches: { [key: string]: LabResearch[] } = {
    [LabResearchType.Damage]: labDamageResearch,
    [LabResearchType.CritFactor]: labCritFactorResearch,
    [LabResearchType.AttackSpeed]: labAttackSpeedResearch,
    [LabResearchType.DefenseFlat]: labDefenseFlatResearch,
    [LabResearchType.DefensePercent]: labDefensePercentResearch,
}


export function getLabResearchValueForLevel(researchType: LabResearchType, level: number): number {
    let entry

    const research = allLabResearches[researchType]
    if (!research) return 0

    try {
        // Entry should be at index level - 1
        entry = research[level - 1]
    } catch {
        entry = undefined
    }

    if (!entry || entry.level !== level) {
        entry = research.find(r => r.level === level)
    }

    return entry ? entry.value : 0
}

export function getCurrentLabResearchValue(researchType: LabResearchType): number {
    const defaultValue = researchType === LabResearchType.DefensePercent ? 0 : 1
    const research = allLabResearches[researchType]
    if (!research) return defaultValue

    const currentData = localStorage.getItem(LAB_AND_START_SETUP_STORAGE_KEY)
    if (!currentData) return defaultValue

    const parsedData = JSON.parse(currentData)
    if (!parsedData || !parsedData.lab || !parsedData.lab[researchType]) return defaultValue

    const level = parsedData.lab[researchType].level
    if (level <= 0) return defaultValue

    return getLabResearchValueForLevel(researchType, level)
}

export function isLabResearchType(value: string): value is LabResearchType {
    return Object.values(LabResearchType).includes(value as LabResearchType)
}