# Instructions: Mongo in docker container
## Pull Mongo image from Docker Hub:
```sh
docker pull mongo
```
## Start Mongo inside a docker container:
```sh
docker run --name my-mongo -d -p 27017:27017 mongo:latest
```
## Accessing the docker container's bash:
```sh
docker exec -it dd57e8b40daa bash
```
* `docker exec`: This command allows you to run a command in a running container.
* `-it`: These are options for the exec command.
    * `-i` stands for interactive, which keeps the standard input (stdin) open so you can interact with the shell.
    * `-t` allocates a pseudo-TTY, which creates a terminal session inside the container.
* `dd57e8b40daa`: This is the container ID of the running container you want to access.
* `bash`: This is the command you want to run inside the container, in this case, starting the Bash shell.
## Starting the mongo shell:
```bash
mongosh
```
## Running some mongo shell commands:
```bash
show dbs
```