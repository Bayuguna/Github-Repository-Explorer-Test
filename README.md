# Github Repository Explorer

This repository using React + Typescript + Vite and Styling using [Tailwindcss v3](https://tailwindcss.com/docs/installation/using-vite) + [Aceternity](https://ui.aceternity.com/) + [Shadcn](https://ui.shadcn.com/).

# Whats In Project

- Include search repository with [github api repository](https://docs.github.com/en/rest?apiVersion=2022-11-28).
- Using unit test [vitest](https://vitest.dev/) for testing web application.
- Using [Atomic Design](https://medium.com/@makersinstitute/penerapan-atomic-design-pada-environment-react-c6c50eaf1b66) for better UI/UX development.
- Responsive UI using [Tailwindcss](https://tailwindcss.com/docs/installation/using-vite) for better user experience.

# How to Run It

Clone this repository using git "git clone <REPOSITORY_URL>"

```js
  // First of all install the dependecy module
  npm install

  // Create .env file in root folder
  VITE_APP_NAME="Github Repository Explorer"
  VITE_APP_VERSION=1.0.0
  VITE_GITHUB_API_URL=https://api.github.com

  //Run the project
  npm run dev
  //or
  npm run build

  //Run testing
  npm test
```

# Credit

Putu Denanta Bayuguna Perteka S.Kom, M.T.
</br>
putubayuguna@gmail.com

<!-- Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
``` -->
