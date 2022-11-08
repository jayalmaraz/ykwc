// const { remarkMdxFrontmatter } = require('remark-mdx-frontmatter');

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: 'vercel',
  // When running locally in development mode, we use the built in remix
  // server. This does not understand the vercel lambda module format,
  // so we default back to the standard build output.
  server: process.env.NODE_ENV === 'development' ? undefined : './server.js',
  ignoredRouteFiles: ['**/.*'],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "api/index.js",
  // publicPath: "/build/",

  mdx: async (filename) => {
    const [remarkPrism] = await Promise.all([
      //
      import('remark-prism').then((mod) => mod.default),
    ]);

    return {
      remarkPlugins: [
        [
          remarkPrism,
          {
            plugins: ['line-numbers'],
          },
        ],
      ],
    };
  },
};
