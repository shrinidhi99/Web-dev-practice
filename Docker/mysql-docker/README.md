# Instructions: MySQL in docker container
## MySQL workbench
This is a GUI tool to view the MySQL database running at any given host. It is recommended to be installed for better visualization.

## Docker Desktop
This is required in windows machine to run the docker engine and view the images and pull them. It has its own terminal where the commands could be executed.

## MySQL container
### Pull the MySQL Docker Image
First, pull the latest MySQL image from Docker Hub using the following command:
```sh
docker pull mysql:latest
```
### Run the MySQL Container
Start a new MySQL container with the necessary configurations. You need to set the MySQL `root` password and optionally configure other environment variables:
```sh
docker run --name my-mysql-container -e MYSQL_ROOT_PASSWORD=my-password -d -p 3306:3306 mysql:latest
```
Explanation:
* --name my-mysql-container: Names the container "my-mysql-container".
* -e MYSQL_ROOT_PASSWORD=my-password: Sets the MySQL root password to "my-password".
* -d: Runs the container in detached mode (in the background).
* -p 3306:3306: Maps port 3306 on the host to port 3306 on the container.
### Verify the MySQL Container is Running:
You should see your MySQL container listed.
```sh
docker ps
```
### Connect to the MySQL Container:
You can connect to the MySQL server running in the container using a MySQL client on your host machine. For example:
```sh
mysql -h 127.0.0.1 -P 3306 -u root -p
```
Enter the password my-password when prompted.
### Configure MySQL Container:
You can configure additional settings and environment variables for the MySQL container. Here are some common ones:
* MYSQL_DATABASE: Creates a database with the specified name.
* MYSQL_USER: Creates a new user.
* MYSQL_PASSWORD: Sets the password for the new user. Example:
```sh
docker run --name my-mysql-container -e MYSQL_ROOT_PASSWORD=my-password -e MYSQL_DATABASE=mydatabase -e MYSQL_USER=myuser -e MYSQL_PASSWORD=mypassword -d -p 3306:3306 mysql:latest
```
### View the database and create a table
```sql
use mydatabase;

show tables;

CREATE TABLE test_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO test_table (name) VALUES ('Sample Name 1'), ('Sample Name 2');

SELECT * FROM test_table;
```
### Stop the container
```sh
docker stop my-mysql-container
```
## Steps to Ensure Data Persistence Using Docker Volumes
If you want to ensure that your data persists even if the container is removed and a new one is created, you should use Docker volumes. Here's how you can modify your Docker run command to use a volume:
### Create a Volume (if you haven't already):
```sh
docker volume create my-mysql-data
```
### Run the Container with a Volume:
```sh
docker run --name my-mysql-container -e MYSQL_ROOT_PASSWORD=my-password -e MYSQL_DATABASE=mydatabase -e MYSQL_USER=myuser -e MYSQL_PASSWORD=mypassword -v my-mysql-data:/var/lib/mysql -d -p 3306:3306 mysql:latest
```
By specifying the `-v my-mysql-data:/var/lib/mysql` option, Docker will mount the `my-mysql-data` volume to the `/var/lib/mysql` directory in the container, where MySQL stores its data. This ensures that the data is stored on your local machine and persists even if the container is removed.
### Run a New Container with the Same Volume:
```sh
docker run --name my-mysql-container -e MYSQL_ROOT_PASSWORD=my-password -e MYSQL_DATABASE=mydatabase -e MYSQL_USER=myuser -e MYSQL_PASSWORD=mypassword -v my-mysql-data:/var/lib/mysql -d -p 3306:3306 mysql:latest
```
### To persist the volumne outside the lifecycle of a docker container:
```sh
docker run --name my-mysql-container -e MYSQL_ROOT_PASSWORD=my-password -d -p 3306:3306 -v C:/local-docker-volumes/mysql-data:/var/lib/mysql mysql:latest
```
The directory should be created before binding it to a docker volume.

## Sakila DB
Create a docker container with Sakila DB imported for use in sample projects:
1. Download Sakila DB from the [official MySQL website](https://dev.mysql.com/doc/index-other.html)
2. Extract the zip file and place it in a directory.
3. Start a docker container with mounted volume and port exposed at 3306 with the official docker image of MySQL.
```sh
docker run --name my-mysql-sakila -e MYSQL_ROOT_PASSWORD=my-password -d -p 3306:3306 -v C:\data\mysql-sakila-data:/var/lib/mysql mysql:latest
```
4. Copy the files to docker container.
```sh
docker cp C:\data\sakila-db\sakila-schema.sql <container-id>:/tmp
docker cp C:\data\sakila-db\sakila-data.sql <container-id>:/tmp
```
5. Verify the files within the docker container.
```sh
docker exec -it <container-id> bash
```
6. Import sakila files into the mysql db. Provide the root password of the container when prompted.
```sh
mysql -u root -p < /tmp/sakila-schema.sql
mysql -u root -p < /tmp/sakila-data.sql
```
7. Open the database in MySQL workbench and run some queries to verify the import.
```sql
use sakila;
select count(*) from actor;
```
