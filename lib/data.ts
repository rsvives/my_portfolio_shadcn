

export async function fetchLatestCommits() {

    await new Promise((resolve) => setTimeout(resolve, 2000))

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