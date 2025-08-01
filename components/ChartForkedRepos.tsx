"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import { ForkedRepo } from "@/lib/definitions";


export function ChartForkedRepos({ forkedReposData }: { forkedReposData: ForkedRepo[] | undefined }) {

    const chartConfig = {
        forks: {
            label: 'Forked: '
        }
    } satisfies ChartConfig


    return (
        <ChartContainer config={chartConfig} className="max-h-[180px] mx-auto aspect-video">

            <BarChart accessibilityLayer data={forkedReposData} >
                <ChartTooltip cursor={false} content={
                    <ChartTooltipContent
                        nameKey="repo"

                    />}
                />
                <CartesianGrid vertical={false} />
                <XAxis dataKey={'repo'} hide />
                <Bar dataKey='forks' radius={8} fill="var(--card-foreground)" ></Bar>
            </BarChart>
        </ChartContainer>
    )
}