import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import React, { JSX } from "react";

export function FixedStatsCard({ title, value, icon, children }: { title: string, value: number | string, icon: JSX.Element, children: JSX.Element }) {
    return (
        <Card >
            <CardHeader>
                <div className="flex flex-row justify-between items-center">
                    <CardDescription>{title}</CardDescription>
                    {icon}
                </div>
                <CardTitle>{value}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
                {children}
            </CardContent>
        </Card>
    )
}