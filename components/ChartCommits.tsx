
import { fetchLatestCommits } from "@/lib/data"
import { GitCommitHorizontal } from "lucide-react"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart"
import { Bar, BarChart } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

export default async function ChartCommits() {
    const commitData = await fetchLatestCommits()
    console.log(commitData)

    const chartConfig = {} satisfies ChartConfig

    return (

        <Card >
            <CardHeader>
                <div className="flex flex-row justify-between items-center">
                    <CardDescription>Latest Commits</CardDescription>
                    <GitCommitHorizontal size={16} />
                </div>
                <CardTitle>1234</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-[90px] w-[100%]">
                    <BarChart accessibilityLayer data={commitData} >
                        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                        <Bar dataKey='commits' radius={8} fill="#000" />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>


    )

}