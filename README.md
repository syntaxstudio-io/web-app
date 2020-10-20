# Syntax Studio - Web App 🌐

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project includes configuration and tooling that conforms to Syntax Studio's baseline best-practices for a Web Application.

**🧰 Tools Used**

- [NextJS](https://nextjs.org) The React Framework for Production 😅
- [Chakra-UI](https://chakra-ui.com) For building modular and accessible React component
- [Emotion](https://emotion.sh/docs/introduction) For writing CSS styles with JavaScript
- [ESLint](https://eslint.org) For code linting
- [Prettier](https://prettier.io) For code formatting (via ESLint plugin)
- [TypeScript](http://www.typescriptlang.org) For static typing in JavaScript ([Learn](http://www.typescriptlang.org/docs/handbook/basic-types.html))

## 🏗 Setup

1. [Install Node](https://nodejs.org/en)
2. [Install Yarn](https://yarnpkg.com)
3. `yarn install` (install project dependencies)
4. [Install the ESLint plugin for ~~your editor~~ VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
5. Enable "Auto-Fix on Save" in `settings.json`:

```
// There will likely be other settings within this JSON object...
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```

## 👟 Run

Run the following scripts with `yarn run <SCRIPT_HERE>`:

- `dev` - start app in development mode
- `build` - bundle the app into static files for production
- `lint:fix` - run linter and fix if possible
- `lint` - run linter
- `prettier` - run prettier

> These scripts are located in `package.json` and do not represent the entirety of available scripts, but are the most commonly used.

## 🥇 Best Practices

- When prompted for a name, prefer `camelCase` for utils and `CamelCase` for components
- Fill out the `README.md` to describe what your code does
- If you get stuck at any point, just log an issue and we'll figure it out together 👭.
