"use client"
import { fetchTechnologies } from "@/lib/data"
import { useQuery } from "@tanstack/react-query"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs"
import { ScrollArea, ScrollBar } from "./ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { ChartConfig, ChartContainer } from "./ui/chart"
import { Bar, BarChart, XAxis, YAxis } from "recharts"
import { ProjectsCard } from "./ProjectsCard"

const chartConfig = {

    percentage: {
        label: "percentage",
        // color: "#2563eb",
    },

} satisfies ChartConfig



export function SkillsSection() {
    const { data: skills, error, isLoading } = useQuery({ queryKey: ['technologies'], queryFn: fetchTechnologies })
    // const { data: projects, error, isLoading } = useQuery({ queryKey: ['projects'], queryFn: fetchProjects })


    if (isLoading) return (<p>cargando...</p>)
    if (error) return (<div>error loading component 😢</div>)

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
                                    <ChartContainer config={chartConfig} className="w-[100%] h-[60vw] sm:max-h-[30vw] sm:h-[100%] flex flex-1"   >
                                        <BarChart layout="vertical" accessibilityLayer data={value} margin={{ left: 16 }} onMouseEnter={() => console.log('entering on', value)} >
                                            <YAxis
                                                dataKey="tech"
                                                type="category"
                                                tickLine={false}
                                                tickMargin={4}
                                                axisLine={false}
                                            />
                                            <Bar dataKey="percentaje" layout="vertical" fill="#000" radius={8} />
                                            <XAxis dataKey="percentaje" type="number" hide />
                                        </BarChart>
                                    </ChartContainer>
                                </CardContent>
                            </Card>

                            <ProjectsCard />

                        </div>

                    </TabsContent>
                )}
                {/* </div> */}

            </Tabs >

        </>
    )
}