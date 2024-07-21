# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Docker commands:
### Development
Build the Docker image for development:
```sh
docker build -f dev.Dockerfile -t my-react-app-dev .
```
Run the Docker container for development:
```sh
docker run -d -p 5173:5173 my-react-app-dev
```

### Production
Build the Production Docker Image:
```sh
docker build -t my-react-app .
```
Run the Production Docker Container:
```sh
docker run -d -p 80:80 my-react-app
```