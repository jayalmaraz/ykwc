import type { MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { RootLayout } from '~/components/RootLayout';

import * as postA from './hello-world.mdx';
import * as postB from './code.mdx';

function postFromModule(mod: any) {
  const date = new Date(mod.attributes.meta.date);

  return {
    slug: mod.filename.replace(/\.mdx?$/, ''),
    ...mod.attributes.meta,
    date: `${date.toLocaleDateString(undefined, {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    })}, ${date.toLocaleDateString(undefined, {
      year: 'numeric',
    })}`,
  };
}

export const meta: MetaFunction = () => ({
  title: "ykwc.dev Blog | You know what's cool?",
  description: "ykwc.dev | You know what's cool?",
});

export async function loader() {
  return json([postB, postA].map(postFromModule));
}

export default function Blog() {
  const posts = useLoaderData();

  return (
    <RootLayout>
      <div className="mb-12">
        <h1 className="text-6xl font-bold tracking-tight">writing</h1>
      </div>

      <ul className="flex flex-col w-full gap-y-3">
        {posts.map((post: any) => (
          <li
            key={post.slug}
            className="bg-white ring-4 ring-red-50 ring-offset-[-4px] hover:ring-offset-4 transition-all"
          >
            <Link to={post.slug}>
              <div className="py-12 px-8">
                <div className="text-xl font-bold text-gray-300">{post.date}</div>
                <div className="text-xl font-bold">{post.title}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </RootLayout>
  );
}
