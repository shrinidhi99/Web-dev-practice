# Chai aur React
This project is a part of learning [React](https://react.dev/) framework. This [playlist](https://www.youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige) is being followed for the same.

## Project Set up
1. Create a react app using node package executor. This is a slow and a bulky installation of react app.
```sh
npm install create-react-app
npx create-react-app app-name
```
2. Run the react app using npm:
```sh
cd react-app-directory
npm run start
```
3. For production build:
```sh
npm run build
```
4. Creating a react app using a bundler called [Vite](https://vitejs.dev/guide/):
```sh
npm create vite@latest
cd react-app-name
npm install
npm run dev
```
5. Remove some files that are not needed for now - (test files, css files).
In `index.js`, delete the portions related to web vitals and index.css which was earlier deleted.
In `app.js`, delete the portions related to App.css, logo and the App() rendering of html body. Add a simple heading for now.

6. Tailwind css:
Install the dev dependencies for tailwind and its peers and initialize a config file.
```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
Change the `contents` of the config file to include all template paths.
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Include the above lines in index.js of the root folder to add the tailwind directives.

## Working of the react projects:
1. index.html is the root file from where the single page application loads and further manipulation to the DOM happens.
2. In case of `01basicreact`, the `react-scripts` package binds the index.html with the index.js. In case of `01vitereact`, they have included the <script> tag in the index.html which would bind it to main.jsx file which would be an entry point for the single page application.
3. ReactDOM creates a virtual DOM which React can use and selectively manipulate the DOMs that need to be updated.
4. In vite project, there are some conventions that need to be followed, such as the exported module having an uppercase as the starting letter and the corresponding html also starting with an uppercase. Another convention is about the extension. It is by default configured to recognize only jsx files.
5. Use `<> </>` to wrap the html body returned from the jsx script in case multiple elements are included in the body.
6. If `npm run build/start` is not recognizing `react-scripts`, do `npm install` and it will fix the missing links that were already mentioned in the package.json but due to some reason went unrecognized.
7. `React fibre`: An optimized algorithm by react to maintain the virtual DOM through reconciliation of the difference between the two DOMs (trees).
8. `useCallback()` will return a memoized version of the callback that only changes if one of the inputs has changed.
9. `useRef()` returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
10. `useEffect()` accepts a function that contains imperative, possibly effectful code.

## Projects
- `01basicreact`: getting minimal react js app created using create-react-app, running in development environment.
- `01vitereact`: getting minimal react js app created using vite bundler, running in development environment.
- `02counter`: A simple react app to update counter to understand the concept of hooks which react uses to update the DOM (created using vite bundler). `useState` is a library that helps in doing this task.
- `03tailwindprops`: A simple react app to understand tailwind and props.
- `04bgChanger`: A simple react app to change background color of the web page.
- `05passwordGenerator`: A simple react app to generate password to understand useEffect, useRef, and useCallback concepts.