import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { fetchProjects } from "@/lib/data"
import { sluggify } from "@/lib/utils"
import { ArrowLeft } from "lucide-react"
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
        <div>
            <Link href={'/projects'} className="flex gap-1 items-center flex-row text-sm font-medium hover:underline"><ArrowLeft size={16} /> Back to Projects</Link>
            <h2 className="text-2xl">{selectedProject.name}</h2>
            <p>{selectedProject.description}</p>
            <div className="flex flex-wrap gap-1 mt-2">
                {selectedProject.techStack.map(tech =>
                    <Badge key={tech} variant={'outline'} className="rounded-full">{tech}</Badge>
                )}
            </div>
            <div className="flex gap-2 mt-5">
                <Link href={selectedProject.repository_url}>
                    <Button variant={'outline'} > View on Github
                    </Button>
                </Link>
                <Link href={selectedProject.deploy_url}>
                    <Button  > Demo
                    </Button>
                </Link>

            </div>
        </div>
    )
}