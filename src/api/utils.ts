import { Commit, getCommits } from '.'

export type ContributionsData = { name: string; commits: number }[]

// Had some issues where we had mulitple git names. This filters out the ones we dont want.
const BLACKLIST = ['Jorre', 'Jørgen', 'Per Holte']

export const getContributionsData = async (): Promise<ContributionsData> => {
	const commits = await getCommits(0)

	return commits.reduce((acc, current) => {
		if (BLACKLIST.indexOf(current.author_name) !== -1) {
			return acc
		}
		const existingEntry = acc.find(
			(entryInAcc) => entryInAcc.name === current.author_name
		)

		if (existingEntry) {
			const updatedEntry = {
				...existingEntry,
				commits: existingEntry.commits + 1,
			}
			return [
				...acc.filter(
					(entryInAcc) => existingEntry.name !== entryInAcc.name
				),
				updatedEntry,
			]
		} else {
			const newEntry = {
				name: current.author_name,
				commits: 1,
			}
			return [...acc, newEntry]
		}
	}, [] as ContributionsData)
}

const animals: string[] = [
	'Tarsier',
	'Tasmanskdjevel',
	'Termitt',
	'Tern',
	'Trost',
	'Tiger',
	'Tigerhai',
	'Skilpadde',
	'Trefrosk',
	'Ørret',
	'Tunfisk',
	'Skilpadde',
	'Tyrannosaurus',
	'Urial',
	'Vampyrflaggermus',
	'Vampyrblekksprut',
	'Vicuna',
	'Hoggorm',
	'Vole',
	'Gribb',
	'Hvalross',
	'Veps',
	'Vannbøffel',
	'Vessel',
	'Hval',
	'Hvitfisk',
	'Villkatt',
	'Ulv',
	'jerv',
	'Hakkespett',
	'Røntgenfisk',
]!

export const anonymizeAuthors = (commits: Commit[]): Commit[] => {
	let authors: string[] = commits.map((c) => c.author_name)
	authors = unique(authors)
	let authorsDict: Map<string, string> = new Map()
	for (let i in authors) {
		const author = authors[i]
		authorsDict.set(
			author,
			`Anonym ${animals[Math.floor(Math.random() * animals.length)]}`
		)
	}
	return commits.map((c) => {
		const anonymous =
			authorsDict.get(c.author_name) || 'Anonym Bidragsyter'
		c.author_name = anonymous
		return c
	})
}

function unique(a: any[]): any[] {
	return a.sort().filter(function (value, index, array) {
		return (index === 0) || (value !== array[index - 1])
	})
}

// Sort commits in ascending order with respect to date
export const sortCommitsByDate = (commits: Commit[], ascending: boolean): Commit[] => {
	return commits.sort((a, b) => {
		let t0 = a.created_at.getTime()
		let t1 = b.created_at.getTime()
		return (ascending ? 1 : -1) * (t0 > t1 ? 1 : -1)
	})
}

export const filterOutCommitsBeforeDate = (commits: Commit[], date: Date): Commit[] => {
	// Filter out commits that are older than the user specified date
	return commits.filter((c) => c.created_at.getTime() >= date.getTime())
}
