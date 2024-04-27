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
Include the above lines in index.css of the root folder to add the tailwind directives.

7. React Router DOM:
npm install react-router-dom

## Working of the react projects:
1. index.html is the root file from where the single page application loads and further manipulation to the DOM happens.
2. In case of `01basicreact`, the `react-scripts` package binds the index.html with the index.js. In case of `01vitereact`, they have included the `<script>` tag in the index.html which would bind it to main.jsx file which would be an entry point for the single page application.
3. ReactDOM creates a virtual DOM which React can use and selectively manipulate the DOMs that need to be updated.
4. In vite project, there are some conventions that need to be followed, such as the exported module having an uppercase as the starting letter and the corresponding html also starting with an uppercase. Another convention is about the extension. It is by default configured to recognize only jsx files.
5. Use `<> </>` to wrap the html body returned from the jsx script in case multiple elements are included in the body.
6. If `npm run build/start` is not recognizing `react-scripts`, do `npm install` and it will fix the missing links that were already mentioned in the package.json but due to some reason went unrecognized.
7. `React fibre`: An optimized algorithm by react to maintain the virtual DOM through reconciliation of the difference between the two DOMs (trees).
8. `useCallback()` will return a memoized version of the callback that only changes if one of the inputs has changed.
9. `useRef()` returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
10. `useEffect()` accepts a function that contains imperative, possibly effectful code.
11. In `react-router-dom`, `Link` gets the new page (internal routing) and replaces the DOM instead of reloading the page. `<a>` tag should not be used as it would reload the page. Link goes with `To` instead of an `href`. `NavLink` is a special type of Link which is used for navigation items, breadcrumbs and other such use cases where it is important to show the active part/page.
`RouterProvider` tag in main.jsx file takes a `router` as a prop and the prop is of type `createBrowserRouter` which is part of react router dom. The path and the element to load can be defined in the router. The `Layout.jsx` file contains `Outlet` which will create space for child components to be loaded in the parent. `useParams` helps in getting the parameter passed (path variable) in the route.
`loader` attribute in router can call a function asynchronously which returns a promise. This can be done to optimize the API fetching.
12. `Context API`: Context acts like a global storage where components can read and share data without directly passing it around. 
- Why Use Context?
    - Simplifies data sharing between components.
    - Helps avoid “prop drilling” (passing props through many layers).
    - Useful for theming, authentication, and more.

Create `context` folder in `src`. Create `UserContext.js` and get the context from the react's `createContext()`. To get the providers, create `UserContextProvider.jsx`.
In `Login.jsx`, we are trying to set a prop to the `UserContext`. In `Profile.jsx`, we aim to fetch the props using context API that was set in another component.

## Projects
- `01basicreact`: getting minimal react js app created using create-react-app, running in development environment.
- `01vitereact`: getting minimal react js app created using vite bundler, running in development environment.
- `02counter`: A simple react app to update counter to understand the concept of hooks which react uses to update the DOM (created using vite bundler). `useState` is a library that helps in doing this task.
- `03tailwindprops`: A simple react app to understand tailwind and props.
- `04bgChanger`: A simple react app to change background color of the web page.
- `05passwordGenerator`: A simple react app to generate password to understand useEffect, useRef, and useCallback concepts.
- `06currencyConverter`: A simple react app to do conversion from one currency to another. In the process, the project would cover the concept called custom web hooks.
- `07reactRouter`: A simple react app to understand the working of a custom router, react router dom, link and navlink.
- `08miniContext`: A simple react app to understand context API.