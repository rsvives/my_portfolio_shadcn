import { Commits } from "@/lib/definitions"
import { NextResponse } from "next/server"
import { Octokit } from "octokit"

export async function GET() {
    const GITHUB_API_KEY_CLASIC_TOKEN = process.env.GITHUB_API_KEY_CLASIC_TOKEN
    if (!GITHUB_API_KEY_CLASIC_TOKEN) return (NextResponse.json({ error: "Mising API token" }, { status: 401 }))

    const octokit = new Octokit({
        auth: GITHUB_API_KEY_CLASIC_TOKEN,
    })
    console.log(GITHUB_API_KEY_CLASIC_TOKEN)
    const { data } = await octokit.request('GET /users/{username}/events',
        {
            username: 'rsvives',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
                accept: 'application/vnd.github+json'
            },
            per_page: 100,
        })


    console.log(data)
    console.log(process.env.GITHUB_API_KEY_CLASIC_TOKEN)
    // 
    const mappedCommits = data.map((el) => ({ date: el.created_at, commits: el.payload?.commits?.length ?? 0, repo: el.repo }))
    const groupedCommits: Commits[] = mappedCommits.reduce((acc, commit) => {
        const date = commit.date?.split('T')[0]; // Extract only the date part

        if (!acc[date]) {
            acc[date] = { date, commits: 0, repos: [] };
        }
        acc[date].commits += commit.commits;
        acc[date].repos.push(commit.repo);
        return acc;


    }, []);

    const groupedCommitsArray = Object.values(groupedCommits).sort((a, b) => a.date > b.date ? 1 : -1);

    return NextResponse.json(groupedCommitsArray)
}