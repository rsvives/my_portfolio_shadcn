
import { Project } from "@/lib/definitions";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type props = {
    project: Project
}

export function ProjectListItem({ project }: props) {
    // return (JSON.stringify(project))
    return (
        <div key={project.name} className="flex items-start gap-4">
            <Avatar>
                <AvatarImage src={project.avatar} alt={project.name} />
                <AvatarFallback></AvatarFallback>
            </Avatar>
            <div className="flex-col grow">
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <div>stars + commits + pr</div>
            </div>
            <div className="self-center">button</div>
        </div>
    )

}