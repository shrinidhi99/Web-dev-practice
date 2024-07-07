### Initialize the project
```sh
npm init -y
```
### Install dependencies
```sh
npm install express ejs
npm install dotenv
```
### Create project structure
```
express-app/
├── views/
│   ├── index.ejs
│   ├── about.ejs
├── public/
│   ├── css/
│   │   └── styles.css
├── .env
├── app.js
└── package.json
```
### Include these in .gitignore
```bash
node_modules
.env
```
### Dockerize
Refer `Dockerfile` to learn more about the steps to dockerize the express application.
```sh
docker build -t my-express-app .
docker run -p 3000:3000 my-express-app
docker login
docker tag my-express-app shrinidhi99/my-express-app:latest
docker push shrinidhi99/my-express-app:latest
docker run -d -p 3000:3000 shrinidhi99/my-express-app:latest
```