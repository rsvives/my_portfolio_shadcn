import { Commits } from "./definitions"

export async function fetchLatestCommits(): Promise<Commits[]> {
    const data = await fetch('api/commits')
    return await data.json()
}

export async function fetchLanguages() {
    //emulating async fetching
    const data = [
        { languaje: "HTML", percentaje: 75 },
        { languaje: "python", percentaje: 73 },
        { languaje: "javascript", percentaje: 95 },
        { languaje: "Typescript", percentaje: 95 },
        { languaje: "PHP", percentaje: 80 },
    ]
    return new Promise((resolve) => setTimeout(() => resolve(data), 2500))
}

export async function fetchForkedRepos() {
    //emulating async fetching
    const data = [
        { repo: 'something', forks: 1 },
        { repo: 'otherthing', forks: 4 },
        { repo: 'my other repo', forks: 6 },
        { repo: 'another repo', forks: 1 },
        { repo: 'one other repo', forks: 7 },
        { repo: 'last repo', forks: 3 },
    ]
    return new Promise((resolve) => setTimeout(() => resolve(data), 2000))
}

export async function fetchPullRequests() {
    //emulating async fetching
    const data = [{ merged: 90, notMerged: 10 }]
    return new Promise((resolve) => setTimeout(() => resolve(data), 300))

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
                percentaje: 0.85
            },
            {
                tech: 'Redux',
                percentaje: 0.65
            },
            {
                tech: 'ReactQuery',
                percentaje: 0.75
            },
            {
                tech: 'GraphQL',
                percentaje: 0.8
            },
            {
                tech: 'Zustand',
                percentaje: 0.65
            },

        ],
        backend: [
            {
                tech: 'NodeJS',
                percentaje: 0.65
            },
            {
                tech: 'Laravel',
                percentaje: 0.65
            },
            {
                tech: 'MySQL',
                percentaje: 0.65
            },
            {
                tech: 'MongoDB',
                percentaje: 0.65
            },
        ],
        // database: [{}],
        infrastructure: [{
            tech: 'Zustand',
            percentaje: 0.65
        },],
        other: [{}],
        'UX/UI': [
            {
                tech: 'Figma',
                percentaje: 0.65
            },
            {
                tech: 'Design Thinking',
                percentaje: 0.65
            },
            {
                tech: 'Design Thinking',
                percentaje: 0.65
            },
        ],
    }
    return new Promise((resolve) => setTimeout(() => resolve(skills), 700))
}