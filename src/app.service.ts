import { Injectable } from '@nestjs/common';
// Dependency Injection
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello From Success Coaches Call';
  }
}
