import { fetchPullRequests } from "@/lib/data";
import { FixedStatsCard } from "./FixedStatsCard";
import { GitForkIcon } from "lucide-react";
import { ChartPullRequest } from "./ChartPullRequests";

export async function CardPullRequestsChart() {
    const pullRequestsData = await fetchPullRequests()

    return (
        <FixedStatsCard title="Forked Repositories" value={1234} icon={<GitForkIcon size={16}></GitForkIcon>}>
            <ChartPullRequest pullRequestsData={pullRequestsData} />
        </FixedStatsCard>
    )
}