import type { APIContext } from 'astro';
import { tutorialFeed } from '../lib/rss';

export const GET = (context: APIContext) => tutorialFeed(context, 'en');
