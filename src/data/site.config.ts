interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
}

export const siteConfig: SiteConfig = {
	author: 'Code Dimension',
	title: 'Blog da Code Dimension',
	description:
		'No Blog da Code Dimension você vai ter acesso as últimas novidades sobre Angular, boas práticas e Frontend em geral!',
	lang: 'pt-BR',
	ogLocale: 'pt_BR',
	shareMessage: 'Compatilhe esse post!' // Message to share a post on social media
}
