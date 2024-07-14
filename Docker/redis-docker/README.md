# Instructions: Redis in docker container
## Pull Redis image from Docker Hub:
```sh
docker pull redis
```
## Start Redis inside a docker container:
```sh
docker run --name my-redis -d -p 6379:6379 redis:latest
```
## Run redis cli in terminal
```sh
docker exec -it my-redis redis-cli
```
## Setting and getting key value pairs
```sh
set name shrinidhi
get name
```
## Getting all the set keys
```sh
keys *
```
## Getting type of a key's value
```sh
type key_name
```
In Redis, all data is stored as strings at the core level. However, the actual content of these strings can be anything, including serialized binary data. The `get` command retrieves the raw data stored at that key, which in this case is a serialized Java object.