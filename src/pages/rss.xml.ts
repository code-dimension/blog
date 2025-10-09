import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { siteConfig } from '@/site-config'
import { getAuthorById } from '@/data/authors'

export async function GET() {
	const posts = await getCollection('blog')
	return rss({
		title: siteConfig.title,
		description: siteConfig.description,
		site: import.meta.env.SITE,
		items: posts
			.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
			.map((post) => ({
				...post.data,
				customData: `<image>${import.meta.env.SITE}${post.data.heroImage}</image>`,
				link: `post/${post.slug}/`,
				author: getAuthorById(post.data.authorId)?.name
			}))
	})
}
