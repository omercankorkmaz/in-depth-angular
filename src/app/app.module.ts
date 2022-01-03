import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserReporterService } from './browser-reporter.service';
import { EngagingReporterService } from './engaging-reporter.service';
import { REPORTERS } from './reporter.token';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    { provide: REPORTERS, useExisting: BrowserReporterService, multi: true },
    { provide: REPORTERS, useExisting: EngagingReporterService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
