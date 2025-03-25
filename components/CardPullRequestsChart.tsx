"use client"

import { fetchPullRequests } from "@/lib/data";
import { FixedStatsCard } from "./FixedStatsCard";
import { GitPullRequestArrow } from "lucide-react";
import { ChartPullRequest } from "./ChartPullRequests";
import { useQuery } from "@tanstack/react-query";
import { GithubEventType } from "@/lib/definitions";
import { CardSkeletonChart } from "./CardSkeletonChart";

export default function CardPullRequestsChart() {
    // const pullRequestsData = await fetchPullRequests()

    const { data: pullRequestsData, error, isLoading } = useQuery({ queryKey: ['pullRequests'], queryFn: fetchPullRequests })

    if (isLoading) return (<CardSkeletonChart />)

    return (
        <FixedStatsCard title="Pull Requests" value={pullRequestsData?.filter(ev => ev.type === GithubEventType.PullRequest)[0].percentage + '%'} icon={<GitPullRequestArrow size={16}></GitPullRequestArrow>}>
            <ChartPullRequest pullRequestsData={pullRequestsData} />
        </FixedStatsCard>
    )
}