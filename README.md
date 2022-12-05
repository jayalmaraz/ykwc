# You know what's cool?

ykwc.dev by Jay Almaraz

```
pnpm install
pnpm dev
```

## Hacks & Nuances

### MDX files are the exception to the `root` layout

We like the root layout for the aesthetic (TM) pages, but we want big fullscreen situation for the blog posts. For that we duplicate the basic centered-column-max-width layout and manually place it into pages that we need it:

```jsx
<RootLayout>// CONTENT</RootLayout>
```

We wanted the URL structure to be `/blog/$post`. We wanted to use the built in route modules. Because we couldn't get the wrapping of he `.mdx` files to work with a layout that differed from whatever their parent route was (`/blog` in this case) we opted for placing the post-specific layouts directly into the MDX:

```mdx
---
meta:
  title: Example Post
---

import { PostLayout } from '~/components/PostLayout';

<PostLayout>

# My Post

This is where we put the markdown content

</PostLayout>
```
