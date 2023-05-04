import rss from '@astrojs/rss'

const postImportResult = import.meta.globEager('./posts/*.md')
const posts = Object.values(postImportResult)

export const get = () =>
  rss({
    title: 'Cloud Devs Blog ',
    description: 'Ein Blog für Cloud Experten.',
    site: import.meta.env.SITE,
    items: import.meta.glob('./posts/**/*.md'),
  })
