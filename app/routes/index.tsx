import { RootLayout } from '~/components/RootLayout';

export default function Home() {
  return (
    <RootLayout>
      <header>
        <h2 className="text-6xl font-bold tracking-tight">
          {'You know '}
          <br className="inline-block" />
          {'what‘s '}
          <br className="inline-block" />c
          <span className="transition-colors relative group hover:text-white">
            o
            <span
              aria-hidden
              className="absolute top-6 left-0.5 h-9 w-9 transition-colors group-hover:text-red-500 rounded-full text-white  text-xs text-right pr-1 leading-3 hover:cursor-default"
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
