'use client'
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs"
import { Toggle } from "@/components/ui/toggle"
import { BriefcaseBusiness, CircleUser, GraduationCap, Palette, Rocket } from "lucide-react"
import { useEffect, useState } from "react"

type Skills = {
    creativity: boolean,
    communication: boolean,
    adaptation: boolean,
    teamwork: boolean,
    quick_learning: boolean
}

export default function About() {
    const progress = 100

    const carreer = [
        {
            date: '2016',
            title: 'Robotics & Electronics Educational Projects',
            company: 'ConMásFuturo',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos illo minus dolorum vero cupiditate. Quo ex perferendis sed est libero?',
            tags: ['R&D', 'design', 'robotics', 'electronics', 'creativity', 'teamwork']

        },
        {
            date: '2017',
            title: 'R&D Design Engineer',
            company: 'ArcelorMittal R&D',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos illo minus dolorum vero cupiditate. Quo ex perferendis sed est libero?',
            tags: ['R&D', 'design', 'research', 'communication', 'additive manufacturing', 'adaptation', 'quick_learning', 'open innovation']

        },
        {
            date: '2019',
            title: 'UX Engineer',
            company: 'Impultec Group',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos illo minus dolorum vero cupiditate. Quo ex perferendis sed est libero?',
            tags: ['UX', 'creativity', 'figma', 'adaptation', 'communication', 'Nuxt', 'teamwork', 'js', 'PHP', 'MySQL']

        },
        {
            date: '2021',
            title: 'Web Dev Educator',
            company: 'Unendo',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos illo minus dolorum vero cupiditate. Quo ex perferendis sed est libero?',
            tags: ['communication', 'adaptation', 'leadership', 'js', 'PHP', 'MySQL', 'creativity']

        },
    ]

    // function handleClick(value: MouseEvent) {
    //     console.log(value.target)
    // }



    const initialSkills: Skills = {
        creativity: false,
        communication: false,
        adaptation: false,
        teamwork: false,
        quick_learning: false
    }

    const [skills, setSkills] = useState<Skills>(initialSkills)

    function handleActiveSkills({ state, skill }: { state: boolean, skill: keyof Skills }) {
        console.log(state, skill)

        setSkills((old) => {
            old[skill] = state
            return { ...old }
        })

    }

    useEffect(() => console.log(skills), [skills])


    return (
        <div className="flex flex-col flex-1 self-start items-center space-y-4 w-[100%]">
            <h1 className="text-3xl font-bold tracking-tight">About me</h1>
            <p className="text-lg max-w-[600px] md:text-center">My skills as a <b>Design Engineer</b> allow me to be a <Badge className="rounded-sm md:text-sm"><Palette strokeWidth={2} /> creative </Badge> software developer, <Badge className="rounded-sm md:text-sm"> <CircleUser strokeWidth={2} /> user-centered</Badge> , and <Badge className="rounded-sm md:text-sm"> <Rocket strokeWidth={2} /> product-focused</Badge>.
            </p>

            <Tabs defaultValue="carreer" className="relative">
                <TabsList className="self-center my-6 sticky top-24 z-20">
                    <TabsTrigger value="carreer">Carreer</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                </TabsList>
                <TabsContent value="carreer">
                    <div className="container flex flex-col w-full items-center">
                        <Card className="p-6 mb-4 shadow-none w-fit items-center">
                            <BriefcaseBusiness className="self-center" strokeWidth={1} size={48} />
                            <p className="text-md max-w-[600px] text-center">From 3D printing steel componentes to teaching web development, thanks to my diverse background, I have developed the following skills:</p>
                            <div className="flex flex-wrap gap-2 md:py-4 justify-center">
                                {Object.keys(skills).map((s) =>
                                    <Toggle
                                        variant='outline'
                                        className="text-xs md:text-sm hover:cursor-pointer"
                                        key={s}
                                        pressed={skills[s as keyof Skills]}
                                        onPressedChange={(state) => handleActiveSkills({ state, skill: s as keyof Skills })}
                                    >
                                        {s.replace('_', ' ')}
                                    </Toggle>
                                )}
                            </div>
                        </Card>
                        <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 relative w-full border-none shadow-none md:py-8">
                            <div data-slot="card-content" className="p-0">
                                <div className="relative flex flex-col items-center md:mt-12">
                                    <div data-orientation="horizontal" role="none" data-slot="separator-root" className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px absolute -top-8 left-0 hidden md:block"></div>
                                    <div className={`absolute -top-[32px] left-0 hidden h-0.5 bg-foreground md:block`} style={{ width: progress + '%' }} ></div>
                                    <div className={`grid w-full gap-6 md:grid-cols-4`}>
                                        {carreer.map(c =>
                                            <TimelineItem key={c.title} date={c.date} title={c.title} description={c.description} tags={c.tags} filters={skills} />)}

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="education">
                    <div className="container flex flex-col w-full md:items-center">
                        <Card className="p-6 mb-4 shadow-none w-fit items-center">
                            <GraduationCap strokeWidth={1} size={48} />
                            {/* <h2 className="text-xl font-bold py-4">Education</h2> */}
                            <p className="text-md max-w-[600px] text-center">
                                Industrial Design Engineer with a Master in Design Engineering. Currently studing Computer Science.
                            </p>

                        </Card>
                    </div>

                </TabsContent>
            </Tabs>
        </div >

    )
}

type TimelineProps = {
    date: string,
    title: string,
    description: string,
    tags: string[],
    filters: Skills

}

const TimelineItem = ({ date, title, description, tags, filters }: TimelineProps) => {


    return (
        <div className="relative space-y-2">
            <div data-orientation="vertical" role="none" data-slot="separator-root" className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px absolute top-6 left-0 block md:hidden"></div>
            {/* <div className="absolute left-0 z-10 w-0.5 bg-foreground h-[224px] md:hidden"></div> */}
            <div className="absolute top-0 -left-[9px] z-10 mb-5 flex size-5 items-center justify-center rounded-full bg-foreground p-1 md:-top-10 md:left-0">
                <p className="hidden md:block text-sm text-muted-foreground absolute top-[-24px]">{date}</p>
                <div className="size-full rounded-full bg-background"></div>
            </div>

            <div className="pl-7 md:pl-0 flex flex-col gap-2">
                <p className="md:hidden text-sm text-muted-foreground">{date}</p>
                <h2 className="text-xl font-bold tracking-tighter text-foreground">{title}</h2>
                <div className="flex gap-1 flex-wrap">
                    {tags.map(t => {
                        const isSkill = t in filters;
                        return (
                            <Badge
                                key={t}
                                variant={isSkill && filters[t as keyof Skills] ? 'default' : 'outline'}
                                className="rounded-full"
                            >
                                {t.replace('_', ' ')}
                            </Badge>
                        );
                    })}
                </div>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
        </div>
    )
}