import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { Link, Links, LiveReload, Meta, NavLink, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { RootLayout } from './components/RootLayout';
import styles from './tailwind.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },

  // Favicon
  { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
  { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
  { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
  { rel: 'manifest', href: '/site.webmanifest' },
  { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#F73636' },
];

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'ykwc.dev',
  description: "ykwc.dev | You know what's cool?",
  viewport: 'width=device-width,initial-scale=1',

  // Colors
  'msapplication-TileColor': '#da532c',
  'theme-color': '#ffffff',

  // Open Graph
  'og:title': "ykwc.dev | You know what's cool?",
  'og:url': 'https://ykwc.dev/',
  'og:description': "ykwc.dev | You know what's cool?",
  image: 'https://ykwc.dev/ogimage-lg.png',
  'og:image': 'https://ykwc.dev/ogimage-lg.png',
  'og:image:width': '1200',
  'og:image:height': '630',
  // 'og:image': 'https://ykwc.dev/ogimage-m.png','og:image:width': '901','og:image:height': '474','og:image': 'https://ykwc.dev/ogimage-s.png','og:image:width': '601','og:image:height': '316',

  // Twitter
  'twitter:card': 'summary_large_image',
  'twitter:creator': '@jayalmaraz',
  'twitter:image': 'https://ykwc.dev/ogimage-lg.png',
});

export default function App() {
  function handleToggleTheme() {
    const htmlElement = document.getElementsByTagName('html')[0];
    if (htmlElement.className === 'dark') {
      htmlElement.className = 'light';
      return;
    }
    htmlElement.className = 'dark';
  }

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-red-50 dark:bg-[#39393E] relative">
        {/* Dark mode background layers */}
        <div className="hidden dark:block absolute inset-0 bg-gray-900" />
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-br from-orange-200 to-red-200 opacity-[17.5%]" />

        {/* Main background + content container */}
        <div className="relative flex flex-col w-full min-h-screen items-center bg-gradient-to-br from-red-50 to-blue-50 dark:bg-none dark:text-white">
          <nav className="w-full">
            <RootLayout>
              <div className="flex justify-between w-full py-6">
                <div className="flex gap-3">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      !isActive
                        ? 'py-3 px-6 font-bold hover:text-red-200 dark:hover:text-pink-300'
                        : 'ring-black dark:ring-white ring-4 py-3 px-6 font-bold'
                    }
                  >
                    <h1>ykwc.dev</h1>
                  </NavLink>
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      !isActive
                        ? 'py-3 px-6 font-bold hover:text-red-200 dark:hover:text-pink-300'
                        : 'ring-black dark:ring-white ring-4 py-3 px-6 font-bold'
                    }
                  >
                    Blog
                  </NavLink>
                </div>

                <div className="flex">
                  <button
                    className="hidden dark:block py-3 px-6 font-bold hover:text-pink-300"
                    onClick={handleToggleTheme}
                  >
                    Light
                  </button>

                  <button
                    className="block dark:hidden py-3 px-6 font-bold hover:text-red-200"
                    onClick={handleToggleTheme}
                  >
                    Dark
                  </button>
                </div>
              </div>
            </RootLayout>
          </nav>

          <div className="flex flex-col flex-grow w-full">
            <Outlet />
          </div>

          <footer className="bg-white md:bg-transparent py-20 w-full">
            <RootLayout>
              <Link to="/" className="font-bold text-xl">
                ykwc.dev
              </Link>
              <p className="text-xs">
                © 2022 YOU KNOW WHAT'S COOL?, <br className="inline-block sm:hidden" />
                All Rights Reserved
              </p>

              <div className="mt-6 flex">
                <div className="font-bold text-gray-400">Sitemap</div>
                <ul className="ml-2">
                  <Link to="/" className="px-1 hover:text-red-200 dark:hover:text-pink-300">
                    Home
                  </Link>
                  <Link to="/blog" className="px-1 hover:text-red-200 dark:hover:text-pink-300">
                    Blog
                  </Link>
                </ul>
              </div>
            </RootLayout>
          </footer>
        </div>

        <ScrollRestoration />

        <script src="https://certain-lazarus.ykwc.dev/script.js" data-site="IZEWTYPT" defer />
        <Scripts />

        <LiveReload />
      </body>
    </html>
  );
}
