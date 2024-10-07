# User Service

## Setup

1. `cp .env.dist .env`
2. `npm i`
2. `docker compose up -d`
3. `docker compose run local-aws awslocal sqs create-queue --queue-name my_test_queue --endpoint-url=http://localstack:4566`
4. `npm run start`

## Useful commands

Run local-aws `docker compose run local-aws bash`

1. Read message from queue `awslocal sqs receive-message --queue-url http://sqs.us-east-1.localhost.localstack.cloud:4566/000000000000/my_test_queue --endpoint-url=http://localstack:4566`
2. Clean queue ` awslocal sqs purge-queue --queue-url http://sqs.us-east-1.localhost.localstack.cloud:4566/000000000000/my_test_queue --endpoint-url=http://localstack:4566`
