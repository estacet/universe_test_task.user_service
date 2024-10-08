import { Injectable } from '@nestjs/common';
import { SqsService } from '@ssut/nestjs-sqs';

@Injectable()
export class MessageProducer {
  constructor(private readonly sqsService: SqsService) {}

  //TODO: replace hardcoded queue name and user id
  public async sendMessage(body: any) {
    await this.sqsService.send('my_test_queue', {
      id: 'e5b2d798-3e8c-4e9b-8a5c-d0f3e1b9b8af',
      body: JSON.stringify(body),
    });
  }
}
