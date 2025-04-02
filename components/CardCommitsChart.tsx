"use client"

import { FixedStatsCard } from "./FixedStatsCard";
import { GitCommitHorizontal } from "lucide-react";
import { ChartCommits } from "./ChartCommits";
import { useQuery } from "@tanstack/react-query";
import { fetchLatestCommits } from "@/lib/data";
import { CardSkeletonChart } from "./CardSkeletonChart";

export default function CardCommitsChart() {
    const { data, error, isLoading } = useQuery({ queryKey: ['commits'], queryFn: fetchLatestCommits })

    if (isLoading) return <CardSkeletonChart />
    if (error) return (<div>error loading component 😢</div>)

    const totalCommits = data?.reduce((acc, curr) => acc + (curr.commits || 0), 0) || 0
    // console.log(totalCommits)
    return (
        <FixedStatsCard title="Latest Commits" icon={<GitCommitHorizontal size={16} />} value={totalCommits}>
            <ChartCommits data={data} />
        </FixedStatsCard>
    )
}