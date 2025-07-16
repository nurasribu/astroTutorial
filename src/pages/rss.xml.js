import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Nur Asri | Blog',
    description: 'My journey learning Astro',
    site: 'https://astrotutorial36.netlify.app/',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}