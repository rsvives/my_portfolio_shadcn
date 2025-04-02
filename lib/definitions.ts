import { LucideIcon } from "lucide-react"
import { JSX } from "react"
import { Endpoints } from "@octokit/types";

export type Project = {
    avatar: string,
    name: string,
    category: string[],
    description: string,
    repository_url: string | null,
    deploy_url: string | null,
    tags: string[],
    techStack: string[],
    pics: string[]
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

export type ForkedRepo = {
    forks: number,
    stars: number,
    watch: number,
    repo: string,
    url: string,
    updated_at: string | number,
    created_at: string | number,
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
    type: string,
    percentage: number
}

export type FixedStat = {
    title: string,
    value: number,
    icon: LucideIcon
    chartData: () => ForkedRepo[] | Languages[] | Commits[] | PullRequests[],
    chart: () => JSX.Element
}
export type TechnologyType = "frontend" | "backend" | "database" | "other" | "UX/UI"
export type Technology = {
    tech: string,
    percentage: number
}