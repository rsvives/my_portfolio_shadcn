"use client"

import { fetchForkedRepos } from "@/lib/data";
import { FixedStatsCard } from "./FixedStatsCard";
import { GitForkIcon } from "lucide-react";
import { ChartForkedRepos } from "./ChartForkedRepos";
import { useQuery } from "@tanstack/react-query";

export default function CardForkedReposChart() {

    const { data: forkedReposData, error, isLoading } = useQuery({ queryKey: ['forkedRepos'], queryFn: fetchForkedRepos })
    if (isLoading) return (<div>...loading</div>)

    return (
        <FixedStatsCard title="Forked Repositories" value={1234} icon={<GitForkIcon size={16}></GitForkIcon>}>
            <ChartForkedRepos forkedReposData={forkedReposData} />
        </FixedStatsCard>
    )
}