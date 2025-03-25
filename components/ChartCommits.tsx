"use client"

import { Commits } from "@/lib/definitions"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart"
import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis } from "recharts"



export function ChartCommits({ data }: { data: Commits[] | undefined }) {

    const chartConfig = {
        commits: {
            label: "Commits:",
        }
    } satisfies ChartConfig

    return (
        <ChartContainer config={chartConfig} className="max-h-[200px] mx-auto aspect-video ">
            {/* <BarChart accessibilityLayer data={data} >
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <XAxis dataKey={'date'} hide />
                <Bar dataKey='commits' radius={8} fill="#000" />
            </BarChart> */}
            <LineChart
                accessibilityLayer
                data={data}
                margin={{
                    left: 12,
                    right: 12,
                    top: 12,
                    bottom: 12
                }}
            >
                <CartesianGrid vertical={false} />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent nameKey="date" labelFormatter={(data) => new Date(data).toLocaleDateString('en-EN', { dateStyle: 'medium' })} />}
                />
                <XAxis dataKey={'date'} hide />
                <Line
                    dataKey="commits"
                    type="natural"
                    stroke="#000"
                    strokeWidth={2}
                    activeDot={{
                        r: 6,
                    }}
                >
                </Line>
            </LineChart >
        </ChartContainer>
    )

}