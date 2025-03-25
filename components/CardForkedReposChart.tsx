"use client"

import { fetchForkedRepos } from "@/lib/data";
import { FixedStatsCard } from "./FixedStatsCard";
import { GitForkIcon } from "lucide-react";
import { ChartForkedRepos } from "./ChartForkedRepos";
import { useQuery } from "@tanstack/react-query";

export default function CardForkedReposChart() {

    const { data: forkedReposData, error, isLoading } = useQuery({ queryKey: ['forkedRepos'], queryFn: fetchForkedRepos })
    if (isLoading) return (<div>...loading</div>)

    const totalForked = forkedReposData?.reduce((sum, repo) => sum + (repo.forks || 0), 0);
    return (
        <FixedStatsCard title="My Forked Repositories" value={totalForked} icon={<GitForkIcon size={16}></GitForkIcon>}>
            <ChartForkedRepos forkedReposData={forkedReposData} />
        </FixedStatsCard>
    )
}