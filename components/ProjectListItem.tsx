
import { Project } from "@/lib/definitions";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

type props = {
    project: Project
}

export function ProjectListItem({ project }: props) {
    // return (JSON.stringify(project))
    return (
        <div key={project.name} className="flex items-center gap-4">
            <Avatar className="self-start">
                <AvatarImage src={project.avatar} alt={project.name} />
                <AvatarFallback></AvatarFallback>
            </Avatar>
            <div className="flex-col grow">
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <div>stars + commits + pr</div>
            </div>
            <div className="flex gap-2">
                <Button variant="ghost" >Repositorio</Button>
                <Button variant="outline" >Ver</Button>

            </div>
        </div>
    )

}