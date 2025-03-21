import { LucideIcon } from "lucide-react"
import { JSX } from "react"

export type Project = {
    avatar: string,
    name: string
    category: string,
    description: string,
    repository_url: string,
    deploy_url: string,
    tags: string[],
    techStack: string[]
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
    repo: Repo
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