'use client'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
// import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs"
import { Toggle } from "@/components/ui/toggle"
import { fetchPersonalSkills } from "@/lib/data"
import { PersonalSkills } from "@/lib/definitions"
import { BriefcaseBusiness, Check, CircleUser, GraduationCap, MapPin, Palette, Rocket } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"

export default function About() {
    const initialSkills = fetchPersonalSkills
    const [skills, setSkills] = useState(initialSkills)
    const [animate, setAnimate] = useState(false)

    function handleActiveSkills({ state, skill }: { state: boolean, skill: keyof PersonalSkills }) {
        console.log(state, skill)

        setSkills((old) => {
            old[skill] = state
            return { ...old }
        })
    }
    const education = [
        {
            title: {
                type: 'Bachelor Sc',
                name: 'Industrial Design & Multimedia Engineering'
            },
            place: {
                name: 'University of Wales',
                web: '',
                location: ''
            },
            date: '2010-2014',
            description: ''
        },
        {
            title: {
                type: "Master's Degree",
                name: 'Industrial Design Engineering'
            },
            place: {
                name: 'Polytechnic University of Madrid',
                web: '',
                location: ''
            },
            date: '2014-2016',
            description: ''
        },
        {
            title: {
                type: "Master's Degree",
                name: 'Education for Teaching'
            },
            place: {
                name: 'Polytechnic University of Madrid',
                web: '',
                location: ''
            },
            date: '2020-2021',
            description: ''
        },
        {
            title: {
                type: 'Bootcamp',
                name: 'FullStack Open'
            },
            place: {
                name: 'University of Helsinki',
                web: '',
                location: ''
            },
            date: '2024',
            description: ''
        }, {
            title: {
                type: 'Bachelor Sc',
                name: 'Computer Science'
            },
            place: {
                name: 'UNED -  National University of Remote Studies',
                web: '',
                location: ''
            },
            date: <Badge className="text-xs">now <Check /></Badge>,
            description: ''
        },

    ]

    useEffect(() => {
        console.log('use effect')
        setTimeout(() => setAnimate(true), 1500)
    }, [])

    return (
        <div className="flex flex-col flex-1 self-start items-center space-y-4 w-[100%]" >
            <section className="flex flex-col justify-center items-center gap-4 pt-8">
                <h1 className="text-3xl font-bold tracking-tight">About me</h1>
                <p className="text-lg max-w-[600px] md:text-center">
                    My skills as a <b>Design Engineer</b> allow me to be a <Badge className="rounded-sm md:text-sm"><Palette strokeWidth={2} /> creative </Badge> software developer, <Badge className="rounded-sm md:text-sm"> <CircleUser strokeWidth={2} /> user-centered</Badge> , and <Badge className="rounded-sm md:text-sm"> <Rocket strokeWidth={2} /> product-focused</Badge>.
                </p>
            </section>

            <Tabs defaultValue="carreer" className="relative">
                <TabsList className="self-center my-4 sticky top-24 z-20">
                    <TabsTrigger value="carreer" onClick={() => setAnimate(true)}>Carreer</TabsTrigger>
                    <TabsTrigger value="education" onClick={() => setAnimate(false)}>Education</TabsTrigger>
                </TabsList>
                <TabsContent value="carreer">
                    <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, type: 'spring', duration: 1 }} className="container flex flex-col w-full items-center">
                        <Card className="p-6 mb-4 shadow-none w-fit items-center">
                            <BriefcaseBusiness className="self-center" strokeWidth={1} size={48} />
                            <p className="text-md max-w-[600px] text-center">From 3D printing steel components to teaching web development, thanks to my diverse background, I have developed the following skills: <br /><span className="text-xs text-muted-foreground">(tap to highlight)</span></p>

                            <div className="flex flex-wrap gap-2 justify-center">
                                {Object.keys(skills).map((s) =>
                                    <Toggle
                                        variant='outline'
                                        className="text-xs md:text-sm hover:cursor-pointer"
                                        key={s}
                                        pressed={skills[s as keyof PersonalSkills]}
                                        onPressedChange={(state) => handleActiveSkills({ state, skill: s as keyof PersonalSkills })}
                                    >
                                        {s.replace('_', ' ')}
                                    </Toggle>
                                )}
                            </div>
                        </Card>
                        <Card className="border-none shadow-none w-full">
                            <CardContent className="p-0">
                                <Timeline skills={skills} animate={animate}></Timeline>
                            </CardContent>
                        </Card>

                    </motion.div>
                </TabsContent>

                <TabsContent value="education">
                    <div className="container flex flex-col w-full md:items-center">
                        <Card className="p-6 mb-8 shadow-none w-fit items-center">
                            <GraduationCap strokeWidth={1} size={48} />
                            <p className="text-md max-w-[600px] text-center">
                                Industrial Design & Multimedia Engineer with a Master in Design Engineering.<br /> Currently studing Computer Science.
                            </p>
                        </Card>
                        <div className="grid md:grid-cols-3 gap-4">
                            {education.map((el, i) =>
                                <motion.div key={el.title.name} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2, type: 'spring', duration: 0.5 }}>

                                    <Card className="flex-1 h-full">
                                        <CardContent className="h-full flex flex-col justify-between gap-4">
                                            <div>
                                                <div className="flex justify-between">
                                                    <h2 className="text-sm font-bold">{el.title.type}</h2>
                                                    <span className="text-sm">{el.date}</span>
                                                </div>
                                                <h2 className="text-lg">{el.title.name}</h2>

                                            </div>
                                            <div className="flex gap-2 items-start md:h-[36px] lg:h-auto ">
                                                <MapPin size={16} />
                                                <span className="flex-1 text-sm">{el.place.name}</span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            )}
                        </div>
                    </div>

                </TabsContent>
            </Tabs>
        </div>

    )
}



type TimelineProps = {
    skills: PersonalSkills,
    animate: boolean
}
const Timeline = ({ skills, animate }: TimelineProps) => {
    const carreer = [
        {
            date: '2016',
            duration: '6 months',
            title: 'Robotics & Electronics Educational Projects',
            company: {
                name: 'ConMásFuturo',
                logo: '/logos/companies/conmasfuturo.png',
            },
            description: 'While finishing my Master’s degree in Design Engineering, I simultaneously worked as an R&D technician, designing and developing educational robotics and electronics projects for children and teenagers. Many of the projects involved 3D printing, electronic components, and programming with Arduino or Raspberry Pi. The challenge was to make the projects engaging enough for students to learn while having fun.',
            tags: ['R&D', 'design', 'robotics', 'electronics', 'creativity', 'teamwork']

        },
        {
            date: '2017',
            duration: '1.5 years',
            title: 'R&D Design Engineer',
            company: {
                name: 'ArcelorMittal R&D',
                logo: '/logos/companies/arcelormittal.png',
            },
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos illo minus dolorum vero cupiditate. Quo ex perferendis sed est libero?',
            tags: ['R&D', 'design', 'research', 'communication', 'additive manufacturing', 'adaptation', 'quick_learning', 'open innovation']

        },
        {
            date: '2019',
            duration: '2 years',
            title: 'UX Engineer',
            company: {
                name: 'Impultec Group',
                logo: '/logos/companies/grupoimpultec.png',
            },
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos illo minus dolorum vero cupiditate. Quo ex perferendis sed est libero?',
            tags: ['UX', 'creativity', 'figma', 'adaptation', 'communication', 'Nuxt', 'teamwork', 'js', 'PHP', 'MySQL']

        },
        {
            date: '2021',
            duration: '3 years',
            title: 'Web Dev Educator',
            company: {
                name: 'Unendo',
                logo: '/logos/companies/afa.png',
            },
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos illo minus dolorum vero cupiditate. Quo ex perferendis sed est libero?',
            tags: ['communication', 'adaptation', 'leadership', 'js', 'PHP', 'MySQL', 'creativity']

        },
    ]

    const navVariants = {
        open: {
            transition: { staggerChildren: 0.2, delayChildren: 0.5 },
        },
        closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 },
        },
    }

    return (
        <motion.nav initial={false} animate={animate ? 'open' : 'closed'} className="relative flex flex-col items-center md:mt-12">
            <motion.div className={`absolute -top-[32px] left-0 hidden h-0.5 bg-foreground md:block w-full self-start`} initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }} transition={{
                delay: 1,
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}></motion.div>
            <motion.ul variants={navVariants} className={`grid w-full md:grid-cols-4 gap-0 md:gap-6`}>
                {/* <div className={`w-max flex space-x-4 p-4`}> */}
                {carreer.map(c =>
                    <TimelineItem key={c.title} date={c.date} title={c.title} description={c.description} tags={c.tags} filters={skills} company={c.company} duration={c.duration} />)}
            </motion.ul>
        </motion.nav >


    )
}


type TimelineItemProps = {
    date: string,
    duration: string,
    company: {
        name: string,
        logo: string
    }
    title: string,
    description: string,
    tags: string[],
    filters: PersonalSkills
}

const TimelineItem = ({ date, title, description, tags, filters, company, duration }: TimelineItemProps) => {

    const itemVariants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 10, velocity: -100 },
            },
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 10 },
            },
        },
    }

    return (
        <motion.li variants={itemVariants} className="relative space-y-2 pt-4 md:pt-0">
            <div data-orientation="vertical" role="none" data-slot="separator-root" className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px absolute top-6 left-0 block md:hidden"></div>
            <div className="absolute left-0 z-10 w-0.5 bg-foreground h-full md:hidden"></div>
            <div className="absolute top-4 -left-[9px] z-10 mb-5 flex size-5 items-center justify-center rounded-full bg-foreground p-1 md:-top-10 md:left-0">
                <p className="hidden md:block text-sm text-muted-foreground absolute top-[-24px]">{date}</p>
                <div className="size-full rounded-full bg-background"></div>
            </div>

            <div className="pl-7 md:pl-0 flex flex-col gap-2">
                <p className="md:hidden text-sm text-muted-foreground">{date}</p>
                <p className="text-sm">{duration}</p>
                <h2 className="text-lg font-bold tracking-tighter text-foreground">{title}</h2>
                <div className="flex gap-2 items-center">
                    <Avatar className="w-[40px] h-[40px] rounded-full">
                        <Image src={company.logo} alt={company.logo + ' logo'} width={40} height={40} className="aspect-square" />
                        <AvatarFallback></AvatarFallback>
                    </Avatar>
                    <p>{company.name}</p>
                </div>
                <div className="flex gap-1 flex-wrap mt-2">

                    {tags.map(t => {
                        const isSkill = t in filters
                        return (
                            <Badge
                                key={t}
                                variant={isSkill && filters[t as keyof PersonalSkills] ? 'default' : 'outline'}
                                className="rounded-full"
                            >
                                {t.replace('_', ' ')}
                            </Badge>
                        );
                    })}
                </div>
                <Accordion type="single" collapsible >
                    <AccordionItem value={title}>
                        <AccordionTrigger className="flex justify-start gap-2">See more</AccordionTrigger>
                        <AccordionContent>
                            <p className="text-sm text-muted-foreground">{description}</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </motion.li >
    )
}