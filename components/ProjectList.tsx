import { ProjectListItem } from "./ProjectListItem";
import { Project } from "@/lib/definitions";

type props = {
    projects: Project[],
    type: "list" | "grid"
}

export function ProjectList({ projects, type = 'list' }: props) {

    const style = type === 'list' ? 'flex flex-col' : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'

    return (
        <div className={style + ' space-y-5 w-[100%]'}>
            {projects.map(p =>
                <ProjectListItem key={p.name} showLinks={false} project={p} />
            )}
        </div>
    )

}