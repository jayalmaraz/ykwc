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
  'og:description': "That idea is cool, let's make it happen",
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
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-red-50">
        <div className="flex flex-col w-full min-h-screen items-center bg-gradient-to-br from-red-50 to-blue-50">
          <nav className="w-full">
            <RootLayout>
              <div className="flex justify-between w-full py-6">
                <div className="flex gap-3">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      !isActive ? 'py-3 px-6 font-bold hover:text-red-200' : 'ring-black ring-4 py-3 px-6 font-bold'
                    }
                  >
                    <h1>ykwc.dev</h1>
                  </NavLink>
                  <NavLink
                    to="blog"
                    className={({ isActive }) =>
                      !isActive ? 'py-3 px-6 font-bold hover:text-red-200' : 'ring-black ring-4 py-3 px-6 font-bold'
                    }
                  >
                    Blog
                  </NavLink>
                </div>

                <div className="flex">
                  <button className="py-3 px-6 font-bold">Light</button>
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
            </RootLayout>
          </footer>
        </div>

        <ScrollRestoration />

        <Scripts />
        <script src="https://certain-lazarus.ykwc.dev/script.js" data-site="IZEWTYPT" defer></script>

        <LiveReload />
      </body>
    </html>
  );
}
