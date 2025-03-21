"use client"

import { PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";

export function ChartPullRequest({ pullRequestsData }) {
    const chartConfig = {
        percentaje: {
            label: "percentaje",
            // color: "#2563eb",
        }
    }


    return (
        <ChartContainer config={chartConfig} className="h-[90px] w-[100%]" >

            <RadialBarChart
                data={pullRequestsData}
                startAngle={180}
                endAngle={0}
                innerRadius={'100%'}
                outerRadius={'250%'}
                cy={'80%'}
            // compact
            >
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel nameKey="merged" labelKey="merged" />}
                />
                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                    {/* <Label
                        content={({ viewBox }) => {
                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                return (
                                    <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                                        <tspan
                                            x={viewBox.cx}
                                            y={(viewBox.cy || 0) - 16}
                                            className="fill-foreground text-2xl font-bold"
                                        >
                                            1234
                                        </tspan>
                                        <tspan
                                            x={viewBox.cx}
                                            y={(viewBox.cy || 0) + 4}
                                            className="fill-muted-foreground"
                                        >
                                            Visitors
                                        </tspan>
                                    </text>
                                )
                            }
                        }}
                    /> */}
                </PolarRadiusAxis>
                <RadialBar
                    dataKey="merged"
                    fill="#000"
                    stackId="a"
                    cornerRadius={8}
                    background
                // className="stroke-transparent stroke-8"
                />
                <RadialBar
                    dataKey={'notMerged'}

                    fill="transparent"
                    stackId="a"
                    cornerRadius={8}
                // className="stroke-transparent stroke-8"
                />
            </RadialBarChart>
        </ChartContainer >
    )
}