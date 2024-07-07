# Instructions: Postgresql in docker container
## Pull postgresql image from Docker Hub:
```sh
docker pull postgres
```
## Run postgresql database inside a docker container:
```sh
docker run --name my-postgres -p 5432:5432 -e POSTGRES_PASSWORD=my-password -d postgres
```
## Test connection
Install DBeaver which supports multiple databases as a GUI.
Open a postgresql connection.
Provide root user credentials for the postgresql database running inside the container. It is also exposed at localhost:5432.
Execute some commands in the database and verify if everything is working as expected.

## Mount and bind a volume
```sh
docker run --name my-postgres -p 5432:5432 -e POSTGRES_PASSWORD=my-password -v C:/local-docker-volumes/postgresql-data:/var/lib/postgresql/data -d postgres:latest
```
Binding a local persistance storage created in location `C:/local-docker-volumes/postgresql-data` to the docker container to store data.