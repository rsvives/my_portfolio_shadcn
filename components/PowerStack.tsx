import Image from "next/image"
import { Card } from "./ui/card"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

export function PowerStack() {
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
        <div className="flex flex-col gap-4 flex-1">
            <h3 className="leading-none font-semibold tracking-tight" > My Power Stack</ h3>
            <div className="flex flex-1 items-center">

                <div className="flex gap-4 flex-wrap justify-between sm:justify-center w-full" >
                    {powerStack.map(tech =>
                        <Tooltip key={tech.name}>
                            <TooltipTrigger asChild >
                                <Card className={`p-2 w-fit flex-row items-center ${tech.shadow}`}>
                                    <Image className="aspect-square rounded-md" width={32} height={32} src={tech.icon} alt={`${tech.name} icon`}></Image>
                                </Card>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{tech.name}</p>
                            </TooltipContent>

                        </Tooltip>

                    )}
                </div>
            </div>
        </div >
    )
}