
export function kToNumber(str: string): number {
    if (!str.endsWith('K')) {
        return Number(str)
    }
    return Number(str.slice(0, -1)) * 1000
}
