import { Commits, GithubEvent, GithubEventType, GithubRepo } from "./definitions"
import { dateDifferenceInDays, daysDifferenceIsLessThan, isActivityRelevant, isCommitRelatedEvent } from "./utils"

export async function fetchLatestCommits(): Promise<Commits[]> {

    const response = await fetch('api/github_events')
    const events: GithubEvent = await response.json()
    // console.log(events)


    const filteredEvents = events.filter((el) => isCommitRelatedEvent(el.type))
    // console.log(filteredEvents)
    const mappedCommits = filteredEvents.map((el) => ({ date: el.created_at, commits: el.payload?.size ?? 0, repo: el.repo }))
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
    return groupedCommitsArray
}

export async function fetchLanguages() {
    const response = await fetch('api/github_repos')
    const repos: GithubRepo = await response.json()
    const languages = repos
        .filter(r => daysDifferenceIsLessThan(300, r.updated_at))
        .map((r) => r.language)
        .filter(l => l !== null && l !== 'Hack' && l !== 'Java')

    const languagesSet = new Set(languages)
    const languageTotal = languages.length
    const languagesData = []

    for (const lang of languagesSet) {
        languagesData.push({ language: lang, percentage: +(languages.filter(el => el === lang).length * 100 / languageTotal).toFixed(1) })
    }


    const orderedLanguages = languagesData.sort((a, b) => a.percentage > b.percentage ? -1 : 1)
    return orderedLanguages

}

export async function fetchForkedRepos() {
    const response = await fetch('api/github_repos')
    const repos: GithubRepo = await response.json()
    const mappedRepos = repos.map(r => ({ forks: r.forks_count ?? 0, stars: r.stargazers_count ?? 0, watch: r.watchers_count ?? 0, repo: r.name, url: r.html_url, updated_at: r.updated_at ?? 0, created_at: r.created_at ?? 0 }))
    const filteredRepos = mappedRepos.filter(r => r.forks)
    const data = filteredRepos
        .sort((a, b) => a.forks < b.forks ? 1 : -1)
        .slice(0, 12)
        .sort((a, b) => a.created_at > b.created_at ? 1 : -1)

    return data

}

export async function fetchPullRequests() {

    const response = await fetch('api/github_events')
    const events: GithubEvent = await response.json()
    const mappedEvents = events.map(el => el.type).filter(ev => isActivityRelevant(ev))

    const eventsSet = new Set(mappedEvents)
    // console.log(eventsSet)
    const totalEvents = mappedEvents.length
    const eventsData = []

    for (const ev of eventsSet) {
        eventsData.push({ type: ev, percentage: +(mappedEvents.filter(el => el === ev).length * 100 / totalEvents).toFixed(1) })
    }

    // console.log(eventsData)
    return eventsData



}

export async function fetchTechnologies() {
    const skills = {
        frontend: [
            {
                tech: 'Nuxtjs',
                percentaje: 0.7
            },
            {
                tech: 'React',
                percentaje: 0.85
            },
            {
                tech: 'Vue',
                percentaje: 0.7
            },
            {
                tech: 'Javascript',
                percentaje: 0.95
            },
            {
                tech: 'Typescript',
                percentaje: 0.75
            },
            {
                tech: 'ReactQuery',
                percentaje: 0.75
            },
            {
                tech: 'Redux',
                percentaje: 0.65
            },
            {
                tech: 'GraphQL',
                percentaje: 0.8
            },
            // {
            //     tech: 'Zustand',
            //     percentaje: 0.65
            // },
            {
                tech: 'React Native',
                percentaje: 0.65
            },

        ],
        backend: [
            {
                tech: 'NodeJS',
                percentaje: 0.95
            },
            {
                tech: 'Laravel',
                percentaje: 0.8
            },
            {
                tech: 'Express',
                percentaje: 0.85
            },
            {
                tech: 'Deno',
                percentaje: 0.65
            },
            {
                tech: 'PHP',
                percentaje: 0.65
            },
            {
                tech: 'Python',
                percentaje: 0.65
            },
            {
                tech: 'Socket.io',
                percentaje: 0.65
            },
            {
                tech: 'OAuth',
                percentaje: 0.65
            },
            {
                tech: 'JWT',
                percentaje: 0.65
            },
        ],
        database: [
            {
                tech: 'MySQL',
                percentaje: 0.65
            },
            {
                tech: 'MongoDB',
                percentaje: 0.65
            },
            {
                tech: 'Supabase',
                percentaje: 0.65
            },
            {
                tech: 'PostgreSQL',
                percentaje: 0.65
            },
            {
                tech: 'Redis',
                percentaje: 0.65
            },
        ],
        other: [
            {
                tech: 'Docker',
                percentaje: 0.65
            },
            {
                tech: 'CI/CD',
                percentaje: 0.65
            },
            {
                tech: 'Jest',
                percentaje: 0.65
            },
            {
                tech: 'Cypress',
                percentaje: 0.65
            },
            {
                tech: 'AWS',
                percentaje: 0.65
            },
            {
                tech: 'Github Actions',
                percentaje: 0.65
            },
            {
                tech: 'Jenkins',
                percentaje: 0.65
            },
        ],

        'UX/UI': [
            {
                tech: 'Figma',
                percentaje: 0.5
            },
            {
                tech: 'Design Thinking',
                percentaje: 0.65
            },
            {
                tech: 'Wireframing',
                percentaje: 0.65
            },
            {
                tech: 'Prototyping',
                percentaje: 0.65
            },
            {
                tech: 'UX Research',
                percentaje: 0.65
            },
            {
                tech: 'Lottie Files',
                percentaje: 0.65
            },
            {
                tech: 'After Effects',
                percentaje: 0.65
            },
            {
                tech: 'Photoshop',
                percentaje: 0.65
            },
            {
                tech: 'Illustrator',
                percentaje: 0.65
            },
        ],
    }
    return new Promise((resolve) => setTimeout(() => resolve(skills), 700))
}