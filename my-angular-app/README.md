# MyAngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Docker file

By copying package.json and running npm install before copying the rest of the code, you ensure that the dependency installation layer is only invalidated if the dependencies themselves change, not when you change your source code.

```Dockerfile
COPY package*.json ./
RUN npm install
COPY . .
```

### Building and deploying the app
```sh
docker build -t my-angular-app .
docker run -p 4000:4000 my-angular-app
```

When you ran the `docker build -t my-angular-app`. command, Docker created an image named `my-angular-app` based on the instructions in your Dockerfile.
When you ran the `docker run -p 4000:4000 my-angular-app` command, Docker started a new container from the `my-angular-app` image. This container runs your Angular application and maps port `4000` on your host machine to port 4000 inside the container, making your app accessible at `http://localhost:4000`.
The Docker Desktop app detected the running container and displayed its details, such as the container name (`peaceful_robinson`), image name (`my-angular-app`), container ID (`76982aa003b0`), and port mapping (`4000:4000`).

### Further steps
```sh
docker start peaceful_robinson # Start the Container
docker stop peaceful_robinson # Stop the Container
docker rm peaceful_robinson # Remove the Container
docker logs peaceful_robinson # View Container Logs
docker inspect peaceful_robinson # Inspect Container Details
docker ps -a # List all the containers including the stopped ones
```

### Additional steps related to publishing the image
```sh
docker tag my-angular-app shrinidhi99/my-angular-app # Tag your local image with your Docker Hub repository
docker push shrinidhi99/my-angular-app # Push the Image to Docker Hub
docker pull shrinidhi99/my-angular-app # Pulling the Image from Docker Hub to the local machine
docker run shrinidhi99/my-angular-app # Running the Image available on docker Hub
```