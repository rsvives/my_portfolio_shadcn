import CardCommitsChart from "./CardCommitsChart";
import CardLanguagesChart from "./CardLanguagesChart";
import CardForkedReposChart from "./CardForkedReposChart";
import CardPullRequestsChart from "./CardPullRequestsChart";

export default async function FixedStats() {
    return (
        <div id="fixed-stats" className="grid gap-4 mt-4 grid-cols-2 lg:grid-cols-4">
            <CardCommitsChart />
            <CardLanguagesChart />
            <CardForkedReposChart />
            <CardPullRequestsChart />
        </div>
    )
}