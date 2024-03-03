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
In `app.js`, delete the portions related to App.css, logo and the App() rendering of <div>. Add a simple <h1> for now.