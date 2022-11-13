import { RootLayout } from '~/components/RootLayout';

export default function Home() {
  return (
    <RootLayout>
      <header>
        <h2 className="text-6xl font-bold">
          {'You know '}
          <br className="inline-block" />
          {'what’s '}
          <br className="inline-block" />c
          <span className="transition-colors relative group hover:text-white dark:hover:text-red-500">
            o
            <span
              aria-hidden
              className="absolute top-[1.6rem] left-0.5 h-9 w-9 transition-colors group-hover:text-red-500 dark:group-hover:text-white rounded-full text-white dark:text-[#393940] text-xs text-right pr-1 leading-[.75rem] hover:cursor-default"
            >
              yk
              <br />
              wc
              <br />
              .dev
            </span>
          </span>
          ol?
        </h2>
      </header>
    </RootLayout>
  );
}
