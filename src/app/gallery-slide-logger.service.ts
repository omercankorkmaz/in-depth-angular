import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root'
})
export class GallerySlideLoggerService implements Logger {
  private _prefix = 'Gallery Slide Logger';

  log(msg: string): void {
    console.log(`${this._prefix}: ${msg}`)
  }
}
