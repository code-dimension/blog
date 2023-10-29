import getReadingTime from 'reading-time'
import { toString } from 'mdast-util-to-string'

/**
 * Injects `minutesRead` into frontmatter processed by Remark.
 */
export function remarkReadingTime() {
	return function (tree: unknown, { data }: any) {
		const textOnPage = toString(tree)
		const readingTime = getReadingTime(textOnPage)
		// readingTime.text will give us minutes read as a friendly string,
		// i.e. "3 min read"
		data.astro.frontmatter.minutesRead = createMinutesReadText(readingTime.minutes)
	}
}

function createMinutesReadText(minutes: number) {
	let roundedMinutes = Math.round(minutes)

	if (roundedMinutes < 1) {
		roundedMinutes = 1
	}

	if (roundedMinutes > 1) {
		return `${roundedMinutes} minutos de leitura`
	} else {
		return `1 minuto de leitura`
	}
}
