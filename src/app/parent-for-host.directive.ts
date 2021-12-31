import { Directive } from '@angular/core';
import { LoggerService } from './logger.service';

@Directive({
  selector: '[appParentForHost]',
  providers: [LoggerService]
})
export class ParentForHostDirective {

  constructor() { }

}
