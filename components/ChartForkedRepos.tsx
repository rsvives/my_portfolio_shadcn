"use client"

import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";

export function ChartForkedRepos({ forkedReposData }) {

    const chartConfig = {
        forks: {
            label: 'Forked: '
        }
    } satisfies ChartConfig


    return (
        <ChartContainer config={chartConfig} className="max-h-[200px] mx-auto aspect-video">
            {/* <LineChart
                accessibilityLayer
                data={forkedReposData}
                margin={{
                    left: 12,
                    right: 12,
                    top: 12
                }}
            >
                <CartesianGrid vertical={false} />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent />}
                />
                <XAxis dataKey={'repo'} hide />
                <Line
                    dataKey="forks"
                    type="natural"
                    stroke="#000"
                    strokeWidth={2}
                    activeDot={{
                        r: 6,
                    }}
                >
                </Line>
            </LineChart > */}
            <BarChart accessibilityLayer data={forkedReposData} >
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <XAxis dataKey={'repo'} hide />
                <Bar dataKey='forks' radius={8} fill="#000" />
            </BarChart>
        </ChartContainer>
    )
}