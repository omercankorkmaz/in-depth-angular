import { Component, OnInit, Optional, Self, SkipSelf } from '@angular/core';
import { DepartmentService } from '../department.service';
import { FacultyService } from '../faculty.service';
import { LoggerService } from '../logger.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dep-one',
  templateUrl: './dep-one.component.html',
  providers: [FacultyService]
})
export class DepOneComponent implements OnInit {

  constructor(
    private userService: UserService,
    @Optional() private departmentService: DepartmentService,
    @Self() private facultyService: FacultyService,
    // @SkipSelf() private facultyService2: FacultyService // NullInjectorError
  ) { 
    userService.sayHi();
    if (departmentService) {
      departmentService.sayHi();
    }
    facultyService.sayHi();
  }

  ngOnInit(): void {
  }

}
