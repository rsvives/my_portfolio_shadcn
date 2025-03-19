
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeIcon, GitCommitHorizontal, GitForkIcon, GitPullRequestArrow, LucideIcon } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs"

import { Bar, BarChart, CartesianGrid, LabelList, Line, LineChart, PolarRadiusAxis, RadialBar, RadialBarChart, XAxis, YAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ProjectListItem } from "@/components/ProjectListItem";
import { FixedStat, Project } from "@/lib/definitions";
import { JSX, Suspense } from "react";
import ChartCommits from "@/components/ChartCommits";



export default function page() {
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
        // database: [{}],
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

    const chartConfig = {
        forks: {
            label: 'Forked: '
        },
        notMerged: {
            label: 'Open'
        },
        percentaje: {
            label: "percentaje",
            // color: "#2563eb",
        },
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
        mobile: {
            label: "Mobile",
            color: "#60a5fa",
        },
    } satisfies ChartConfig




    const fixedStats: FixedStat[] = [
        {
            title: 'Forked Repos',
            value: 1234,
            icon: GitForkIcon,
            chartData: function () {
                return [
                    { repo: 'something', forks: 1 },
                    { repo: 'otherthing', forks: 4 },
                    { repo: 'my other repo', forks: 6 },
                    { repo: 'another repo', forks: 1 },
                    { repo: 'one other repo', forks: 7 },
                    { repo: 'tropicalninis', forks: 3 },

                ]
            },
            chart: function (this) {
                return (
                    <LineChart
                        accessibilityLayer
                        data={this.chartData()}
                        margin={{
                            left: 12,
                            right: 12,
                            top: 12
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent />}
                        />
                        <XAxis dataKey={'repo'} hide />
                        <Line
                            dataKey="forks"
                            type="natural"
                            stroke="#000"
                            strokeWidth={2}
                            activeDot={{
                                r: 6,
                            }}
                        >

                        </Line>
                    </LineChart >
                )
            }
        },
        {
            title: 'Languages',
            value: 1234,
            icon: CodeIcon,
            chartData: () => {
                return [
                    { languaje: "HTML", percentaje: 75 },
                    { languaje: "python", percentaje: 73 },
                    { languaje: "javascript", percentaje: 95 },
                    { languaje: "php", percentaje: 80 },

                ]
            },
            chart: function (this) {
                return (

                    <RadialBarChart
                        accessibilityLayer
                        data={this.chartData()}
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
                )
            }

        },
        // {
        //     title: 'Commits',
        //     value: 1234,
        //     icon: GitCommitHorizontal,
        //     chartData: () => [
        //         { commits: 3 },
        //         { commits: 6 },
        //         { commits: 11 },
        //         { commits: 5 },
        //         { commits: 8 },
        //         { commits: 8 },
        //         { commits: 17 },
        //         { commits: 11 },
        //         { commits: 3 },
        //         { commits: 5 },
        //         { commits: 17 },
        //         { commits: 21 },
        //         { commits: 6 },
        //         { commits: 21 }
        //     ],
        //     chart: function (this) {
        //         return (
        //             <BarChart accessibilityLayer data={this.chartData()} >
        //                 <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        //                 <Bar dataKey='commits' radius={8} fill="#000" />
        //             </BarChart>

        //         )
        //     }
        // },

        {
            title: 'pull requests',
            value: 1234,
            icon: GitPullRequestArrow,
            chartData: () => [{ merged: 90, notMerged: 10 }],


            chart: function (this) {
                return (<RadialBarChart
                    data={[this.chartData()][0]}
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
                        dataKey={'not merged'}

                        fill="transparent"
                        stackId="a"
                        cornerRadius={8}
                    // className="stroke-transparent stroke-8"
                    />
                </RadialBarChart>)
            }
        },
    ]



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
                    <div id="fixed-stats" className="order-2 md:order-1 grid gap-4 mt-4 grid-cols-2 lg:grid-cols-4">
                        {fixedStats.map(stat =>
                            <Card key={stat.title}>
                                <CardHeader>
                                    <div className="flex flex-row justify-between items-center">
                                        <CardDescription>{stat.title}</CardDescription>
                                        <stat.icon size={16} />
                                    </div>
                                    <CardTitle>{stat.value}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ChartContainer config={chartConfig} className="h-[90px] w-[100%]">
                                        {stat.chart()}
                                    </ChartContainer>
                                </CardContent>
                            </Card>)}
                        <Suspense fallback={<div>Cargando</div>} >
                            <ChartCommits />
                        </Suspense>
                    </div>
                    {Object.entries(skills).map(([key, value]) =>
                        <TabsContent className="order-1 md:order-2 mt-4" key={key} value={key}>
                            <div className="flex gap-4 flex-wrap md:flex-nowrap items-stretch ">
                                {/* <div className="grid gap-4 grid-cols-6"> */}
                                <Card className="w-[100%] md:w-[60%]">
                                    {/* <Card className="col-span-4"> */}
                                    <CardHeader>
                                        {/* <CardDescription className="capitalize">{key}</CardDescription> */}
                                        <CardTitle>Technologies</CardTitle>
                                    </CardHeader>
                                    <CardContent className="">
                                        <ChartContainer config={chartConfig} className="w-[100%] flex-1"   >
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
                                <Card className="w-[100%] md:w-[40%]">
                                    <CardHeader>
                                        <CardTitle>Projects</CardTitle>
                                    </CardHeader>
                                    <CardContent className="">
                                        <ScrollArea className="h-full md:h-[29vw]" >
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
                </div>
            </Tabs >

        </div >
    )
}

