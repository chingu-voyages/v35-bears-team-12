# Chingu Board

## Overview

Connecting students and those early in their career with hands on experience of working in a team.

We going to use The Git Flow is the most known workflow on this list.
It was created by Vincent Driessen in 2010 and it is based in two main branches with infinite lifetime:

`main (master)` — this branch contains production code. All development code is merged into master in sometime.

`develop` — this branch contains pre-production code. When the features are finished then they are merged into develop.

During the development cycle, a variety of supporting branches are used:
If you ever do merges, make sure you do not merge anything into main except develop and release branch.

`feature/*` — feature branches are used to develop new features for the upcoming releases.
May branch off from develop and must merge into develop.

`bugfix/*` — hotfix branches are necessary to act immediately upon an undesired status of master.
May branch off from master and must merge into master and develop.

`hotfix/*` — hotfix branches are necessary to act immediately upon an undesired status of master.
May branch off from master and must merge into master and develop.

`release/*` — release branches support preparation of a new production release.
They allow many minor bug to be fixed and preparation of meta-data for a release.
May branch off from develop and must merge into master and develop.

#### Live at ( ADD DEPLOY LATER )

`.env file must be located in app directory, else NextJS won't be able to find it during the build time`

## Updates

`Wed. Nov 3, 2021`

- Initial Set Up

## Features

- Add Features Here

## Running the project locally

- Clone the project locally

From the repo:

### `git clone`

- Installs dependencies required for the app to run in development mode.

On the command line or in the terminal of your preferred editor, you can run:

I personally use yearn for speed, but if you want
to use npm, delete lock config for yarn or just leave it be.
I don't think there's a way for these two configs to be in sync. That's not a big deal though.
You can have both, but would need to manually sync them, not a best practice though

```bash
npm install
# or
yarn
```

- Fire up the development server by running:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- Fire up the tests by running:

```bash
npm run test
# or
yarn test
```

- Fire up the lint tests by running:

```bash
npm run lint
npm run lint -- --fix
# or
yarn lint
```

- Check all other available scripts in package.json

## Direct Dependencies

- [React](https://reactjs.org/)
- [React-DOM](https://www.npmjs.com/package/react-dom)
- [NextAuth](https://next-auth.js.org/getting-started/client#signin)
- [Chakra UI](https://chakra-ui.com/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/)
- [Framer Motion](https://www.framer.com/docs/animation/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Mock Service Worker](https://mswjs.io/docs/)

## Add Support For ?

- [Checkly](https://www.checklyhq.com/)
- [Storybook](https://storybook.js.org/)

## Learn More

If you're interested in contributing, or just interested in the main tools I'm using, you can check them out via the links below.

- [Next.js Docs](https://nextjs.org/docs) - learn about Next.js features and API.
- [Chakra UI Docs](https://chakra-ui.com/docs/getting-started) - learn about Chakra UI features and API.
- [Some Other Docs](https://storybook.js.org/docs/react/get-started/introduction) - learn about Storybook features and API.
