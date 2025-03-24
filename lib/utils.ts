import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { GithubEventType } from "./definitions"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isCommitRelatedEvent(param: string | null): param is GithubEventType {
  return param === GithubEventType.PullRequest || param === GithubEventType.Push
}