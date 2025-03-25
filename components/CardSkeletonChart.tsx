import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export function CardSkeletonChart() {
    return (
        <Card>
            <CardHeader>
                <div className="flex flex-row justify-between items-center">
                    <CardDescription>{<Skeleton className="w-[100px] h-[18px] rounded-full" />}</CardDescription>
                    <Skeleton className="w-[18px] h-[18px] rounded-full" />
                </div>
                <CardTitle><Skeleton className="w-[80px] h-[20px] rounded-full" /></CardTitle>
            </CardHeader>
            <CardContent>
                <Skeleton className="w-[100%] h-[180px] rounded-md" />
            </CardContent>
        </Card>
    )
}