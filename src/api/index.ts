export interface Commit {
    title: string,
    short_id: string,
    created_at: Date,
}

const BASE = 'https://gitlab.stud.idi.ntnu.no/api/v4/projects/11994/'
const TOKEN = 'cYhh3zBz6DtgeJb952WA'


/**
 * @param n 
 * @returns n amount of Commit objects
 */
export const getCommits = async (n: number): Promise<Commit[]> => {
    let url = `${BASE}repository/commits`
    let commits = await fetch(url, {
        mode: 'cors',
        cache: 'reload',
        headers: {
            'PRIVATE-TOKEN': TOKEN,
            'until': new Date(new Date().getTime() - 60 * 60 * 24).toUTCString(),
        }
    }).then(response => response.json()).catch(error => console.error(error))
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

export default {}