"use client"
import { fetchTechnologies } from "@/lib/data"
import { useQuery } from "@tanstack/react-query"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs"
import { ScrollArea, ScrollBar } from "./ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { ChartConfig, ChartContainer } from "./ui/chart"
import { Bar, BarChart, XAxis, YAxis } from "recharts"
import { ProjectListItem } from "./ProjectListItem"
import { Project } from "@/lib/definitions"

const chartConfig = {

    percentage: {
        label: "percentage",
        // color: "#2563eb",
    },

} satisfies ChartConfig

const projects: Project[] = [
    {
        name: 'TropicalNinis',
        avatar: 'asdf.png',
        category: ['frontend', 'backend'],
        description: 'Digital nomads travel blog integrated with Patreon login to restrict access for certain sections to only-members',
        repository_url: '#',
        deploy_url: '',
        techStack: ['Nuxtjs', 'Vue', 'OAuth', 'Headless CMS', 'Nuxt Content', 'Javascript', 'AWS', 'Cloudflare'],
        tags: ['asdf', 'asdf', 'asdf']
    },
    {
        name: 'Music Bingo',
        avatar: 'fdsa.png',
        category: ['frontend', 'backend'],
        description: 'Musical version of Bingo Game, where instead of just random numbers, random numbered songs from a Spotify list are picked',
        repository_url: '#',
        deploy_url: '',
        techStack: ['React', 'Socket.io', 'Spotify', 'OAuth', 'Javascript'],
        tags: ['asdf', 'asdf', 'asdf']
    },
    {
        name: 'Github Repos App',
        avatar: 'qwer.png',
        category: ['frontend'],
        description: 'Mobile App that shows data from Github API',
        repository_url: '#',
        deploy_url: '',
        techStack: ['React Native', 'Javascript', 'CSS'],
        tags: ['asdf', 'asdf', 'asdf']
    },
    {
        name: 'RaspiIntercom',
        avatar: 'qwer.png',
        category: ['backend'],
        description: 'Smart Intercom and Remote Acces Control System integrated with a Telegram bot',
        repository_url: '#',
        deploy_url: '',
        techStack: ['Python', 'MongoDB', 'OAuth', 'Google Console', 'Telegram'],
        tags: ['asdf', 'asdf', 'asdf']
    },
    {
        name: 'Anecdotes App',
        avatar: 'qwer.png',
        category: ['backend'],
        description: 'CRUD webapp where people can post their favorite anecdotes',
        repository_url: '#',
        deploy_url: '',
        techStack: ['React', 'React Router', 'ReactQuery', 'TanStack', 'CSS'],
        tags: ['asdf', 'asdf', 'asdf']
    },
    {
        name: 'This Portfolio',
        avatar: 'qwer.png',
        category: ['frontend'],
        description: 'Basically all this website',
        repository_url: '#',
        deploy_url: '',
        techStack: ['Nextjs', 'Javascript', 'Tailwind', 'ShadCN'],
        tags: ['asdf', 'asdf', 'asdf']
    },
    {
        name: 'Medical Records',
        avatar: 'qwer.png',
        category: ['backend'],
        description: 'React Native App for creating medical records',
        repository_url: '#',
        deploy_url: '',
        techStack: ['React Native'],
        tags: ['asdf', 'asdf', 'asdf']
    },
    {
        name: 'PokeCards',
        avatar: 'qwer.png',
        category: ['backend'],
        description: 'Random Pokemon Card generator using data from the PokeAPI',
        repository_url: '#',
        deploy_url: '',
        techStack: ['PHP', 'CSS'],
        tags: ['asdf', 'asdf', 'asdf']
    },
]

export function SkillsSection() {
    const { data: skills, error, isLoading } = useQuery({ queryKey: ['technologies'], queryFn: fetchTechnologies })

    if (isLoading) return (<p>cargando...</p>)

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

                {/* <div className="flex flex-col"> */}

                {Object.entries(skills).map(([key, value]) =>
                    <TabsContent className="mt-4" key={key} value={key}>
                        <div className="flex gap-4 flex-wrap md:flex-nowrap items-stretch">
                            <Card className="w-[100%] lg:w-[60%] ">
                                <CardHeader>
                                    <CardTitle>Technologies</CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-1">
                                    <ChartContainer config={chartConfig} className="w-[100%] md:max-h-[30vw] h-[100%]"   >
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

                            <Card className="w-[100%] lg:w-[40%] ">
                                <CardHeader>
                                    <CardTitle>Projects</CardTitle>
                                </CardHeader>
                                <CardContent className="px-2  w-[100%]">

                                    <ScrollArea className="px-4 md:h-[30vw] w-[100%]" >
                                        <div className="space-y-5 w-[100%]">
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
                {/* </div> */}

            </Tabs >

        </>
    )
}