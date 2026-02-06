import { fetchPersonalSkills } from "@/lib/data"
import { Badge } from "./ui/badge"

type Props = {
    title?: string | false,
    align?: string
}

export const PersonalSkills = ({ title = 'Personal skills', align = 'justify-start' }: Props) => {
    const personalSkills = fetchPersonalSkills()
    return (
        <div className="flex flex-col gap-4 md:flex-1">
            {title !== false && <h3 className="leading-none font-semibold tracking-tight" > {title}</ h3>}
            <div className="flex flex-1 items-center">
                <div className={`flex gap-2 flex-wrap ${align} w-full`}>
                    {Object.keys(personalSkills).map(s => <Badge className="text-xs sm:text-sm px-1.5 py-1" variant={'outline'} key={s}>{s.replace('_', ' ')}</Badge>)}
                </div>

            </div>
        </div>
    )
}