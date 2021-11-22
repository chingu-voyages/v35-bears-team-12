# Chingu Board
Chingu Board will be a posting board for Chingu projects. Users will be able to login or signup, share a finished project from their Chingu voyage, and view past projects from completed Chingu voyages. Additionally we will build a section where non-profits/charities can view completed projects as well as profiles of the developers who developed those projects. This will allow these organizations to find developer talent.
Connecting students and those early in their career with hands on experience of working in a team.

## Overview

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

### 1. Live at ( ADD DEPLOY LATER )

`.env file must be located in app directory, else NextJS won't be able to find it during the build time`

### 2. User Stories

This app is for two types of users: project managers and developers.

##### Create Account Page
* as a new user,
* I want to create an account,
* so I can access the app

##### Log In Page
* as a returning user,
* I want to log into my account
* so I can access the app

##### About Page
* as a user,
* I want to view key information about what the "Chingu Boards" app is and how it works,
* So I can figure out how to use the app

##### Home Page
* as a project manager,
* I want to post information about (and a link to apply for) a project I (or my organization) want to build,
* so I can attract the developers I need

##### Home Page
* as a developer,
* I want to view information about projects that people (or organizations) want to build,=

##### Home Page
* as a project manager,
* I want to post details about a project I (or my organization) want to build,
* so developers can decide if they want to apply to work on it

##### Home Page
* as a developer,
* I want to view details about projects that people (or organizations) want to build,
* so I can decide if I want to apply to work on any

##### Create a Project Page
* as a project manager,
* I want to enter details about the project's vision, and the experience/stack needed for developers to work on it,
* so I can post the project to the Home Page

##### Discover Gallery Page
* as a project manager or a developer,
* I want to view projects created by Chingus, and follow links to explore them further, 
* so I can build community, get inspiration for my (or my oganization's) project(s), and/or find promising developers

##### Discover Gallery Page
* as a developer,
* I want to post information about my completed voyage projects,
* so I can build community and/or showcase my abilities to project managers

##### Add Project to Gallery Page
* as a developer,
* I want to enter details about my team's completed voyage project and our team members,
* so I can post the project to the Gallery

##### Settings Page
* as a user,
* I want to edit the settings for my profile, notifications, _________
* so _____

##### Profile Page
* as a user,
* I want to view the name of a fellow user, and links to their portfolio, LinkedIn and/or GitHub,
* so I can decide whether I want to work with them

##### Discover Gallery Page
* as a project manager,
* I want to view projects created by Chingus, and follow links to explore them further 
* so I can get inspiration for my (or my oganization's) project, and/or find promising developers

##### Discover Gallery Page
* as a developer,
* I want to 
* so

##### Add to Gallery Page
* as a developer,
* I want to 
* so

##### Settings Page
* as a user,
* I want to 
* so

##### Profile Page
* as a user,
* I want to 
* so

### 3. Functionality

### 4. Technology

### 5. Wireframes

### 6. Front-end Structure - Component Map

### 7. Back-end Structure

### 8. API Documentation

### 9. Screenshots

### 10. Development Roadmap

#### Updates

`Wed. Nov 3, 2021`

- Initial Set Up

### 11. Running the project locally

- Clone the project locally

From the repo:

`git clone`

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


#### Direct Dependencies

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

#### Add Support For ?

- [Checkly](https://www.checklyhq.com/)
- [Storybook](https://storybook.js.org/)

#### Learn More

If you're interested in contributing, or just interested in the main tools I'm using, you can check them out via the links below.

- [Next.js Docs](https://nextjs.org/docs) - learn about Next.js features and API.
- [Chakra UI Docs](https://chakra-ui.com/docs/getting-started) - learn about Chakra UI features and API.
- [Some Other Docs](https://storybook.js.org/docs/react/get-started/introduction) - learn about Storybook features and API.
