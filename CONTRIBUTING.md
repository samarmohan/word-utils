# Contributing

This project is open source, and we welcome your contributions.

## Setup

###### Make sure you have node.js and yarn installed

1. Fork the repo to your account then clone it locally.

2. Run `yarn install` to install dependencies.

3. Run `yarn quality` to make sure you have the nicest code.

### Fixing issues

1. Find an [issue](https://github.com/samarmohan/word-utils/issues) you want to fix, make sure no one else has already claimed it.\

2. Create a new branch with your changes.

3. Make sure your branch has the latest changes from `master`.

4. See [submitting changes](#submitting-changes)

### Submitting Changes

1. Run `yarn quality` to make sure your codebase follows the style guide.

2. Run `yarn commit` or `yarn commit:signed` to generate a commit message.

3. Submit a pull request.

### 🚧 Built With 🚧

###### Note: We use Chakra-UI for a few of our components, the other ones are built using Tailwind.

- [React](https://facebook.github.io/react/) - Frontend library
- [React Router](https://reactrouter.com/) - Navigation
- [TypeScript](https://www.typescriptlang.org/) - Programming language
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Chakra-UI](https://chakra-ui.com/) - Other UI Components

### Codebase Reference

- \_\_tests\_\_: Test directory, mirrors the `src` directory.
- src: Main source code
  - lib: Main functionality
  - css: Import Tailwind CSS and set some defaults
  - pages: Contains the pages of the app, uses the functions in `lib`
  - ui: Contains UI components, used all around the app
  - App.tsx: Use React Router to set up routes and set layout of app
  - index.tsx: Entry point, React DOM renders the `App` component
  - logo.svg: The logo used
  - react-app-env.d.ts: TypeScript type definitions for React
  - theme.ts: Set Chakra-UI theme.

### Scripts

```json
"start": "craco start", // start the app
"build": "craco build", // create a production build
"test": "echo \"Testing has not been implemented\"", // test script (not implemented)
"deploy": "yarn build && netlify deploy --dir=build --prod", // deploy to netlify, only I can use this
"lint": "eslint . --fix", // use eslint to lint codebase
"prettier": "prettier --write .", // format codebase with prettier
"quality": "yarn prettier && yarn lint && yarn test", // run all code quality scripts
"commit:signed": "git add -A && cz -S", // commit with a gpg key.
"commit": "git add -A && cz", // normal commit
"prepare": "husky install" // install husky, runs after `yarn install`
```
