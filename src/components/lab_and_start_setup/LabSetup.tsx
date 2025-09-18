import { useEffect, useState } from "react"
import type { Stat } from "./type"
import { Stack, TextField } from "@mui/material"
import { allLabResearches, getLabResearchValueForLevel } from "../../data/labResearches"
import type { LabResearch } from "../../data/type"


type LabSetupProps = {
    stat: Stat
    research: LabResearch
    onChange: (stat: LabResearch) => void
}


export default function LabSetup({ stat, research, onChange }: LabSetupProps) {
    const [level, setLevel] = useState(research.level)
    const [value, setValue] = useState(research.value)

    useEffect(() => {
        setLevel(research.level)
        setValue(research.value)
    }, [research])

    const onLevelChange = (newLevel: number) => {
        if (newLevel < 0) return
        if (newLevel > allLabResearches[stat.id].length - 1) return
        setLevel(newLevel)
        const newValue = getLabResearchValueForLevel(stat.id, newLevel)
        setValue(newValue)
        onChange({ id: stat.id, level: newLevel, value: newValue })
    }

    const onValueChange = (newValue: number) => {
        if (newValue < 0) return
        setValue(newValue)
        onChange({ id: stat.id, level, value: newValue })
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
            />
        </Stack>
    )
}
