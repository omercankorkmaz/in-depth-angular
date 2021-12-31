import { NgModule, Self } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FacultyService } from './faculty.service';
import { ParentForHostDirective } from './parent-for-host.directive';
import { ChildForHostDirective } from './child-for-host.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParentForHostDirective,
    ChildForHostDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [/*FacultyService*/],
  bootstrap: [AppComponent]
})
export class AppModule {
/*
  constructor(@Self() private facultyService: FacultyService) { 
    facultyService.sayHi();
  }
*/
}
