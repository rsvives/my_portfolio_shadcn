"use client"
import { fetchTechnologies } from "@/lib/data"
import { useQuery } from "@tanstack/react-query"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs"
import { ScrollArea, ScrollBar } from "./ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { ChartConfig, ChartContainer } from "./ui/chart"
import { Bar, BarChart, XAxis, YAxis } from "recharts"
import { TechnologyType } from "@/lib/definitions"

const chartConfig = {

    percentage: {
        label: "percentage",
        // color: "var(--chart-0)",
    },

} satisfies ChartConfig



export function SkillsSection() {
    const { data: skills, error, isLoading } = useQuery({ queryKey: ['technologies'], queryFn: fetchTechnologies })
    // const { data: projects, error, isLoading } = useQuery({ queryKey: ['projects'], queryFn: fetchProjects })

    const descriptions: Record<TechnologyType, React.ReactNode> = {
        "frontend": <FrontendDescription />,
        "backend": <BackendDescription />,
        "database": <DatabaseDescription />,
        "other": <OtherSkillsDescription />,
        'UX/UI': <DesignDescription />,
    }

    if (isLoading) return (<p>cargando...</p>)
    if (error) return (<div>error loading component 😢</div>)
    if (skills) {
        return (
            <>
                <Tabs defaultValue="frontend" className="w-[100%]" >
                    <ScrollArea className="w-[100%] sticky! top-24 z-10 px-1 md:px-0">
                        <TabsList>
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
                                        <CardTitle>Technologies & Frameworks</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex flex-1">
                                        <ChartContainer config={chartConfig} className="w-[100%] h-[60vw] sm:max-h-[35vw] sm:h-[100%] flex flex-1"   >
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
                                    <CardHeader>
                                        <h2 className="leading-none font-semibold tracking-tight capitalize">{key}</h2>
                                    </CardHeader>
                                    <CardContent className="flex flex-col flex-1 justify-between">
                                        {descriptions[key as TechnologyType]}
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

const FrontendDescription = () => {

    return (
        <div className="flex flex-col gap-2">
            {/* <h2 className="leading-none font-semibold tracking-tight">Frontend</h2> */}
            <p>I have been working with <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b> since 2019, building responsive and accesible user interfaces.</p>
            <p>I&apos;ve worked designing and developing reusable UI components and contributing to <b>Design Systems</b>. I currently use modern tools such as <b>Tailwind CSS</b> and <b>shadcn/ui</b> to create consistent and maintainable interfaces.</p>
            <p>I have professional experience with <b>Vue.js</b> and <b>Nuxt</b>, where I contributed to migrating a legacy <b>jQuery</b>-based application to a modern, SSR-enabled architecture.</p>
            <p>Since 2023, I have been working primarily with <b>React</b> and <b>TypeScript</b>, using <b>Zustand</b> and <b>TanStack Query</b> for state management in complex applications. I have also worked with <b>Next.js</b> and modern routing solutions.</p>
            <p>I have experience with <b>React Native</b> and I am interested in continuing to build cross-platform applications using this technology.</p>
            <p>Additionally, I have designed and implemented key frontend features for a logistics management system at <b>Grupo Impultec</b>, contributing to the company&apos;s growth in the <b>B2B</b> sector.</p>

        </div>
    )
}
const BackendDescription = () => {

    return (
        <div className="flex flex-col gap-2">
            {/* <h2>Backend</h2> */}
            <p>I started programming with <b>C++</b> 15 years ago. However, the first server-side language I used for web development was <b>PHP</b> in 2020, followed by <b>Node.js</b>.</p>
            <p>I currently use <b>Node.js</b> with <b>JavaScript</b> or <b>TypeScript</b> and <b>Express</b> to develop <b>REST APIs</b> and microservices. I have hands-on experience with <b>JWT</b>, <b>OAuth</b>, and <b>Socket.io</b>. I also occasionally work with <b>Laravel (PHP)</b> and use <b>Python</b> to build specialized services.</p>
            <p>I have taught server-side development using <b>PHP</b> and <b>Laravel</b>, as well as programming with <b>Java</b> and <b>Hibernate</b>. I am interested in further expanding my knowledge of message queuing technologies such as <b>RabbitMQ</b> and <b>Kafka</b>.</p>

        </div>
    )
}
const DatabaseDescription = () => {

    return (
        <div className="flex flex-col gap-2">
            {/* <h2>Database</h2> */}
            <p>I have worked extensively with relational databases using <b>MySQL</b>, and I have taught relational database courses focused on <b>DDL</b>, <b>DML</b>, and <b>DCL</b>, covering database design, querying, and access control.</p>
            <p>I have experience working with both <b>SQL</b> and <b>NoSQL</b> databases, including <b>MySQL</b> and <b>MongoDB</b>, designing efficient data models for web applications and backend services.</p>
            <p>I have built APIs using ORMs such as <b>Eloquent</b> with Laravel, <b>Mongoose</b> with Node.js, and <b>Prisma</b>, enabling efficient and maintainable data access.</p>
            <p>I have experience using <b>Supabase</b> as a backend platform and <b>Redis</b> for caching to improve application performance.</p>
            <p>I am currently expanding my knowledge in <b>PostgreSQL</b> and advanced database design for scalable systems.</p>

        </div>
    )
}

const OtherSkillsDescription = () => {

    return (
        <div className="flex flex-col gap-2">
            {/* <h2>Other Skills</h2> */}
            <p>I use <b>Docker</b> to containerize applications, ensuring consistent and reproducible development and deployment environments.</p>
            <p>I follow <b>Test-Driven Development (TDD)</b> practices and write unit tests using <b>Jest</b> and <b>Vitest</b>, as well as end-to-end tests with <b>Cypress</b> and <b>Playwright</b> to ensure application reliability.</p>
            <p>I implement <b>CI/CD pipelines</b> using <b>GitHub Actions</b>, and I previously introduced automated testing with <b>Jest</b> and CI/CD using <b>Jenkins</b> at <b>Grupo Impultec</b>, improving code quality and deployment workflows.</p>
            <p>I have experience working with cloud storage services such as <b>AWS S3</b> and <b>Cloudflare R2</b> for scalable file storage and delivery.</p>
            <p>I am comfortable working with <b>Linux</b> environments, managing <b>VPS servers</b>, and deploying applications on self-hosted infrastructure, including <b>Raspberry Pi</b> systems running web services and home automation projects.</p>
        </div>
    )
}
const DesignDescription = () => {

    return (
        <div className="flex flex-col gap-2">
            {/* <h2>UX/UI & Design</h2> */}
            <p>I hold a degree in <b>Industrial and Multimedia Design Engineering</b>, which provides me with a strong product-oriented mindset, balancing <b>user needs</b>, <b>business goals</b>, and <b>technical feasibility</b>. I apply design methodologies such as <b>Design Thinking</b> and the <b>Double Diamond</b> to create effective and user-centered solutions.</p>
            <p>What distinguishes me as a developer is my <b>end-to-end product perspective</b>. I am involved throughout the entire lifecycle, from understanding user pain points and defining features to implementing, testing and redesigning the product.</p>
            <p>I started in web development through <b>UX design</b>, designing the interface for my <b>Master&apos;s IoT-based project</b>, and I continue to use tools such as <b>Figma</b> to create wireframes, prototypes, and user interfaces.</p>
            <p>I am proficient with tools including <b>Photoshop</b>, <b>Illustrator</b>, and <b>After Effects</b>, and I have implemented <b>motion design</b> and microinteractions using <b>Lottie Files</b> to enhance user experience.</p>

        </div>
    )
}
