import { ProjectList } from "@/components/ProjectList";
import { fetchProjects } from "@/lib/data";

export default async function ProjectsPage() {
    const projects = await fetchProjects()


    return (
        <div className="flex flex-col flex-1 items-start justify-start self-start space-y-4 w-[100%]">
            <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
            <ProjectList projects={projects} type="grid" />
        </div>
    )
}