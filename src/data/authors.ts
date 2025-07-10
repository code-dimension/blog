export enum AuthorGender {
	Male,
	Female,
	Other
}

export interface Author {
	id: number
	name: string
	description: string
	image: string
	gender: AuthorGender
}

export const authors = [
	{
		id: 'henrique-custodia',
		name: 'Henrique Custódia',
		description:
			'Arquiteto Frontend, entusiasta Angular, cat lover, criador de conteúdo e fundador da Code Dimension!',
		image: '/images/authors/henrique-custodia.jpg',
		gender: AuthorGender.Male
	},
	{
		id: 'manuel-afonso',
		name: 'Manuel Afonso',
		description: 'Front-End Developer | ReactJS | React Native | Typescript | Angular |',
		image: '/images/authors/manuel.jpeg',
		gender: AuthorGender.Male
	},
	{
		id: 'moises-bueno',
		name: 'Moisés Bueno',
		description: 'Back-End Developer | .NET | C# | Sql Server |',
		image: '/images/authors/moises.jpeg',
		gender: AuthorGender.Male
	}
]

export const getAuthorById = (id: string) => authors.find((author) => author.id === id)
