import { Stack, Typography } from "@mui/material";
import type { UpgradeState } from "./AttackUpgrades";
import { WorkshopStats } from "../../data/stats";
import type { Upgrade } from "../../data/type";

export default function StateDisplay({ state }: { state: UpgradeState }) {

    const statList = Object.keys(state).filter(key => key !== 'index' && key !== 'changedStat' && key !== 'statCost') as (keyof Omit<UpgradeState, 'index' | 'changedStat' | 'statCost'>)[]

    return (
        <Stack direction="row" spacing={2} marginTop={2} maxWidth={300} justifyContent="center" flexWrap="wrap">
            {statList.map(stat => (
                <Stack key={stat} width={90} sx={{ border: '1px solid lightgray', marginLeft: '0 !important' }}>
                    <Typography variant="subtitle2" height={24} overflow={"hidden"} textOverflow="ellipsis" whiteSpace="nowrap" textAlign="center">
                        {WorkshopStats.find(s => s.id === stat)?.label}
                    </Typography>
                    <Typography variant="body2">
                        {(state[stat] as Upgrade).value}
                    </Typography>
                    <Typography variant="body2">
                        ${state[stat].cost}
                    </Typography>
                </Stack>
            ))}
        </Stack>
    )
}
