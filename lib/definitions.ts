import { LucideIcon } from "lucide-react"
import { JSX } from "react"
import { Endpoints } from "@octokit/types";

export type Project = {
    avatar: string,
    name: string
    category: string[],
    description: string,
    repository_url: string,
    deploy_url: string,
    tags: string[],
    techStack: string[]
}

export type GithubEvent = Endpoints["GET /users/{username}/events"]['response']['data']
export type GithubRepo = Endpoints["GET /users/{username}/repos"]['response']['data']

export enum GithubEventType {
    PullRequest = 'PullRequestEvent',
    Push = 'PushEvent',
    Create = 'CreateEvent',
    Fork = 'ForkEvent',
    Watch = 'WatchEvent',
    Public = 'PublicEvent',
}

export type ForkedRepos = {
    repo: string,
    forks: number
}
export type Languages = {
    languaje: string,
    percentaje: number
}

export type Commits = {
    date: Date | string
    commits: number,
    repos: Repo[]
}

export type Repo = {
    id: number,
    name: string,
    url: string
}
export type PullRequests = {
    merged: number,
    notMerged: number
}

export type FixedStat = {
    title: string,
    value: number,
    icon: LucideIcon
    chartData: () => ForkedRepos[] | Languages[] | Commits[] | PullRequests[],
    chart: () => JSX.Element
}