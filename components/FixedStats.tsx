import CardCommitsChart from "./CardCommitsChart";
import CardLanguagesChart from "./CardLanguagesChart";
import CardForkedReposChart from "./CardForkedReposChart";
import CardPullRequestsChart from "./CardPullRequestsChart";

export default async function FixedStats() {
    return (
        <section>
            <div className="flex items-baseline my-4 gap-2">
                <h2 className="text-xl font-bold tracking-tight">Github Activity</h2>
                <span className="text">Latest 90 days</span>
            </div>
            <div id="fixed-stats" className="grid gap-4 mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <CardCommitsChart />
                <CardLanguagesChart />
                <CardForkedReposChart />
                <CardPullRequestsChart />
            </div>
        </section>
    )
}