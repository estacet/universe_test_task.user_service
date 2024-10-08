import { Injectable } from '@nestjs/common';
import { SqsService } from '@ssut/nestjs-sqs';
import { v4 as uuidv4 } from 'uuid';
import { ConfigService } from '@nestjs/config';
import { MessageAttributeValue } from '@aws-sdk/client-sqs';

@Injectable()
export class MessageProducer {
  constructor(
    private readonly sqsService: SqsService,
    private readonly configService: ConfigService,
  ) {}

  public async sendMessage(body: any, headers?: { [key: string]: string }) {
    const queueName = this.configService.get('QUEUE_NAME');
    await this.sqsService.send(queueName, {
      id: uuidv4(),
      body: JSON.stringify(body),
      messageAttributes: {
        'X-Delay': {
          DataType: 'Number',
          StringValue: headers['X-Delay'] || '0',
        } as MessageAttributeValue,
      },
    });
  }
}
