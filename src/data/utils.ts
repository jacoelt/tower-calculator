
export function kToNumber(str: string): number {
    if (!str.endsWith('K')) {
        return Number(str)
    }
    return Number(str.slice(0, -1)) * 1000
}

export function numberToK(num: number | undefined): string {
    if (num === undefined){
        return 'N/A'
    }
    if (num < 1_000) {
        return num.toString()
    }
    if (num < 1_000_000) {
        return (num / 1000).toFixed(2) + 'K'
    }
    if (num < 1_000_000_000) {
        return (num / 1_000_000).toFixed(2) + 'M'
    }
    return (num / 1_000_000_000).toFixed(2) + 'B'
}