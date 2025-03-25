"use client"

import { fetchLanguages } from "@/lib/data";
import { FixedStatsCard } from "./FixedStatsCard";
import { ChartLanguages } from "./ChartLanguages";
import { CodeIcon } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { CardSkeletonChart } from "./CardSkeletonChart";

export default function CardLanguagesChart() {
    // const languagesData = await fetchLanguages()

    const { data: languagesData, error, isLoading } = useQuery({
        queryKey: ['languages'],
        queryFn: fetchLanguages
    })
    if (isLoading) return (<CardSkeletonChart />)

    return (
        <FixedStatsCard title="Languages" value={"top 5"} icon={<CodeIcon size={16} />}>
            <ChartLanguages languagesData={languagesData} />
        </FixedStatsCard>
    )
}