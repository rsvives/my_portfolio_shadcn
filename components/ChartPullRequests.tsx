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