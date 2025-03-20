import { fetchForkedRepos } from "@/lib/data";
import { FixedStatsCard } from "./FixedStatsCard";
import { GitForkIcon } from "lucide-react";
import { ChartForkedRepos } from "./ChartForkedRepos";

export default async function CardForkedReposChart() {
    const forkedReposData = await fetchForkedRepos()

    return (
        <FixedStatsCard title="Forked Repositories" value={1234} icon={<GitForkIcon size={16}></GitForkIcon>}>
            <ChartForkedRepos forkedReposData={forkedReposData} />
        </FixedStatsCard>
    )
}