"use client"

import { LabelList, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, RadialBar, RadialBarChart } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";

export function ChartPullRequest({ pullRequestsData }) {
    const chartConfig = {
        percentage: {
            label: "percentage",
            color: "#2563eb",
        }
    }


    return (
        <ChartContainer config={chartConfig} className="max-h-[180px] mx-auto aspect-video" >

            {/* <RadialBarChart
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
                    <Label
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
                    />
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
            </RadialBarChart> */}

            <RadarChart data={pullRequestsData} cy={'55%'}>
                <ChartTooltip cursor={false} content={<ChartTooltipContent color="#000" formatter={(data) => data + '%'} />} />
                <PolarAngleAxis dataKey="type" orientation="outer" />
                <PolarGrid />
                <Radar
                    width={'90%'}
                    dataKey="percentage"
                    // fill="var(--color-desktop)"
                    fillOpacity={0.8}
                />
                <LabelList position="inside" />
            </RadarChart>

        </ChartContainer >
    )
}