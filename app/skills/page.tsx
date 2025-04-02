
import FixedStats from "@/components/FixedStats";
import { SkillsSection } from "@/components/SkillsSection";

export default function SkillsPage() {
    // const { data: skills, error, isLoading } = useQuery({ queryKey: ['technologies'], queryFn: fetchTechnologies })

    return (
        <div className="flex flex-col flex-1 space-y-4 w-[100%]">
            <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
            <SkillsSection />
            <FixedStats />
        </div>
    )
}

