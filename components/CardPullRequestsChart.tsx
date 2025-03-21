import { fetchPullRequests } from "@/lib/data";
import { FixedStatsCard } from "./FixedStatsCard";
import { GitPullRequestArrow } from "lucide-react";
import { ChartPullRequest } from "./ChartPullRequests";

export async function CardPullRequestsChart() {
    const pullRequestsData = await fetchPullRequests()

    return (
        <FixedStatsCard title="Pull Requests" value={"90%"} icon={<GitPullRequestArrow size={16}></GitPullRequestArrow>}>
            <ChartPullRequest pullRequestsData={pullRequestsData} />
        </FixedStatsCard>
    )
}