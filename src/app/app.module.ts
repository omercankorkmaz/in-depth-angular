import { NgModule, Self } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DepOneComponent } from './dep-one/dep-one.component';
import { FacultyService } from './faculty.service';
import { ParentForHostDirective } from './parent-for-host.directive';
import { ChildForHostDirective } from './child-for-host.directive';

@NgModule({
  declarations: [
    AppComponent,
    DepOneComponent,
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
