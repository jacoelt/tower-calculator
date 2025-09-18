import { Stack, Typography } from "@mui/material";
import type { UpgradeState } from "./AttackUpgrades";
import { WorkshopStats } from "../../data/stats";
import type { Upgrade } from "../../data/type";
import { numberToK } from "../../data/utils";

export default function StateDisplay({ state }: { state: UpgradeState }) {

    const statList = Object.keys(state).filter(key => key !== 'index' && key !== 'changedStat' && key !== 'statCost' && key !== 'oldStatValue') as (keyof Omit<UpgradeState, 'index' | 'changedStat' | 'statCost' | 'oldStatValue'>)[]

    return (
        <Stack direction="row" spacing={2} marginTop={2} width={390} justifyContent="center" flexWrap="wrap">
            {statList.map(stat => (
                <Stack key={stat} paddingY={1} sx={{ marginLeft: '0 !important' }} alignItems="center" >
                    <Typography
                        variant="subtitle2"
                        width={120}
                        height={24}
                        overflow={"hidden"}
                        textOverflow="ellipsis"
                        whiteSpace="nowrap"
                        textAlign="center"
                    >
                        {WorkshopStats.find(s => s.id === stat)?.label}
                    </Typography>
                    <Typography variant="body2">
                        {numberToK((state[stat] as Upgrade).value)}
                    </Typography>
                    <Typography variant="body2">
                        ${numberToK(state[stat].cost)}
                    </Typography>
                </Stack>
            ))}
        </Stack>
    )
}
