import { useEffect, useState } from "react"
import { allWorkshopUpgrades, getWorkshopUpgradeCostForLevel, getWorkshopUpgradeValueForLevel } from "../../data/battleUpgrades"
import type { Upgrade } from "../../data/type"
import { Stack, TextField } from "@mui/material"
import type { UpgradeStat } from "./type"


type WorkshopSetupProps = {
    stat: UpgradeStat
    upgrade: Upgrade
    onChange: (stat: Upgrade) => void
}


export default function WorkshopSetup({ stat, upgrade, onChange }: WorkshopSetupProps) {
    const [level, setLevel] = useState(upgrade.level)
    const [value, setValue] = useState(upgrade.value)

    useEffect(() => {
        setLevel(upgrade.level)
        setValue(upgrade.value)
    }, [upgrade])


    const onLevelChange = (newLevel: number) => {
        if (newLevel < 0) return
        if (newLevel > allWorkshopUpgrades[stat.id].length - 1) return
        setLevel(newLevel)
        const newValue = getWorkshopUpgradeValueForLevel(stat.id, newLevel)
        setValue(newValue)
        onChange({ id: stat.id, level: newLevel, value: newValue, cost: getWorkshopUpgradeCostForLevel(allWorkshopUpgrades[stat.id], newLevel, upgrade.level) })
    }

    const onValueChange = (newValue: number) => {
        if (newValue < 0) return
        setValue(newValue)
        onChange({ id: stat.id, level, value: newValue, cost: getWorkshopUpgradeCostForLevel(allWorkshopUpgrades[stat.id], level, upgrade.level) })
    }

    return (
        <Stack direction="row" spacing={2} alignItems="center" marginBottom={2}>
            <TextField
                label={`${stat.label} Level`}
                type="number"
                value={level}
                onChange={(e) => onLevelChange(parseInt(e.target.value) || 0)}
                variant="outlined"
                margin="normal"
            />
            <TextField
                label={`${stat.label} Value`}
                type="number"
                value={value}
                onChange={(e) => onValueChange(parseFloat(e.target.value) || 0)}
                variant="outlined"
                margin="normal"
                disabled={true}
            />
        </Stack>
    )
}
