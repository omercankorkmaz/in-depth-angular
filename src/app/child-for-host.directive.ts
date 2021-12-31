import { Directive, Host } from '@angular/core';
import { LoggerService } from './logger.service';

@Directive({
  selector: '[appChildForHost]'
})
export class ChildForHostDirective {

  constructor(@Host() private loggerService: LoggerService) {
    loggerService.log('hello from child directive, logger service')
  }

}
