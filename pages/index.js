import Head from "next/head";
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>ykwc.dev | You know what's cool?</title>
        <meta name="description" content="ykwc.dev | You know what's cool?" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        {/* Open Graph Meta */}
        <meta property="og:title" content="ykwc.dev | You know what's cool?" />
        <meta property="og:url" content="https://ykwc.dev/" />
        <meta
          property="og:description"
          content="That idea is cool, let's make it happen"
        />

        {/* Open Graph Images */}
        <meta property="image" content="https://ykwc.dev/ogimage-lg.png" />
        <meta property="og:image" content="https://ykwc.dev/ogimage-lg.png" />
        <meta property="og:image" content="https://ykwc.dev/ogimage-lg.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image" content="https://ykwc.dev/ogimage-m.png" />
        <meta property="og:image:width" content="901" />
        <meta property="og:image:height" content="474" />
        <meta property="og:image" content="https://ykwc.dev/ogimage-s.png" />
        <meta property="og:image:width" content="601" />
        <meta property="og:image:height" content="316" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@jayalmaraz" />
        <meta name="twitter:image" content="https://ykwc.dev/ogimage-lg.png" />
      </Head>

      <div
        className={
          "flex flex-col min-h-screen content-between justify-between items-center bg-gradient-to-br from-red-50 to-blue-50"
        }
      >
        <main className="flex-grow pb-48 sm:pb-64 px-4">
          <div className="flex sm:justify-center py-36 sm:pt-48 sm:pb-32">
            <div>
              <div className="block sm:hidden font-bold">
                <a href="#" className="hover:text-red-500">
                  ykwc.dev
                </a>
              </div>

              <h1 className="text-6xl font-bold tracking-tight">
                {"You know "}
                <br className="inline-block sm:hidden" />
                {"what‘s "}
                <br className="inline-block sm:hidden" />c
                <span className="transition-colors relative group hover:text-white">
                  o
                  <a
                    href="#"
                    className="absolute top-6 left-0.5 h-9 w-9 transition-colors group-hover:text-red-500 rounded-full text-white  text-xs text-right pr-1 leading-3"
                  >
                    yk
                    <br />
                    wc
                    <br />
                    .dev
                  </a>
                </span>
                ol?
              </h1>

              <div className="hidden sm:block font-bold">
                <p className="text-justify pl-16 relative">
                  {"y k w c "}
                  <a
                    href="#"
                    className="text-right right-0 absolute opacity-0 hover:opacity-100 transition-opacity hover:text-red-500"
                  >
                    ykwc.dev
                  </a>
                  .dev
                  <span className="w-full inline-block" aria-hidden />
                </p>
              </div>
            </div>
          </div>

          <div className="text-xl grid grid-cols-1 gap-4 sm:gap-2 py-16 sm:py-24">
            <p>
              <span className="bg-black text-white font-bold pt-9 pl-1 sm:pl-6 pb-1 pr-1">
                cool
              </span>{" "}
              is tech that makes sense,
            </p>
            <p>
              <span className="font-bold pt-8 pl-1 sm:pl-6 pb-1 ">cool</span> is
              easy to work with, easy to use, and
            </p>
            <p>
              <span className="font-bold pt-8 pl-1 sm:pl-6 pb-1 ">cool</span> is
              simple.
            </p>
          </div>

          <div className="text-xl flex justify-center py-24">
            <p className="leading-15">
              <span className="ring-black ring-4 py-4 px-4 sm:px-2 font-bold mr-3">
                your idea is cool,
              </span>{" "}
              <br className="inline-block sm:hidden" />
              let's make it happen.
            </p>
          </div>
        </main>

        <footer className="bg-white py-20 w-full pl-8">
          <p className="font-bold text-xl tracking-wider">ykwc.dev</p>
          <p className="text-xs">
            © 2021 YOU KNOW WHAT'S COOL?,
            <br className="inline-block sm:hidden" />
            All Rights Reserved
          </p>
        </footer>
      </div>
    </>
  );
}
