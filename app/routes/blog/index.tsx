import type { MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { RootLayout } from '~/components/RootLayout';

import * as postSupabaseMagicLinkAuthInRemix from './supabase-magic-link-auth-in-remix.mdx';

/**
 *
 * @param timestamp UTC timestamp string
 * @returns Human readable date
 */
function getDateReadable(timestamp: string) {
  const now = new Date();
  const date = new Date(timestamp);
  const isCurrentYear = now.getFullYear() === date.getFullYear();
  const dayMonthReadable = date.toLocaleDateString(undefined, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  if (isCurrentYear) {
    return dayMonthReadable;
  }

  return `${dayMonthReadable}, ${date.toLocaleDateString(undefined, {
    year: 'numeric',
  })}`;
}

function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ''),
    ...mod.attributes.meta,
    date: getDateReadable(mod.attributes.postLayoutData.date),
  };
}

export const meta: MetaFunction = () => ({
  title: 'ykwc.dev Blog',
  description: "ykwc.dev | You know what's cool?",
});

export async function loader() {
  return json([postSupabaseMagicLinkAuthInRemix].map(postFromModule));
}

export default function Blog() {
  const posts = useLoaderData();

  return (
    <RootLayout>
      <header className="mb-12">
        <h2 className="text-6xl font-bold">writing</h2>
      </header>

      <ul className="flex flex-col w-full gap-y-2 pb-8">
        {posts.map((post: any) => (
          <li
            key={post.slug}
            className="bg-white dark:bg-zinc-800 rounded-lg ring-4 ring-black dark:ring-pink-200 ring-offset-[-4px] hover:ring-offset-4 dark:hover:ring-offset-2 dark: transition-all"
          >
            <Link to={post.slug}>
              <div className="py-12 px-8">
                <div className="text-xl font-bold">{post.title}</div>
                <div className="text-xl font-bold text-gray-300">{post.date}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </RootLayout>
  );
}
