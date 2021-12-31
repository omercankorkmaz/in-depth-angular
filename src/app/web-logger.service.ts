import { Injectable } from '@angular/core';
import { Logger } from './logger';
import { MobileLoggerService } from './mobile-logger.service';

// @Injectable({
//   providedIn: 'root',
//   useClass: MobileLoggerService
// })
@Injectable()
export class WebLoggerService implements Logger {

  constructor() { }

  prefix = 'web-logger';

  log() {
    console.log(`prefix: ${this.prefix}`);
  }

}
