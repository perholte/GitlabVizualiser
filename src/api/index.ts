const BASE = 'https://gitlab.stud.idi.ntnu.no/api/v4/projects/11994/'
const TOKEN = process.env.REACT_APP_TEAM_08_ACCESS_TOKEN || 'TEAM_08_ACCESS_TOKEN'

/**
 *  Interface for representing a commit to our project. 
 */
export interface Commit {
    title: string,
    short_id: string,
    created_at: Date,
}

/**
 *  Interface for representing a branch in our project.
 */
export interface Branch {
    name: string,
    merged: boolean,
    developers_can_push: boolean,
    developers_can_merge: boolean,
    web_url: string,
    commit: Commit,
}

/**
 * Get fields described in the Commit interface for each of the n
 * last commits pushed to the project. 
 * 
 * @param n 
 * @returns n amount of Commit objects
 */
export const getCommits = async (n: number): Promise<Commit[]> => {
    const url = `${BASE}repository/commits`
    let commits
    try {
        commits = await fetch(url, {
            mode: 'cors',
            cache: 'reload',
            headers: {
                'PRIVATE-TOKEN': TOKEN,
            }
        }).then(response => response.json())
    } catch (err) {
        throw new Error('Could not fetch commits!')

    }
    commits = commits.map((c: any) => {
        let commit = {
            title: c.title,
            short_id: c.short_id,
            created_at: new Date(c.created_at)
        }
        return commit
    })
    return commits.slice(0, n)
}

/**
 * 
 * @returns branches in the project
 */
export const getBranches = async (): Promise<Branch[]> => {
    const url = `${BASE}repository/branches`
    let branches
    try {
        branches = await fetch(url, {
            mode: 'cors',
            cache: 'reload',
            headers: {
                'PRIVATE-TOKEN': TOKEN,
            }
        }).then(response => response.json())
    } catch (err) {
        throw new Error('Could not fetch branches!')
    }
    branches = branches.map((b: any) => {
        let { commit } = b
        let branch = {
            name: b.name,
            merged: b.merged,
            developers_can_push: b.developers_can_push,
            developers_can_merge: b.developers_can_merge,
            web_url: b.web_url,
            commit: {
                title: commit.title,
                short_id: commit.short_id,
                created_at: commit.created_at
            },
        }
        return branch
    })
    return branches
}

export default {}