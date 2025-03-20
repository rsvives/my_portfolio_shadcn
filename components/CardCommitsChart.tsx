import { fetchLatestCommits } from "@/lib/data";
import { FixedStatsCard } from "./FixedStatsCard";
import { GitCommitHorizontal } from "lucide-react";
import { ChartCommits } from "./ChartCommits";

export default async function CardCommitsChart() {
    const commitsData = await fetchLatestCommits()
    console.log(commitsData)

    return (
        <FixedStatsCard title="Latest Commits" icon={<GitCommitHorizontal size={16} />} value={1234}>
            <ChartCommits commitsData={commitsData} />
        </FixedStatsCard>
    )
}