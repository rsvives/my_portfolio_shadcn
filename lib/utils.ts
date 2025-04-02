import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { GithubEventType } from "./definitions"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isCommitRelatedEvent(param: string | null): param is GithubEventType {
  return param === GithubEventType.PullRequest || param === GithubEventType.Push
}

export function isActivityRelevant(param: string | null): param is GithubEventType {
  return param === GithubEventType.PullRequest || param === GithubEventType.Push || param === GithubEventType.Fork || param === GithubEventType.Create
}


export function dateDifferenceInDays(initialDate: Date, finalDate: Date = new Date()) {
  const differenceInTime = finalDate.getTime() - new Date(initialDate).getTime();
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
  return differenceInDays
}

export function daysDifferenceIsLessThan(numberOfDays: number, initialDate: Date | string | null | undefined, finalDate: Date = new Date()): boolean | null {
  if (!initialDate) return null

  return numberOfDays >= dateDifferenceInDays(new Date(initialDate), finalDate)
}

export function sluggify(name: string): string {
  return name.replace(' ', '-').toLowerCase()
}