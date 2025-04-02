"use client"
import { useQuery } from "@tanstack/react-query";
import { ProjectList } from "./ProjectList";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { fetchProjects } from "@/lib/data";

export function ProjectsCard() {
    const { data: projects, error, isLoading } = useQuery({ queryKey: ['projects'], queryFn: fetchProjects })
    if (isLoading) return (<div>cargando...</div>)

    if (error || !projects) return (<div>error loading projects</div>)
    return (
        <Card className="w-[100%] lg:w-[40%] ">
            <CardHeader>
                <CardTitle>Projects</CardTitle>
            </CardHeader>
            <CardContent className="px-2  w-[100%]">

                <ScrollArea className="px-4 md:h-[30vw] w-[100%]" >
                    <ProjectList projects={projects} />
                    <ScrollBar orientation="vertical" />
                </ScrollArea>

            </CardContent>
        </Card>
    )
}