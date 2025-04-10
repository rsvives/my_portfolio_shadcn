
import { Project } from "@/lib/definitions";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { sluggify } from "@/lib/utils";

type props = {
    project: Project,
    showLinks: boolean
}

export function ProjectListItem({ project, showLinks = false }: props) {
    // return (JSON.stringify(project))

    return (
        <Link href={`/projects/${sluggify(project.name)}`} className="flex items-start gap-4 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-[100%]">
            {/* <div key={project.name} className=""> */}
            {/* <Avatar className="self-start hidden sm:block">
                <AvatarImage src={project.avatar} alt={project.name} />
                <AvatarFallback></AvatarFallback>
            </Avatar> */}
            <div className="flex flex-col flex-1 gap-2">
                <h4 className="text-md font-medium">{project.name}</h4>
                <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                    {project.techStack.map(tech =>
                        <Badge key={tech} variant={'outline'} className="rounded-full">{tech}</Badge>
                    )}
                </div>
            </div>
            {showLinks && <ProjectLinks repo={project.repository_url} demo={project.deploy_url} />}

            {/* <Button variant="ghost" className="flex">View</Button> */}

            {/* </div > */}
        </Link>
    )

}

type projectLinksprops = {
    repo: string | null,
    demo: string | null
}
function ProjectLinks({ repo, demo }: projectLinksprops) {
    return (
        <div>
            <p>{repo}</p>
            <p>{demo}</p>
        </div>
    )
}