import { Commits, ForkedRepo, GithubEvent, GithubEventExtended, GithubRepo, Languages, PersonalSkills, Project, PullRequests, Technology, TechnologyType } from "./definitions"
import { daysDifferenceIsLessThan, isActivityRelevant, isCommitRelatedEvent } from "./utils"

export async function fetchLatestCommits(): Promise<Commits[]> {

    const response = await fetch('api/github_events')
    const rawEvents = await response.json()
    // console.log(events)
    const events: GithubEventExtended = rawEvents

    const filteredEvents = events.filter((el) => isCommitRelatedEvent(el.type))
    // console.log(filteredEvents)
    // @ts-expect-error Github API types are not complete
    const mappedCommits = filteredEvents.map((el) => ({ date: el.created_at, commits: el.payload.size ?? 0, repo: el.repo }))
    const groupedCommitsObject = mappedCommits.reduce((acc, commit) => {
        const date = commit.date?.split('T')[0]; // Extract only the date part
        if (date) {
            if (!acc[date]) {
                acc[date] = { date, commits: 0, repos: [] };
            }
            acc[date].commits += commit.commits;
            acc[date].repos.push(commit.repo);
        }
        return acc;
    }, {} as Record<string, { date: string; commits: number; repos: { id: number; name: string; url: string; }[] }>);

    const groupedCommits: Commits[] = Object.values(groupedCommitsObject).sort((a, b) => a.date > b.date ? 1 : -1);

    // const groupedCommitsArray = Object.values(groupedCommits).sort((a, b) => a.date > b.date ? 1 : -1);
    return groupedCommits
}

export async function fetchLanguages(): Promise<Languages[]> {
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

export async function fetchForkedRepos(): Promise<ForkedRepo[]> {
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

export async function fetchPullRequests(): Promise<PullRequests[]> {

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

export async function fetchTechnologies(): Promise<Record<TechnologyType, Technology[]>> {
    const skills = {
        frontend: [
            {
                tech: 'Nuxtjs',
                percentage: 0.7
            },
            {
                tech: 'React',
                percentage: 0.85
            },
            {
                tech: 'Vue',
                percentage: 0.7
            },
            {
                tech: 'Javascript',
                percentage: 0.95
            },
            {
                tech: 'Typescript',
                percentage: 0.75
            },
            {
                tech: 'ReactQuery',
                percentage: 0.75
            },
            {
                tech: 'Redux',
                percentage: 0.65
            },
            {
                tech: 'GraphQL',
                percentage: 0.8
            },
            // {
            //     tech: 'Zustand',
            //     percentage: 0.65
            // },
            {
                tech: 'React Native',
                percentage: 0.65
            },

        ],
        backend: [
            {
                tech: 'NodeJS',
                percentage: 0.95
            },
            {
                tech: 'Laravel',
                percentage: 0.8
            },
            {
                tech: 'Express',
                percentage: 0.9
            },
            {
                tech: 'Deno',
                percentage: 0.55
            },
            {
                tech: 'PHP',
                percentage: 0.8
            },
            {
                tech: 'Python',
                percentage: 0.5
            },
            {
                tech: 'Socket.io',
                percentage: 0.75
            },
            {
                tech: 'OAuth',
                percentage: 0.8
            },
            {
                tech: 'JWT',
                percentage: 0.85
            },
        ],
        database: [
            {
                tech: 'MySQL',
                percentage: 0.95
            },
            {
                tech: 'MongoDB',
                percentage: 0.90
            },
            {
                tech: 'Supabase',
                percentage: 0.65
            },
            {
                tech: 'Prisma',
                percentage: 0.2
            },
            {
                tech: 'PostgreSQL',
                percentage: 0.65
            },
            {
                tech: 'Redis',
                percentage: 0.3
            },
        ],
        other: [
            {
                tech: 'Docker',
                percentage: 0.85
            },
            {
                tech: 'CI/CD',
                percentage: 0.65
            },
            {
                tech: 'Jest',
                percentage: 0.90
            },
            {
                tech: 'Cypress',
                percentage: 0.85
            },
            {
                tech: 'AWS',
                percentage: 0.6
            },
            {
                tech: 'Github Actions',
                percentage: 0.75
            },
            {
                tech: 'Jenkins',
                percentage: 0.4
            },
        ],

        'UX/UI': [
            {
                tech: 'Figma',
                percentage: 0.85
            },
            {
                tech: 'Design Thinking',
                percentage: 0.8
            },
            {
                tech: 'Wireframing',
                percentage: 0.9
            },
            {
                tech: 'Prototyping',
                percentage: 0.65
            },
            {
                tech: 'UX Research',
                percentage: 0.65
            },
            {
                tech: 'Lottie Files',
                percentage: 0.75
            },
            {
                tech: 'After Effects',
                percentage: 0.7
            },
            {
                tech: 'Photoshop',
                percentage: 0.8
            },
            {
                tech: 'Illustrator',
                percentage: 0.75
            },
        ],
    }
    return new Promise((resolve) => setTimeout(() => resolve(skills), 0))
}


export async function fetchProjects(): Promise<Project[]> {
    const projects: Project[] = [
        {
            name: 'Tropical Ninis Blog',
            avatar: 'asdf.png',
            category: ['frontend', 'backend'],
            description: 'Digital nomads travel blog integrated with Patreon login to restrict access for certain sections to only-members',
            repository_url: null,
            deploy_url: 'https://tropicalninis.com/',
            techStack: ['Nuxtjs', 'Vue', 'OAuth', 'Headless CMS', 'Nuxt Content', 'Javascript', 'AWS', 'Cloudflare'],
            tags: ['asdf', 'asdf', 'asdf'],
            pics: ['', '', '']

        },
        {
            name: 'Music Bingo',
            avatar: 'fdsa.png',
            category: ['frontend', 'backend'],
            description: 'Musical version of Bingo Game, where instead of just random numbers, random numbered songs from a Spotify list are picked',
            repository_url: '',
            deploy_url: '',
            techStack: ['React', 'Socket.io', 'Spotify', 'OAuth', 'Javascript'],
            tags: ['asdf', 'asdf', 'asdf'],
            pics: ['', '', '']

        },
        {
            name: 'Github Repos App',
            avatar: 'qwer.png',
            category: ['frontend'],
            description: 'Mobile App that shows data from Github API',
            repository_url: '',
            deploy_url: '',
            techStack: ['React Native', 'Javascript', 'CSS'],
            tags: ['asdf', 'asdf', 'asdf'],
            pics: ['', '', '']
        },
        {
            name: 'Raspi Intercom',
            avatar: 'qwer.png',
            category: ['backend'],
            description: 'Smart Intercom and Remote Acces Control System integrated with a Telegram bot',
            repository_url: 'https://github.com/rsvives/RasPintercom',
            deploy_url: null,
            techStack: ['Python', 'MongoDB', 'OAuth', 'Google Console', 'Telegram'],
            tags: ['asdf', 'asdf', 'asdf'],
            pics: ['', '', '']
        },
        {
            name: 'GraphQL Library App',
            avatar: 'qwer.png',
            category: ['backend', 'frontend'],
            description: 'App for posting books',
            repository_url: '',
            deploy_url: '',
            techStack: ['React', 'React Router', 'GraphQL', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'Apollo'],
            tags: ['asdf', 'asdf', 'asdf'],
            pics: ['', '', '']

        },
        {
            name: 'Anecdotes App',
            avatar: 'qwer.png',
            category: ['backend'],
            description: 'CRUD webapp where people can post their favorite anecdotes',
            repository_url: '',
            deploy_url: '',
            techStack: ['React', 'React Router', 'ReactQuery', 'TanStack', 'CSS'],
            tags: ['asdf', 'asdf', 'asdf'],
            pics: ['', '', '']

        },
        {
            name: 'This Portfolio',
            avatar: 'qwer.png',
            category: ['frontend'],
            description: 'Basically all this website',
            repository_url: '',
            deploy_url: '',
            techStack: ['Nextjs', 'Javascript', 'Tailwind', 'ShadCN'],
            tags: ['asdf', 'asdf', 'asdf'],
            pics: ['', '', '']

        },
        {
            name: 'Medical Records',
            avatar: 'qwer.png',
            category: ['backend'],
            description: 'React Native App for creating medical records',
            repository_url: '',
            deploy_url: '',
            techStack: ['React Native'],
            tags: ['asdf', 'asdf', 'asdf'],
            pics: ['', '', '']

        },
        {
            name: 'Phonebook  App',
            avatar: 'qwer.png',
            category: ['frontend'],
            description: 'Simple React SPA for adding contacts',
            repository_url: '',
            deploy_url: 'https://fso-phonebook-app-kxit.onrender.com/',
            techStack: ['React', 'MongoDB'],
            tags: ['SPA', 'React',],
            pics: ['', '', '']

        },
        {
            name: 'Blog List',
            avatar: 'qwer.png',
            category: ['frontend'],
            description: 'Simple React SPA for adding contacts',
            repository_url: '',
            deploy_url: 'https://fso-phonebook-app-kxit.onrender.com/',
            techStack: ['React', 'MongoDB', 'Github Action'],
            tags: ['SPA', 'React', 'CI/CD'],
            pics: ['', '', '']

        },
        // {
        //     name: 'Heroes App',
        //     avatar: 'qwer.png',
        //     category: ['frontend'],
        //     description: '',
        //     repository_url: '',
        //     deploy_url: '',
        //     techStack: ['React', 'MongoDB'],
        //     tags: ['SPA', 'React',],
        //     pics: ['', '', '']

        // },
        {
            name: 'PokeCards',
            avatar: 'qwer.png',
            category: ['backend'],
            description: 'Random Pokemon Card generator using data from the PokeAPI',
            repository_url: '',
            deploy_url: '',
            techStack: ['PHP', 'CSS'],
            tags: ['asdf', 'asdf', 'asdf'],
            pics: ['', '', '']

        },
    ]
    return new Promise((resolve) => setTimeout(() => resolve(projects), 0))

}

export function fetchPersonalSkills(): PersonalSkills {
    const personalSkills = {
        creativity: false,
        communication: false,
        adaptation: false,
        teamwork: false,
        quick_learning: false
    }

    return personalSkills
}