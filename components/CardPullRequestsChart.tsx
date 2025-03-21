"use client"

import { fetchPullRequests } from "@/lib/data";
import { FixedStatsCard } from "./FixedStatsCard";
import { GitPullRequestArrow } from "lucide-react";
import { ChartPullRequest } from "./ChartPullRequests";
import { useQuery } from "@tanstack/react-query";

export default function CardPullRequestsChart() {
    // const pullRequestsData = await fetchPullRequests()

    const { data: pullRequestsData, error, isLoading } = useQuery({ queryKey: ['pullRequests'], queryFn: fetchPullRequests })

    if (isLoading) return (<div>...loading</div>)

    return (
        <FixedStatsCard title="Pull Requests" value={"90%"} icon={<GitPullRequestArrow size={16}></GitPullRequestArrow>}>
            <ChartPullRequest pullRequestsData={pullRequestsData} />
        </FixedStatsCard>
    )
}