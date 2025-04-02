import { ProjectListItem } from "./ProjectListItem";
import { Project } from "@/lib/definitions";

export function ProjectList({ projects }: { projects: Project[] }) {

    return (
        <div className="flex flex-col space-y-5 w-[100%]">
            {projects.map(p =>
                <ProjectListItem key={p.name} project={p} />
            )}
        </div>
    )

}