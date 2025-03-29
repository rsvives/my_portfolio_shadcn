
import { Project } from "@/lib/definitions";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { GitCommit, StarIcon, StarsIcon } from "lucide-react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ScrollBar } from "./ui/scroll-area";
import { Badge } from "./ui/badge";

type props = {
    project: Project
}

export function ProjectListItem({ project }: props) {
    // return (JSON.stringify(project))
    return (
        <div key={project.name} className="flex items-center gap-4">
            {/* <Avatar className="self-start hidden sm:block">
                <AvatarImage src={project.avatar} alt={project.name} />
                <AvatarFallback></AvatarFallback>
            </Avatar> */}
            <div className="flex flex-col flex-1 ">
                <h4 className="text-md font-medium">{project.name}</h4>
                <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                    {project.techStack.map(tech =>
                        <Badge key={tech} variant={'outline'} className="rounded-full">{tech}</Badge>
                    )}
                </div>
            </div>

            {/* <Button variant="ghost" className="flex">View</Button> */}

        </div>
    )

}