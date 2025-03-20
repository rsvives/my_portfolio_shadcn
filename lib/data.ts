

export async function fetchLatestCommits() {

    // await new Promise((resolve) => setTimeout(resolve, 2000))

    const data = [
        { commits: 3 },
        { commits: 6 },
        { commits: 11 },
        { commits: 5 },
        { commits: 8 },
        { commits: 8 },
        { commits: 17 },
        { commits: 11 },
        { commits: 3 },
        { commits: 5 },
        { commits: 17 },
        { commits: 21 },
        { commits: 6 },
        { commits: 21 }
    ]
    return data
}

export async function fetchLanguages() {
    // await new Promise((resolve) => setTimeout(resolve, 3000))
    return [
        { languaje: "HTML", percentaje: 75 },
        { languaje: "python", percentaje: 73 },
        { languaje: "javascript", percentaje: 95 },
        { languaje: "php", percentaje: 80 },
    ]
}

export async function fetchForkedRepos() {
    await new Promise((resolve) => setTimeout(resolve, 2500))
    return [
        { repo: 'something', forks: 1 },
        { repo: 'otherthing', forks: 4 },
        { repo: 'my other repo', forks: 6 },
        { repo: 'another repo', forks: 1 },
        { repo: 'one other repo', forks: 7 },
        { repo: 'tropicalninis', forks: 3 },
    ]
}

export async function fetchPullRequests() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return [{ merged: 90, notMerged: 10 }]
}