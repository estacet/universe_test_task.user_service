import { Module } from '@nestjs/common';
import { MessageProducer } from './producer.service';
import { ConfigService } from '@nestjs/config';
import { SqsModule } from '@ssut/nestjs-sqs';
import { SQSClient } from '@aws-sdk/client-sqs';
import { Credentials } from 'aws-sdk';

@Module({
  imports: [
    SqsModule.registerAsync({
      useFactory: (configService: ConfigService) => {
        return {
          consumers: [],
          producers: [
            {
              name: configService.get('QUEUE_NAME'),
              queueUrl: configService.get('AWS_SQS_QUEUE_URL'),
              sqs: new SQSClient({
                region: configService.get('AWS_REGION'),
                endpoint: configService.get('AWS_SQS_URL'),
                credentials: new Credentials(
                  configService.get('AWS_ACCESS_KEY_ID'),
                  configService.get('AWS_SECRET_ACCESS_KEY'),
                ),
              }),
            },
          ],
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [MessageProducer],
  exports: [MessageProducer],
})
export class ProducerModule {}
