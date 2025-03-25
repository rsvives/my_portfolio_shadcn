"use client"

import { fetchForkedRepos } from "@/lib/data";
import { FixedStatsCard } from "./FixedStatsCard";
import { GitForkIcon } from "lucide-react";
import { ChartForkedRepos } from "./ChartForkedRepos";
import { useQuery } from "@tanstack/react-query";
import { CardSkeletonChart } from "./CardSkeletonChart";

export default function CardForkedReposChart() {

    const { data: forkedReposData, error, isLoading } = useQuery({ queryKey: ['forkedRepos'], queryFn: fetchForkedRepos })
    if (isLoading) return (<CardSkeletonChart />)

    const totalForked = forkedReposData?.reduce((sum, repo) => sum + (repo.forks || 0), 0);
    return (
        <FixedStatsCard title="My Forked Repositories" value={totalForked} icon={<GitForkIcon size={16}></GitForkIcon>}>
            <ChartForkedRepos forkedReposData={forkedReposData} />
        </FixedStatsCard>
    )
}