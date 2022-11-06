# Welcome to [Astro](https://astro.build)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/JTBroad/astro-sample?file=README.md)
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_codeflow.svg)](https://stackblitz.com/~/github.com/JTBroad/astro-sample)


## Summary

This project aims to be a base astro site example to demonstrate a starting off point for using astro and react. Examples of different methods of state management are included.


## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   │   └── react
│   │       └── ...
│   ├── layouts/
│   │   └── Layout.astro
│   ├── models/
│   │   └── (Data structure types)
│   └── pages/
│   │   └── app/
│   │       └── AppIsland.tsx
│   │       └── index.astro
│   │   └── index.astro
│   └── utils/
│       └── (Helper code thats more general)
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
