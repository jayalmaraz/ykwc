import { Link } from '@remix-run/react';
import type { PropsWithChildren } from 'react';

function PostLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <div className="ykwc-post-layout flex flex-col w-full items-center bg-white mt-3">
        <div className=" w-full max-w-[1280px] py-28">
          <div className="inline-block mb-16 text-sm font-medium group transition duration-175">
            <Link to="/blog">
              <span className="text-xs">◀</span> Back to overview
              <span className="mt-1 block max-w-0 group-hover:max-w-full transition-all duration-175 h-0.5 bg-black"></span>
            </Link>
          </div>

          <article className="prose prose-lg max-w-none">{children}</article>
        </div>
      </div>
      {/* <div className="bg-gradient-to-b to-transparent from-white h-36" /> */}
    </div>
  );
}

export { PostLayout };
