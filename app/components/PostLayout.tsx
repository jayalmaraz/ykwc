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

type Props = PropsWithChildren & {
  title: string;
  date?: Date;
  src?: string;
  footer?: ReactNode;
  photoByName?: string;
  photoByUrl?: string;
  photoOnName?: string;
  photoOnUrl?: string;
};

function PostLayout({ title, date, src, footer, photoByName, photoByUrl, photoOnName, photoOnUrl, children }: Props) {
  return (
    <div className="ykwc-post-layout flex flex-col w-full items-center bg-white mt-3">
      <div className="w-full max-w-[1024px] py-28 flex flex-col content-center items-center">
        <div className="w-full max-w-[821px]">
          <div className="inline-block pb-16 text-sm font-bold group transition duration-175">
            <Link to="/blog">
              <span className="text-xs">◀</span> Back to overview
              <span className="mt-1 block max-w-0 group-hover:max-w-full transition-all duration-175 h-0.5 bg-black"></span>
            </Link>
          </div>
        </div>

        <header className="w-full max-w-[821px] flex flex-col pb-16">
          <h2 className="text-4xl font-bold">{title}</h2>
          {date && <p className="text-4xl font-medium text-gray-300 mb-8">{getDateReadable(date)}</p>}

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
        </header>

        <main className="prose prose-lg prose-p:text-gray-600 w-full max-w-none">{children}</main>
      </div>
    </div>
  );
}

export { PostLayout };
