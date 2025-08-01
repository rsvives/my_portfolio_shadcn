"use client"
import { LabelList, RadialBar, RadialBarChart } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Languages } from "@/lib/definitions";



export function ChartLanguages({ languagesData }: { languagesData: Languages[] | undefined }) {

    const chartConfig = {
        PHP: {
            label: "PHP",
            color: "#2563eb",
        },
        JavaScript: {
            label: "JavaScript",
        },
        TypeScript: {
            label: "TypeScript",
        },
        HTML: {
            label: "HTML",
        },
        CSS: {
            label: "CSS",
        },
    } satisfies ChartConfig

    return (
        <ChartContainer config={chartConfig} className=" aspect-square max-h-[180px] mx-auto">
            <RadialBarChart
                accessibilityLayer
                data={languagesData}
                startAngle={180}
                endAngle={-380}
                barSize={18}
                barGap={12}
                innerRadius={'25%'}
                outerRadius={'100%'}
                // cy={'80%'}
                margin={{
                    left: 12,
                    right: 12,
                    top: 12
                }}
            >
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent color="var(--card-foreground)" nameKey="language" labelFormatter={() => 'Used in my repos (%)'} />}
                />
                <RadialBar dataKey="percentage" stackId={'a'} background cornerRadius={8} fill="var(--card-foreground)">
                    <LabelList
                        position="insideStart"
                        dataKey="language"
                        className="fill-[var(--card-background)] capitalize mix-blend-luminosity"
                        fontSize={11}
                        fontWeight='bold'
                        fontSizeAdjust={0.45}

                    />
                </RadialBar>

            </RadialBarChart>
            {/* <PieChart>
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent color="#111" nameKey="language" labelFormatter={() => 'Used in my repos (%)'} />}
                // content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                    data={languagesData}
                    dataKey="percentage"
                    nameKey="language"
                    innerRadius={60}

                />
            </PieChart> */}
        </ChartContainer>
    )
}