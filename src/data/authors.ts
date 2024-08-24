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
		image: '/images/authors/me.jpg',
		gender: AuthorGender.Male
	}
]

export const getAuthorById = (id: string) => authors.find((author) => author.id === id)
