'use client'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
// import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs"
// import { Toggle } from "@/components/ui/toggle"
import { fetchPersonalSkills } from "@/lib/data"
import { PersonalSkills, TechIcon } from "@/lib/definitions"
import { BriefcaseBusiness, Check, CircleUser, GraduationCap, MapPin, Palette, Rocket, } from "lucide-react"
import { JSX, useEffect, useState } from "react"
import { motion } from "motion/react"
import { Avatar, AvatarFallback, AvatarGroup } from "@/components/ui/avatar"
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
// import { Button } from "@/components/ui/button"
import { AvatarImage } from "@radix-ui/react-avatar"

export default function About() {
    // const skills = fetchPersonalSkills
    const initialSkills = fetchPersonalSkills
    // const [skills, setSkills] = useState(initialSkills)
    const [skills] = useState(initialSkills)
    const [animate, setAnimate] = useState(false)

    // function handleActiveSkills({ state, skill }: { state: boolean, skill: keyof PersonalSkills }) {
    //     console.log(state, skill)

    //     setSkills((old) => {
    //         old[skill] = state
    //         return { ...old }
    //     })
    // }

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
        <div className="flex flex-col flex-1 self-start items-center space-y-4 w-full max-w-3xl" >
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
                        <Card className="p-6 mb-4 md:mb-12 shadow-none w-fit items-center">
                            <BriefcaseBusiness className="self-center" strokeWidth={1} size={48} />
                            <h2 className="font-bold text-2xl">My Carreer</h2>
                            <p className="text-md  text-center">From 3D printing steel components to teaching web development, thanks to my diverse background, I have developed the following skills: <br />
                                {/* <span className="text-xs text-muted-foreground">(tap to highlight)</span> */}
                            </p>

                            {/* <div className="flex flex-wrap gap-2 justify-center">
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
                                <Button variant='outline'
                                    className="text-xs bg-none p-1 md:text-sm hover:cursor-pointer "
                                    onClick={() => setSkills(initialSkills)}
                                >
                                    <X size={24} />
                                </Button>
                            </div> */}
                        </Card>

                        <Timeline skills={skills} animate={animate}></Timeline>


                    </motion.div>
                </TabsContent>

                <TabsContent value="education">

                    <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, type: 'spring', duration: 1 }} className="container flex flex-col w-full items-center">
                        <Card className="p-6 mb-8 shadow-none w-fit items-center">
                            <GraduationCap strokeWidth={1} size={48} />
                            <p className="text-md max-w-[600px] text-center">
                                Industrial Design & Multimedia Engineer with a Master in Design Engineering.<br /> Currently studing Computer Science.
                            </p>
                        </Card>
                        <div className="grid md:grid-cols-3 gap-4">
                            {education.map((el, i) =>
                                <motion.div key={el.title.name} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2, type: 'spring', duration: 1 }}>

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
                    </motion.div>

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
            date: '2023',
            company: [
                {
                    name: 'Freelance',
                    logo: '/logos/companies/dev.png',
                },
            ],
            positions: [
                {
                    title: 'FullStack Developer',
                    duration: 'Jun 2023 - Currently',
                    tags: ['Next.js', 'React', 'Tailwind', 'shadcn/ui', 'Node.js', 'Typescript', 'Supabase', 'MySQL', 'REST API', 'Vercel', 'Nuxtjs', 'Vue'],
                    description:
                        <>
                            <p>I developed a custom <b>CRM</b> for <b>PreverLaboral</b>, migrating a legacy system built with <b>PHP3</b> and <b>MySQL</b> to a modern <b>Single Page Application (SPA)</b> using <b>React</b>, <b>TypeScript</b>, and <b>Tailwind CSS</b>. I also built a <b>REST API</b> with <b>Node.js</b> to support the new frontend while maintaining the existing <b>MySQL</b> database, significantly improving usability, maintainability, and scalability.</p>
                            <p>I am currently developing the corporate website for <b>Caravia Consultores</b>, a civil engineering consultancy, using <b>Next.js</b>, <b>TypeScript</b>, and <b>shadcn/ui</b>. The platform includes <b>server-side rendering (SSR)</b> and a secure admin dashboard that allows authenticated users to manage projects through a simple CMS, powered by <b>Supabase</b> for authentication and database management.</p>

                        </>

                }
            ]
        },
        {
            date: '2021',
            company: [
                {
                    name: 'Restauradores Bercianos',
                    logo: '/logos/companies/rbercianos-isotipo.jpeg',
                },
                {
                    name: 'AFA Formación',
                    logo: '/logos/companies/afa.png',
                },
                {
                    name: 'Consejería Educación de Asturias',
                    logo: '/logos/companies/asturias.png',
                },
            ], positions: [
                {
                    title: 'Web Development Teacher',
                    duration: 'Sept 2021 - Currently',
                    tags: ['HTML', 'CSS', 'PHP', 'Laravel', 'Node.js', 'Javascript', 'MySQL', 'MongoDB', 'Docker', 'Git', 'Github', 'Java', 'Hibernate', 'communication', 'adaptation', 'leadership'],
                    description:
                        <>
                            {/* <p>In 2021, I was invited by <b>AFA Formación</b> to teach in the official higher vocational programs for <b>Web Development (DAW)</b> and <b>Multiplatform Application Development (DAM)</b>. I also delivered the official <b>SEPE Web Application Development Certificate (IFCD0210)</b> at <b>AFA Formación</b> and <b>Restauradores Bercianos</b>, teaching <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b> for frontend development, and <b>PHP</b> with <b>MySQL</b> for backend development.</p> */}
                            <p>I am currently an interim Teacher for the <b>Regional Ministry of Education </b>of the Principality of Asturias teaching in the official higher vocational programs for <b>Web Development (DAW)</b> and <b>Multiplatform Application Development (DAM)</b>. Previously worked at <b>AFA Formación</b> and <b>Restauradores Bercianos.</b></p>
                            <p> My teaching experience includes <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>, server-side development with <b>PHP</b>, <b>Laravel</b>, and <b>Node.js</b>, programming with <b>Java</b>,  relational databases with <b>MySQL</b>, and application deployment using <b>Docker</b>, <b>Linux</b>, <b>SSH</b>, and <b>Git/GitHub</b>.</p>

                        </>
                    //'While working as a UX Engineer, I was contacted by Unendo (by AFA Formación) to teach classes in the Advanced Vocational Programs in Web Application Development and Multiplatform Application Development. Among the subjects I have taught are Databases (MySQL), Markup Languages (HTML and CSS), Server-Side Web Development (PHP and Node.js), and Data Access (Java), among others. During this period, I refined my communication skills and adaptability, as things in the classroom don’t always go as planned, and it’s important to know how to think on your feet.',
                }

            ]

        },
        {
            date: '2019',

            company: [
                {
                    name: 'Impultec Group',
                    logo: '/logos/companies/grupoimpultec.png',
                }
            ],
            positions: [
                {
                    title: 'Frontend Developer',
                    duration: 'Sep 2019 - Sep 2021 (2 yrs)',
                    tags: ['Javascript', 'Vue', 'Nuxt', 'NodeJS', 'MySQL', 'PHP', 'jQuery', 'Docker', 'Git', 'Bootstrap', 'Vuetify'],
                    description:
                        <>
                            <p>I developed reusable UI components using <b>Vue.js</b>, <b>Vuetify</b>, and <b>Nuxt</b>, and implemented data fetching and advanced filtering features to visualize shipment data. I also designed and developed key parts of a <b>logistics management system</b> for eCommerce fulfillment, and created <b>REST API endpoints</b> using <b>Node.js</b>.</p>
                            <p>I introduced <b>TDD practices</b> using <b>Jest</b> and implemented <b>CI/CD pipelines</b> with <b>Jenkins</b> to improve code quality and deployment reliability. Additionally, I enhanced the shipment creation workflow at <b>Genei.es</b> by splitting it into a scalable multi-step process using <b>HTML</b>, <b>CSS</b>, <b>jQuery</b>, and <b>PHP</b>, implemented <b>internationalization (i18n)</b>, and developed <b>landing pages</b> for affiliates using <b>HTML</b>, <b>CSS</b>, <b>Bootstrap</b>, <b>PHP</b>, and <b>MySQL</b>.</p>
                        </>
                    //'Grupo Impultec is a logistics management company with a small development team, whose main product is a logistics company comparison tool for individuals and businesses.  and developing those interfaces using HTML, CSS, JS, and later, Nuxt and Vue. One of the main challenges our development team faced was the design and development of a warehouse management system to compete with Amazon Fulfillment.',
                }, {
                    title: 'UX Engineer',
                    duration: 'Apr 2019 - Sep 2019 (6 mos)',
                    tags: ['UX Research', 'Design System', 'UI design', 'Figma', 'Design Thinking', 'A/B Testing', 'Feature Definition', 'Google Analytics'],
                    description:
                        //'As a UX Engineer, my tasks included identifying areas for improvement from a usability standpoint, enhancing the visual design of interfaces.',
                        <>
                            <p>I conducted <b>UX research</b> and <b>UI design</b> to define user-centered digital products, including conceptual design, wireframing, and the creation of scalable <b>Design Systems</b>. I used prototyping tools such as <b>Figma</b> and <b>Adobe XD</b> to design and validate interfaces before development.</p>

                            <p>I also implemented responsive <b>HTML</b> and <b>CSS</b> layouts for landing pages, and designed and developed <b>email templates</b> and marketing campaigns, ensuring consistency across platforms and devices.</p>

                        </>
                }

            ],

        },
        // {
        //     date: '2016',
        //     duration: '6 months',
        //     title: 'Robotics & Electronics Educational Projects',
        //     company: {
        //         name: 'ConMásFuturo',
        //         logo: '/logos/companies/conmasfuturo.png',
        //     },
        //     description: 'While finishing my Master’s degree in Design Engineering, I simultaneously worked as an R&D technician, designing and developing educational robotics and electronics projects for children and teenagers. Many of the projects involved 3D printing, electronic components, and programming with Arduino or Raspberry Pi. The challenge was to make the projects engaging enough for students to learn while having fun.',
        //     tags: ['R&D', 'design', 'robotics', 'electronics', 'creativity', 'teamwork']

        // },
        // {
        //     date: '2017',
        //     duration: '1.5 years',
        //     title: 'R&D Design Engineer',
        //     company: {
        //         name: 'ArcelorMittal R&D',
        //         logo: '/logos/companies/arcelormittal.png',
        //     },
        //     description: 'I had the opportunity to be part of a select group of researchers, engineers, and scientists at ArcelorMittal Global R&D. During this time, I was part of the additive manufacturing team, where I applied my design and engineering knowledge to help improve the steelmaking process by leveraging the advantages of advanced 3D printing with plastic and metal materials. I also contributed my skills in part scanning, material selection, and research into use cases where additive manufacturing with steel has a place in the industry.',
        //     tags: ['R&D', 'design', 'research', 'communication', 'additive manufacturing', 'adaptation', 'quick_learning', 'open innovation']

        // },


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
        <motion.nav initial={false} animate={animate ? 'open' : 'closed'} className="relative flex flex-col items-center w-full pl-[60px]">
            <motion.div className={`absolute -top-[32px] left-0 hidden h-0.5 bg-foreground  w-full self-start`} initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }} transition={{
                delay: 1,
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}></motion.div>
            <motion.ul variants={navVariants} className={`grid w-full gap-0`}>
                {/* <div className={`w-max flex space-x-4 p-4`}> */}
                {carreer.map(c =>
                    <TimelineItem key={c.date} date={c.date} positions={c.positions} filters={skills} company={c.company} />
                )}
            </motion.ul>
        </motion.nav >


    )
}


type TimelineItemProps = {
    date: string,
    company: {
        name: string,
        logo: string
    }[],
    positions: {
        title: string,
        description: JSX.Element | string,
        tags: string[],
        techStack?: TechIcon[],
        duration: string

    }[],
    filters: PersonalSkills
}

const TimelineItem = ({ date, positions, filters, company }: TimelineItemProps) => {

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

        <motion.li variants={itemVariants} className="relative space-y-2 pt-2 pb-6">
            <div data-orientation="vertical" role="none" data-slot="separator-root" className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px absolute top-6 left-0 block"></div>
            <div className="absolute left-0 z-10 w-0.5 bg-foreground h-full "></div>
            <div className="absolute top-4 -left-[9px] z-10 mb-5 flex size-5 items-center justify-center rounded-full bg-foreground p-1">
                <p className="hidden text-sm text-muted-foreground absolute top-[-24px]">{date}</p>
                <div className="size-full rounded-full bg-background"></div>
            </div>

            {/* <Card className="flex flex-1 h-full">
                <CardContent className="h-full"> */}


            <div className="pl-5 flex flex-col gap-2 h-full">
                <p className="text-sm text-muted-foreground absolute left-[-48px] top-[16px]">{date}</p>

                <div className="flex flex-col sm:flex-row gap-2 sm:items-center ">
                    <AvatarGroup className="transition duration-500 ease-in-out hover:space-x-2">
                        {company.map(c =>
                            <Avatar key={c.name} className="bg-white shadow-lg" >
                                <AvatarImage src={c.logo} alt={c.logo + ' logo'} className="aspect-square" />
                                <AvatarFallback>{c.name}</AvatarFallback>
                            </Avatar>
                        )}
                    </AvatarGroup>
                    <p className="text-sm">
                        {company.map((c, i) => c.name + (i < company.length - 2 ? ', ' : '') + (i == company.length - 2 ? ' y ' : ''))}
                    </p>
                </div>


                {positions.map(job =>
                    <div key={job.title}>
                        <div className="flex flex-col sm:flex-row gap-2 items-baseline">
                            <h2 className="text-lg font-bold tracking-tighter text-foreground">{job.title}</h2>
                            <p className="text-sm">{job.duration}</p>
                        </div>

                        <div className="flex gap-1 flex-wrap my-2 max-w-xl">

                            {job.tags.map(t => {
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

                        <div className="text-sm flex flex-col gap-2">
                            {job.description}
                        </div>

                        {/* <Accordion type="single" collapsible className="">
                            <AccordionItem value={job.title}>
                                <AccordionTrigger className="flex justify-start gap-2">See more</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-sm text-muted-foreground">{job.description}</p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion> */}
                    </div>
                )}
            </div>

            {/* </CardContent>
            </Card> */}
        </motion.li >
    )
}