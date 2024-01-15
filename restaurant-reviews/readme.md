## Restaurant Reviews App

### Tech Stack:
* Backend: Node JS
    * Node v16.15.1
* Database: Mongo Atlas (Cloud hosting)

### Steps:
* Create the root project folder `restaurant-reviews`
* Create subfolder `backend`
    ```sh
    mkdir backend
    cd backend
    npm init -y
    ```
* Install the following packages:
    ```sh
    npm install express cors mongodb dotenv
    ```
* For local development which involves file changes and re-deployment, install nodemon:
    ```sh
    npm install nodemon
    ```
* In `package.json`, add the following line to be able to use import statements from es6:
    ```json
    "type" : "module",
    ```
* Add a `.gitignore` file to exclude node modules and all other folders that should not be committed to version control systems GitHub.
* Create `server.js` in `backend/` and import all the modules that are required for the functioning of the backend application.
* Use the routes of the `restaurants` module for routing the requests and any request that doesn't match the mapping needs to be handled using a response.
* Export the app as a module
* Create a `.env` file for storing some environment variables.
* Create `index.js` to connect to the database and start the server
    ```js
    // connect to Mongo DB Atlas
    MongoClient.connect(process.env.RESTREVIEWS_DB_URI)
    .catch(
        err => {
            console.error(err.stack);
            process.exit(1);
        }
    )
    .then(
        async client => {
            app.listen(port, () => {
                console.log(`listening on port ${port}`);
            });
        }
    )
    ```
* Create `restaurants.route.js` in `backend/api/` and export it as a module.
* Run the app:
    ```sh
    nodemon server
    ```
* For data access objects, create a subfolder called `dao/`.
