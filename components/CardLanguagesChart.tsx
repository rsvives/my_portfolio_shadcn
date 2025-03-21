"use client"

import { fetchLanguages } from "@/lib/data";
import { FixedStatsCard } from "./FixedStatsCard";
import { ChartLanguages } from "./ChartLanguages";
import { CodeIcon } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

export default function CardLanguagesChart() {
    // const languagesData = await fetchLanguages()

    const { data: languagesData, error, isLoading } = useQuery({
        queryKey: ['languages'],
        queryFn: fetchLanguages
    })
    if (isLoading) return (<div>...loading 2</div>)

    return (
        <FixedStatsCard title="Languages" value={"top 5"} icon={<CodeIcon size={16} />}>
            <ChartLanguages languagesData={languagesData} />
        </FixedStatsCard>
    )
}