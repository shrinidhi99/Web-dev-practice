# Run Kafka in docker
## Create a docker-compose.yml File
Create a `docker-compose.yml` file to define the services for Zookeeper and Kafka.
```yaml
version: '3.8'
services:
  zookeeper:
    image: confluentinc/cp-zookeeper:latest
    container_name: zookeeper
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181
      ZOOKEEPER_TICK_TIME: 2000
    ports:
      - "2181:2181"

  kafka:
    image: confluentinc/cp-kafka:latest
    container_name: kafka
    depends_on:
      - zookeeper
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:9092
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1
    ports:
      - "9092:9092"
```
## Start the Services
```sh
docker-compose up -d
```
## Interact with Kafka
### Start a Kafka Producer
```sh
docker exec -it kafka kafka-console-producer --broker-list localhost:9092 --topic test
```
Type some messages into the producer console to send them to the Kafka topic `test`.
### Start a Kafka Consumer
```sh
docker exec -it kafka kafka-console-consumer --bootstrap-server localhost:9092 --topic test --from-beginning
```
You should see the messages you typed in the producer console appear in the consumer console.