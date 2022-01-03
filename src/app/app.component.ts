import { Component } from '@angular/core';
import { GalleryLoggerService } from './gallery-logger.service';
import { GallerySlideLoggerService } from './gallery-slide-logger.service';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <app-gallery>
        <app-gallery-slide></app-gallery-slide>
        <app-gallery-slide></app-gallery-slide>
      </app-gallery>
    </main>
  `,
  providers: [
    { provide: GalleryLoggerService, useExisting: GallerySlideLoggerService },
  ]
})
export class AppComponent {
  title = 'adv';
}
