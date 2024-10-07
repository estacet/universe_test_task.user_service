import * as process from 'node:process';

export const config = {
  port: process.env.PORT || 3003,
  awsRegion: process.env.AWS_REGION,
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  testQueue: process.env.TEST_QUEUE,
  testQueueUrl: process.env.TEST_QUEUE_URL,
};
