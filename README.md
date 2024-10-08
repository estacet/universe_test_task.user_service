# User Service

## Setup

1. `cp .env.dist .env`
2. `npm i`
3. `docker compose up -d`
4. `npm run prisma:migrate`
5. `docker compose run local-aws awslocal sqs create-queue --queue-name my_test_queue --endpoint-url=http://localstack:4566`
6. `npm run start`

## Useful commands

Run local-aws `docker compose run local-aws bash`

1. Read message from queue `awslocal sqs receive-message --queue-url http://sqs.us-east-1.localhost.localstack.cloud:4566/000000000000/my_test_queue --endpoint-url=http://localstack:4566`
2. Clean queue ` awslocal sqs purge-queue --queue-url http://sqs.us-east-1.localhost.localstack.cloud:4566/000000000000/my_test_queue --endpoint-url=http://localstack:4566`

## Postman collection
You can import [Postman collection](UniverseTest.postman_collection.json) to see available API endpoints.