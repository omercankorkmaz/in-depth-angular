import { Component, Injector } from '@angular/core';
import { BrowserReporterService } from './browser-reporter.service';
import { APP_CONFIG } from './config.token';
import { EngagingReporterService } from './engaging-reporter.service';
import { LegacyLogger } from './legacy-logger';
import { MobileLoggerService } from './mobile-logger.service';
import { REPORTERS } from './reporter.token';
import { WebLoggerService } from './web-logger.service';

function loggerFactory(injector: Injector): MobileLoggerService | WebLoggerService {
  return  injector.get(APP_CONFIG).experimentalEnabled ? 
          injector.get(MobileLoggerService) : 
          injector.get(WebLoggerService)
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [/*
    { provide: MobileLoggerService },
    { provide: REPORTERS, useExisting: BrowserReporterService, multi: true },
    { provide: REPORTERS, useExisting: EngagingReporterService, multi: true }
  */]
})
export class AppComponent {
  title = 'adv';

  constructor(
    private mobileLoggerService: MobileLoggerService
  ) {
    this.mobileLoggerService.log();                                               
  }
}
