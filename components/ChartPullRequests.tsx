"use client"

import { LabelList, PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import { PullRequests } from "@/lib/definitions";




export function ChartPullRequest({ pullRequestsData }: { pullRequestsData: PullRequests[] | undefined }) {
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