import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { AppConfig, APP_CONFIG } from './config.token';
import { LegacyLogger } from './legacy-logger';
import { MobileLoggerService } from './mobile-logger.service';
import { WebLoggerService } from './web-logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // providers: [
  //   MobileLoggerService,  
  //   {
  //     provide: WebLoggerService,
  //     useClass: MobileLoggerService
  //   }
  // ]

  // providers: [{
  //     provide: WebLoggerService,
  //     useClass: MobileLoggerService
  // }]

  // providers: [{
  //     provide: WebLoggerService,
  //     useValue: LegacyLogger
  // }]

  providers: [{
      provide: WebLoggerService,
      useFactory: (config: AppConfig, http: HttpClient) => {
        return config.experimentalEnabled ? new MobileLoggerService(http) : new WebLoggerService()
      },
      deps: [APP_CONFIG, HttpClient]
  }]
})
export class AppComponent {
  title = 'adv';

  constructor(
    private mobileLoggerService: MobileLoggerService,
    private webLoggerService: WebLoggerService
  ) {
    this.mobileLoggerService.log();  // prefix: mobile-logger
    this.webLoggerService.log()      // prefix: mobile-logger (useClass: MobileLoggerService)
                                // prefix: legacy-logger (useValue: LegacyLogger)
    console.log(this.mobileLoggerService === this.webLoggerService) // useClass -> false
                                                          // useExisting -> true

    console.log(this.webLoggerService);
                                                          
  }
}
