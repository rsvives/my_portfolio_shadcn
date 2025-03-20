import { fetchLanguages } from "@/lib/data";
import { FixedStatsCard } from "./FixedStatsCard";
import { ChartLanguages } from "./ChartLanguages";
import { CodeIcon } from "lucide-react";

export default async function CardLanguagesChart() {
    const languagesData = await fetchLanguages()

    return (
        <FixedStatsCard title="Languages" value={1234} icon={<CodeIcon size={16} />}>
            <ChartLanguages languagesData={languagesData} />
        </FixedStatsCard>
    )
}