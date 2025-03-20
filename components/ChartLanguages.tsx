"use client"
import { LabelList, RadialBar, RadialBarChart } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";


export function ChartLanguages({ languagesData }) {


    const chartConfig = {
        php: {
            label: "PHP",
            color: "#2563eb",
        },
        javascript: {
            label: "JavaScript",
        },
        python: {
            label: "Python",
        },
        HTML: {
            label: "HTML",
        },
    } satisfies ChartConfig

    return (
        <ChartContainer config={chartConfig} className="h-[90px] w-[100%]">
            <RadialBarChart
                accessibilityLayer
                data={languagesData}
                startAngle={180}
                endAngle={-0}
                barSize={12}
                barGap={12}
                innerRadius={30}
                outerRadius={100}
                cy={'100%'}
                margin={{
                    left: 12,
                    right: 12,
                    top: 12
                }}
            >
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent color="#111" nameKey="languaje" labelFormatter={() => 'Used in my repos (%)'} />}
                />
                <RadialBar dataKey="percentaje" background cornerRadius={8}>
                    <LabelList
                        position="insideStart"
                        dataKey="languaje"
                        className="fill-white capitalize mix-blend-luminosity"
                        fontSize={11}
                    />
                </RadialBar>
            </RadialBarChart>
        </ChartContainer>
    )
}