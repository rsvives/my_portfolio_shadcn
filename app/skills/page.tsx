// "use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs"

// import { Bar, BarChart, CartesianGrid, Line, LineChart, PolarRadiusAxis, RadialBar, RadialBarChart, XAxis, YAxis } from "recharts"
// import { ChartConfig } from "@/components/ui/chart"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ProjectListItem } from "@/components/ProjectListItem";
import { Project } from "@/lib/definitions";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import FixedStats from "@/components/FixedStats";
// import { fetchTechnologies } from "@/lib/data";
// import { useQuery } from "@tanstack/react-query";

const skills = {
    frontend: [
        {
            tech: 'Nuxtjs',
            percentaje: 0.7
        },
        {
            tech: 'React',
            percentaje: 0.85
        },
        {
            tech: 'Vue',
            percentaje: 0.7
        },
        {
            tech: 'Javascript',
            percentaje: 0.95
        },
        {
            tech: 'Typescript',
            percentaje: 0.85
        },
        {
            tech: 'Redux',
            percentaje: 0.65
        },
        {
            tech: 'ReactQuery',
            percentaje: 0.75
        },
        {
            tech: 'GraphQL',
            percentaje: 0.8
        },
        {
            tech: 'Zustand',
            percentaje: 0.65
        },

    ],
    backend: [
        {
            tech: 'NodeJS',
            percentaje: 0.65
        },
        {
            tech: 'Laravel',
            percentaje: 0.65
        },
        {
            tech: 'MySQL',
            percentaje: 0.65
        },
        {
            tech: 'MongoDB',
            percentaje: 0.65
        },
    ],
    database: [{}],
    infrastructure: [{
        tech: 'Zustand',
        percentaje: 0.65
    },],
    other: [{}],
    'UX/UI': [
        {
            tech: 'Figma',
            percentaje: 0.65
        },
        {
            tech: 'Design Thinking',
            percentaje: 0.65
        },
        {
            tech: 'Design Thinking',
            percentaje: 0.65
        },
    ],
}
const projects: Project[] = [
    {
        avatar: 'asdf.png',
        name: 'asdf',
        category: 'frontend',
        description: 'lorem ipsum blablabla...',
        repository_url: '#',
        deploy_url: '',
        techStack: ['nuxt', 'vue', 'mongodb'],
        tags: ['asdf', 'asdf', 'asdf']
    },
    {
        avatar: 'fdsa.png',
        name: 'fdsa',
        category: 'backend',
        description: 'lorem ipsum blablabla...',
        repository_url: '#',
        deploy_url: '',
        techStack: ['nuxt', 'vue'],
        tags: ['asdf', 'asdf', 'asdf']
    },
    {
        avatar: 'qwer.png',
        name: 'qwer',
        category: 'frontend',
        description: 'lorem ipsum blablabla...',
        repository_url: '#',
        deploy_url: '',
        techStack: ['nuxt', 'vue'],
        tags: ['asdf', 'asdf', 'asdf']
    },
    {
        avatar: 'qwer.png',
        name: 'ahgfsd',
        category: 'frontend',
        description: 'lorem ipsum blablabla...',
        repository_url: '#',
        deploy_url: '',
        techStack: ['nuxt', 'vue'],
        tags: ['asdf', 'asdf', 'asdf']
    },
    {
        avatar: 'qwer.png',
        name: 'lkhlska',
        category: 'frontend',
        description: 'lorem ipsum blablabla...',
        repository_url: '#',
        deploy_url: '',
        techStack: ['nuxt', 'vue'],
        tags: ['asdf', 'asdf', 'asdf']
    },
]
const chartConfig = {

    percentage: {
        label: "percentage",
        // color: "#2563eb",
    },

} satisfies ChartConfig

export default function SkillsPage() {
    // const { data: skills, error, isLoading } = useQuery({ queryKey: ['technologies'], queryFn: fetchTechnologies })

    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
            <Tabs defaultValue="frontend" className="w-[100%]">
                <ScrollArea >
                    <TabsList>
                        {Object.keys(skills).map(s =>

                            <TabsTrigger key={s} value={s} className="capitalize">{s}</TabsTrigger>
                        )}
                    </TabsList>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>

                <div className="flex flex-col">

                    {Object.entries(skills).map(([key, value]) =>
                        <TabsContent className="mt-4" key={key} value={key}>
                            <div className="flex gap-4 flex-wrap md:flex-nowrap items-stretch ">
                                {/* <div className="grid gap-4 grid-cols-6"> */}
                                <Card className="w-[100%] md:w-[60%]">
                                    {/* <Card className="col-span-4"> */}
                                    <CardHeader>
                                        {/* <CardDescription className="capitalize">{key}</CardDescription> */}
                                        <CardTitle>Technologies</CardTitle>
                                    </CardHeader>
                                    <CardContent className="">
                                        {/* <ChartContainer config={chartConfig} className="w-[100%] flex-1"   >
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
                                        </ChartContainer> */}
                                    </CardContent>
                                </Card>
                                <Card className="w-[100%] md:w-[40%]">
                                    <CardHeader>
                                        <CardTitle>Projects</CardTitle>
                                    </CardHeader>
                                    <CardContent className="px-2">
                                        <ScrollArea className="h-full md:h-[29vw] px-4">
                                            <div className="space-y-4">
                                                {projects.map(p =>
                                                    <ProjectListItem key={p.name} project={p} />
                                                )}
                                            </div>

                                            <ScrollBar orientation="vertical" />
                                        </ScrollArea>
                                    </CardContent>
                                </Card>
                            </div>

                        </TabsContent>
                    )}

                    <FixedStats />
                </div>
            </Tabs >

        </div >
    )
}

