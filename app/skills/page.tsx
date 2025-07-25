import FixedStats from "@/components/FixedStats";
import { SkillsSection } from "@/components/SkillsSection";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";

export default function SkillsPage() {

    const powerStack = [
        {
            name: 'React',
            icon: '/logos/react.svg',
            shadow: 'shadow-none hover:shadow-[0px_0px_12px_0px_#58C4DC]'
        },
        {
            name: 'Javascript',
            icon: '/logos/javascript.svg',
            shadow: 'shadow-none hover:shadow-[0px_0px_12px_0px_#F7DF1F]'
        },
        {
            name: 'Nodejs',
            icon: '/logos/node.svg',
            shadow: 'shadow-none hover:shadow-[0px_0px_12px_0px_#60A04E]'
        },
        {
            name: 'Express',
            icon: '/logos/express.svg',
            shadow: 'shadow-none hover:shadow-[0px_0px_12px_0px_#00000066]'
        },
        {
            name: 'TanStack Query',
            icon: '/logos/tanstack.png',
            shadow: 'shadow-none hover:shadow-[0px_0px_12px_0px_#FFC1AF]'
        },
        {
            name: 'MongoDB',
            icon: '/logos/mongo.svg',
            shadow: 'shadow-none hover:shadow-[0px_0px_12px_0px_#00ED64]'
        },
    ]


    return (
        <div className="flex flex-col flex-1 space-y-4 w-[100%]">
            <h2 className="text-3xl font-bold tracking-tight">Skills</h2>

            <Card className="">

                <CardContent className="flex gap-2 items-center justify-between">
                    <h3 className="text-xl font-bold tracking-tight">Power Stack</h3>
                    <div className="flex gap-4">
                        {powerStack.map(tech =>
                            <Tooltip key={tech.name}>
                                <TooltipTrigger asChild >
                                    <Card className={`p-2 w-fit flex-row items-center ${tech.shadow}`}>
                                        <Image className="aspect-square rounded-md" width={48} height={48} src={tech.icon} alt={`${tech.name} icon`}></Image>
                                    </Card>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{tech.name}</p>
                                </TooltipContent>

                            </Tooltip>

                        )}
                    </div>
                </CardContent>
            </Card>
            <SkillsSection />
            <FixedStats />
        </div>
    )
}

