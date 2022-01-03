import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AppConfig, APP_CONFIG } from './config.token';
import { Logger } from './logger';
import { Reporter } from './reporter';
import { REPORTERS } from './reporter.token';
import { WebLoggerService } from './web-logger.service';

@Injectable({
  providedIn: 'root',
})
export class MobileLoggerService implements Logger {

  constructor(
    @Inject(REPORTERS) private reporters: ReadonlyArray<Reporter>
  ) {
  }

  prefix = 'mobile-logger';

  log() {
    this.reporters.forEach(reporter => {
      reporter.report();
    })
    console.log(`prefix: ${this.prefix}`);
  }

}
