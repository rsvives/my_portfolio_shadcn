"use client"
import { fetchPersonalSkills, fetchTechnologies } from "@/lib/data"
import { useQuery } from "@tanstack/react-query"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs"
import { ScrollArea, ScrollBar } from "./ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { ChartConfig, ChartContainer } from "./ui/chart"
import { Bar, BarChart, XAxis, YAxis } from "recharts"
import { PowerStack } from "./PowerStack"
import { Separator } from "./ui/separator"
import { Badge } from "./ui/badge"

const chartConfig = {

    percentage: {
        label: "percentage",
        // color: "var(--chart-0)",
    },

} satisfies ChartConfig



export function SkillsSection() {
    const { data: skills, error, isLoading } = useQuery({ queryKey: ['technologies'], queryFn: fetchTechnologies })
    // const { data: projects, error, isLoading } = useQuery({ queryKey: ['projects'], queryFn: fetchProjects })

    const personalSkills = fetchPersonalSkills()
    console.log(personalSkills)

    if (isLoading) return (<p>cargando...</p>)
    if (error) return (<div>error loading component 😢</div>)
    if (skills) {
        return (
            <>
                <Tabs defaultValue="frontend" className="w-[100%]" >
                    <ScrollArea className="w-[100%]">
                        <TabsList  >

                            {Object.keys(skills).map(s =>
                                <TabsTrigger key={s} value={s} className="capitalize">{s}</TabsTrigger>
                            )}
                        </TabsList>
                        <ScrollBar orientation="horizontal" hidden />
                    </ScrollArea>

                    {Object.entries(skills).map(([key, value]) =>
                        <TabsContent className="mt-4" key={key} value={key}>
                            <div className="flex gap-4 flex-wrap md:flex-nowrap items-stretch">
                                <Card className="w-[100%] lg:w-[60%] ">
                                    <CardHeader>
                                        <CardTitle>Technologies</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex flex-1">
                                        <ChartContainer config={chartConfig} className="w-[100%] h-[60vw] sm:max-h-[20vw] sm:h-[100%] flex flex-1"   >
                                            <BarChart layout="vertical" accessibilityLayer data={value} margin={{ left: 16 }} onMouseEnter={() => console.log('entering on', value)} >
                                                <YAxis
                                                    dataKey="tech"
                                                    type="category"
                                                    tickLine={false}
                                                    tickMargin={4}
                                                    axisLine={false}
                                                />
                                                <Bar dataKey="percentage" layout="vertical" fill="var(--card-foreground)" radius={8} />
                                                <XAxis dataKey="percentage" type="number" hide />
                                            </BarChart>
                                        </ChartContainer>
                                    </CardContent>
                                </Card>

                                <Card className="w-[100%] lg:w-[40%]">
                                    <CardContent className="flex flex-col flex-1 justify-between">
                                        <PowerStack />
                                        <Separator className="my-8" />
                                        <div className="flex flex-col flex-1">
                                            <h3 className="leading-none font-semibold tracking-tight mb-4">Personal skills</h3>
                                            <div className="flex flex-1 items-center">
                                                <div className="flex justify-center flex-wrap gap-4 w-full">
                                                    {Object.keys(personalSkills).map(s => <Badge className="text-sm p-1.5" variant={'outline'} key={s}>{s.replace('_', ' ')}</Badge>)}
                                                </div>

                                            </div>
                                        </div>
                                    </CardContent>

                                </Card>

                            </div>

                        </TabsContent>
                    )}

                </Tabs >
            </>
        )

    } else {
        return (<p>no skills yet...</p>)
    }
}