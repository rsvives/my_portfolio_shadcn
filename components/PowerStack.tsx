
import { Card } from "./ui/card"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { ExpressIcon } from "./Icons/ExpressIcon"
import { JavascriptIcon } from "./Icons/JavascriptIcon"
import { ReactIcon } from "./Icons/ReactIcon"
import { TanStack } from "./Icons/TanStack"
import Node from "@/public/logos/node.svg"
import Mongo from "@/public/logos/mongo.svg"

type Props = {
    title?: string | false,
    align?: string
}

export function PowerStack({ title = "My Power Stack", align = "justify-center" }: Props) {
    const iconDimensions = { width: 28, height: 28 }

    const powerStack = [
        {
            name: 'React',
            icon: <ReactIcon {...iconDimensions} />,
            shadow: 'shadow-none hover:shadow-[0px_0px_12px_0px_#58C4DC]'
        },
        {
            name: 'Javascript',
            icon: <JavascriptIcon {...iconDimensions} />,
            shadow: 'shadow-none hover:shadow-[0px_0px_12px_0px_#F7DF1F]'
        },
        {
            name: 'Nodejs',
            icon: <Node {...iconDimensions} />,
            shadow: 'shadow-none hover:shadow-[0px_0px_12px_0px_#60A04E]'
        },
        {
            name: 'Express',
            icon: <ExpressIcon {...iconDimensions} fill="var(--card-foreground)" />,
            shadow: 'shadow-none hover:shadow-[0px_0px_12px_0px_var(--card-foreground)]'
        },
        {
            name: 'TanStack Query',
            icon: <TanStack {...iconDimensions} />,
            shadow: 'shadow-none hover:shadow-[0px_0px_12px_0px_#FFC1AF]'
        },
        {
            name: 'MongoDB',
            icon: <Mongo {...iconDimensions} />,
            shadow: 'shadow-none hover:shadow-[0px_0px_12px_0px_#00ED64]'
        },
    ]

    return (
        <div className={`flex flex-col gap-4 flex-1 `}>
            {title !== false && <h3 className="leading-none font-semibold tracking-tight" > {title}</ h3>}
            <div className={"flex flex-1 items-center"}>

                <div className={`flex gap-2 md:gap-4 flex-wrap ${align} w-full`} >
                    {powerStack.map(tech =>
                        <Tooltip key={tech.name}>
                            <TooltipTrigger asChild>
                                <Card className={`p-2 w-fit flex-row items-center ${tech.shadow}`}>
                                    {/* <Image className="aspect-square rounded-md" width={28} height={28} src={tech.icon} alt={`${tech.name} icon`}></Image> */}
                                    {tech.icon}
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