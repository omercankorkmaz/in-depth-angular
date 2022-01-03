import { Component, OnInit } from '@angular/core';
import { GalleryLoggerService } from '../gallery-logger.service';

@Component({
  selector: 'app-gallery',
  template: `
    <div>
      <h1>Gallery</h1>
      <div>
        <ng-content #name></ng-content>
      </div>
    </div>
  `,
  viewProviders: [GalleryLoggerService]
})
export class GalleryComponent implements OnInit {

  constructor(private galleryLogger: GalleryLoggerService) { }

  ngOnInit(): void {
    this.galleryLogger.log('hi from gallery');
  }

}
