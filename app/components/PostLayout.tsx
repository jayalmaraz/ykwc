import { Link } from '@remix-run/react';
import type { PropsWithChildren, ReactNode } from 'react';

/**
 *
 * @param timestamp UTC timestamp string
 * @returns Human readable date
 */
function getDateReadable(date: Date) {
  const now = new Date();
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

function getTwitterShareUrl(path: string) {
  const twitterText = `I found this [useful | helpful | interesting | entertaining], via @jayalmaraz`;
  const postUrl = `https://ykwc.dev/blog/${path ?? ''}`;
  return `https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(twitterText)}`;
}

type Props = PropsWithChildren & {
  title: string;
  path: string;
  date?: Date;
  src?: string;
  photoByName?: string;
  photoByUrl?: string;
  photoOnName?: string;
  photoOnUrl?: string;
};

function PostLayout({ title, path, date, src, photoByName, photoByUrl, photoOnName, photoOnUrl, children }: Props) {
  return (
    <div className="ykwc-post-layout flex flex-col w-full items-center bg-white dark:bg-zinc-800 mt-3">
      <div className="w-full max-w-[1024px] py-28 flex flex-col content-center items-center">
        {/* Back button container */}
        <div className="ykwc-post-layout-col ykwc-post-layout-pad pb-16">
          <div className="inline-block text-sm font-bold group transition duration-175">
            <Link to="/blog">
              <span className="text-xs">◀</span> Back to all posts
              <span className="mt-1 block max-w-0 group-hover:max-w-full transition-all duration-175 h-0.5 bg-black dark:bg-white"></span>
            </Link>
          </div>
        </div>

        {/* Title and image container */}
        <header className="w-full pb-16">
          <div className="w-full ykwc-post-layout-col ykwc-post-layout-pad">
            <h2 className="text-4xl font-bold">{title}</h2>
            {date && <p className="text-4xl font-medium text-gray-300 mb-8">{getDateReadable(date)}</p>}
          </div>

          <div className="ykwc-post-layout-pad">
            {src ? (
              <div className="flex justify-center">
                <img
                  className="w-full max-h-[480px] lg:max-h-[560px] object-cover rounded-xl"
                  src={src}
                  alt="Description of the mountains"
                />
              </div>
            ) : null}

            {photoByName && photoByUrl ? (
              <div className="text-gray-400 text-xs flex ml-2 mt-2 mb-8 prose prose-a:text-gray-400 prose-a:font-normal max-w-none">
                <div>
                  Photo by{' '}
                  <a target="_blank" rel="noreferrer noopener" href={photoByUrl}>
                    {photoByName}
                  </a>{' '}
                  {photoOnName && photoOnUrl ? (
                    <>
                      on{' '}
                      <a target="_blank" rel="noreferrer noopener" href={photoOnUrl}>
                        {photoOnName}
                      </a>
                    </>
                  ) : null}
                </div>
              </div>
            ) : null}
          </div>
        </header>

        {/* Content */}
        <main className="prose prose-lg w-full max-w-none text-gray-600 dark:text-neutral-300 dark:prose-headings:text-white prose-p:text-gray-600 prose-a:text-pink-400 dark:prose-p:text-neutral-300 dark:prose-strong:text-neutral-300 dark:prose-a:text-pink-300">
          {children}

          {/* Signature */}
          <div className="border-t-2 border-pink-50 mt-16 pt-16 pb-16 ">
            <p>
              Hey, thanks for reading! My name is Jay and I'm a software dev from Brisbane, Australia. Feel free to{' '}
              <a href={getTwitterShareUrl(path)} target="_blank" rel="noopener noreferrer">
                share this post on Twitter
              </a>
              , or reach out directly{' '}
              <a href="https://twitter.com/jayalmaraz" target="_blank" rel="noopener noreferrer">
                @jayalmaraz
              </a>
              .
            </p>
            <p>Hope you found this useful, helpful, interesting, or entertaining ❤️</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export { PostLayout };
