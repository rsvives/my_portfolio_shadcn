import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { fetchProjects } from "@/lib/data"
import { sluggify } from "@/lib/utils"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const projects = await fetchProjects()
    const { slug } = await params

    const selectedProject = projects.find((p) => slug === sluggify(p.name))
    if (!selectedProject) notFound()

    return (
        <div className="max-w-[600px] w-[100%]">
            <Carousel className="mb-4">
                <CarouselContent className="-ml-4">
                    {selectedProject.pics.map((pic, index) => (
                        <CarouselItem className={`basis-1/1 sm:basis-1/2`} key={index}>
                            <div className="h-[200px] relative">
                                <Image src={`/${pic}`} alt={selectedProject.name} fill className="bg-accent-foreground rounded-lg object-cover" />
                            </div>
                        </CarouselItem>

                    ))}
                </CarouselContent>
                <CarouselPrevious className="invisible sm:visible" />
                <CarouselNext className="invisible sm:visible" />
            </Carousel>


            <Link href={'/projects'} className="flex gap-1 items-center flex-row text-sm font-medium hover:underline mb-4"><ArrowLeft size={16} /> Back to Projects</Link>
            <h2 className="text-2xl mb-3">{selectedProject.name}</h2>
            <p>{selectedProject.description}</p>
            <div className="flex flex-wrap gap-1 mt-4">
                {selectedProject.techStack.map(tech =>
                    <Badge key={tech} variant={'outline'} className="rounded-full">{tech}</Badge>
                )}
            </div>
            <div className="flex gap-2 mt-5">
                <ProjectLink url={selectedProject.repository_url} type="repo" />
                <ProjectLink url={selectedProject.deploy_url} type="demo" />

            </div>
        </div >
    )
}

function ProjectLink({ url, type }: { url: string | null, type: 'repo' | 'demo' }) {

    const buttonText = type === 'repo' ? 'View on Github' : 'Demo'
    const buttonVariant: { [key in 'repo' | 'demo']: "outline" | "link" | "default" | "secondary" | "destructive" | "ghost" | null | undefined } = {
        'repo': 'outline',
        'demo': undefined
    }
    const popoverText = {
        'repo': 'This repository might be private',
        'demo': 'This project might not be deployed yet'
    }
    if (url) {
        return (
            <Button variant={buttonVariant[type]} asChild>
                <a href={url} target="_blank"  >{buttonText}</a>
            </Button>
        )
    } else {
        return (
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant={buttonVariant[type]} >
                        {buttonText}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="min-w-[340px]">
                    <span className="font-medium text-sm">Please notice:</span>
                    <p>{popoverText[type]}</p>
                </PopoverContent>
            </Popover>
        )
    }
}