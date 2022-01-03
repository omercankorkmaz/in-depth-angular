import { Component, OnInit } from '@angular/core';
import { GalleryLoggerService } from '../gallery-logger.service';

@Component({
  selector: 'app-gallery-slide',
  template: `
    <p>I AM SLIDE</p>
  `
})
export class GallerySlideComponent implements OnInit {

  constructor(private galleryLogger: GalleryLoggerService) { }

  ngOnInit(): void {
    this.galleryLogger.log('hi from gallery slide');
  }

}
