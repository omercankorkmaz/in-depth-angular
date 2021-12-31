import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AppConfig, APP_CONFIG } from './config.token';
import { Logger } from './logger';
import { WebLoggerService } from './web-logger.service';

@Injectable({
  providedIn: 'root'
})
export class MobileLoggerService implements Logger {
/*
  constructor(@Inject(APP_CONFIG) private config: AppConfig) { 
    console.log(config);
  }
*/

  constructor(private http: HttpClient) {
    // console.log(http.get('http://www.google.com').subscribe(res => console.log(res)))
  }

  prefix = 'mobile-logger';

  log() {
    console.log(`prefix: ${this.prefix}`);
  }

}
