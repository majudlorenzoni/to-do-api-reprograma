import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Oi! Deu tudo certo na instalação do NestJS!';
  }
}
