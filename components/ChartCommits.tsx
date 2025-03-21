"use client"

import { Commits } from "@/lib/definitions"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart"
import { Bar, BarChart } from "recharts"



export function ChartCommits({ data }: { data: Commits[] }) {

    const chartConfig = {
        percentaje: {
            label: "percentaje",
            // color: "#2563eb",
        },
    } satisfies ChartConfig

    return (
        <ChartContainer config={chartConfig} className="h-[100px] w-[100%]">
            <BarChart accessibilityLayer data={data} >
                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                <Bar dataKey='commits' radius={8} fill="#000" />
            </BarChart>
        </ChartContainer>
    )

}