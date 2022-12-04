const fs = require('fs');

const rehypePrettyCodeOptions = {
  theme: {
    // light: 'slack-ochin',
    // light: 'min-light',
    // light: 'light-plus',
    // light: 'github-light',

    light: JSON.parse(fs.readFileSync(require.resolve('./themes/OneLight.json'), 'utf-8')),
    dark: 'github-dark-dimmed',
  },
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  // Feel free to add classNames that suit your docs
  onVisitHighlightedLine(node) {
    node.properties.className.push('highlighted');
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['word'];
  },
};

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
    const [rehypePrettyCode, rehypeSlug, rehypeAutolinkHeadings, rehypeAccessibleEmojis] = await Promise.all([
      import('rehype-pretty-code').then((mod) => mod.default),
      import('rehype-slug').then((mod) => mod.default),
      import('rehype-autolink-headings').then((mod) => mod.default),
      import('rehype-accessible-emojis').then((mod) => mod.rehypeAccessibleEmojis),
    ]);

    return {
      rehypePlugins: [
        [rehypePrettyCode, rehypePrettyCodeOptions],
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        rehypeAccessibleEmojis,
      ],
    };
  },
};
