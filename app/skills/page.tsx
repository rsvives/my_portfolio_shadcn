// import FixedStats from "@/components/FixedStats";
import { PersonalSkills } from "@/components/PersonalSkills";
import { PowerStack } from "@/components/PowerStack";
import { SkillsSection } from "@/components/SkillsSection";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function SkillsPage() {


    return (
        <div className="flex flex-col flex-1 space-y-4 w-[100%] gap-4 relative">
            <h1 className="text-3xl font-bold tracking-tight">My Tech Stack</h1>

            <div className="flex  gap-4 flex-wrap">
                <Card className="hidden md:flex md:flex-2 lg:flex-2">
                    <CardHeader>
                        <h3 className="leading-none font-semibold tracking-tight" > Description</ h3>
                    </CardHeader>
                    <CardContent className="flex flex-1 items-center justify-center">
                        <PersonalDescription />
                    </CardContent>
                </Card>
                <Card className=" flex-1 ">
                    <CardHeader>
                        <h3 className="leading-none font-semibold tracking-tight" > My Power Stack</ h3>
                    </CardHeader>
                    <CardContent className="flex flex-1 items-center justify-center">
                        <PowerStack title={false} align="justify-center" gap={4} />
                    </CardContent>
                </Card>
                <Card className=" flex-1 ">
                    <CardHeader>
                        <h3 className="leading-none font-semibold tracking-tight" >Personal skills</ h3>
                    </CardHeader>
                    <CardContent className="flex flex-1 items-center justify-center">
                        <PersonalSkills title={false} align="justify-center" />
                    </CardContent>
                </Card>


            </div>

            {/* <h2 className="text-xl font-bold ">Frontend</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tenetur cum, esse ipsam natus repudiandae. Officiis, nobis quibusdam? Sunt illum sit nihil! Recusandae dolores consequuntur id! Tenetur praesentium dolor quod laudantium animi dolore inventore, error vitae eligendi iusto eius dolorum repellat autem, magni exercitationem delectus molestias expedita. Dolor, impedit corporis.</p>


            <h2 className="text-xl font-bold">Backend</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tenetur cum, esse ipsam natus repudiandae. Officiis, nobis quibusdam? Sunt illum sit nihil! Recusandae dolores consequuntur id! Tenetur praesentium dolor quod laudantium animi dolore inventore, error vitae eligendi iusto eius dolorum repellat autem, magni exercitationem delectus molestias expedita. Dolor, impedit corporis.</p>

            <h2 className="text-xl font-bold">Database</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tenetur cum, esse ipsam natus repudiandae. Officiis, nobis quibusdam? Sunt illum sit nihil! Recusandae dolores consequuntur id! Tenetur praesentium dolor quod laudantium animi dolore inventore, error vitae eligendi iusto eius dolorum repellat autem, magni exercitationem delectus molestias expedita. Dolor, impedit corporis.</p>

            <h2 className="text-xl font-bold">Skills</h2> */}
            {/* <h3 className="text-xl font-bold"></h3> */}

            <SkillsSection />
            {/* <FixedStats /> */}
        </div>
    )
}

const PersonalDescription = () => {
    return (
        <div className="flex flex-col gap-4">
            <p>Me gusta participar en el proceso de desarrollo desde la <b>definición de features</b> hasta la implementación en producción</p>
        </div>
    )
}