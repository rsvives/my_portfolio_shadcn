"use client"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";

export async function ChartForkedRepos({ forkedReposData }) {

    const chartConfig = {
        forks: {
            label: 'Forked: '
        }
    } satisfies ChartConfig




    return (
        <ChartContainer config={chartConfig} className="h-[90px] w-[100%]">
            <LineChart
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
            </LineChart >
        </ChartContainer>
    )
}