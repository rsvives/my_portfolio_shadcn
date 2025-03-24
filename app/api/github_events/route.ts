import { NextResponse } from "next/server"
import { Octokit } from "octokit"

export async function GET() {
    const GITHUB_API_KEY_CLASIC_TOKEN = process.env.GITHUB_API_KEY_CLASIC_TOKEN
    if (!GITHUB_API_KEY_CLASIC_TOKEN) return (NextResponse.json({ error: "Mising API token" }, { status: 401 }))

    const octokit = new Octokit({
        auth: GITHUB_API_KEY_CLASIC_TOKEN,
    })
    const { data } = await octokit.request('GET /users/{username}/events',
        {
            username: 'rsvives',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
                accept: 'application/vnd.github+json'
            },
            per_page: 100,
        })


    return NextResponse.json(data)
}