DI:         using a class without creating an instance of it
injector;   creates an instance of class
            injects into constructor

Module Injector - Element Injector
Root              GrandChild Comp
Platform          Child Comp
Null              Root Comp

first angular   looks at element inj tree, not found:
                looks at module inj tree, not found;
                got an error

Use Injector for a service:

    providers: [UserService] in App Module

OR

    @Injectable({
    providedIn: 'root'
    })
    export class UserService {}

-----------------------------------------------------------------------------------

resolution modifiers:

@Optional():  
            export class DepartmentService {}


            constructor(private departmentService: DepartmentService) {
                departmentService.sayHi();
            }

            NullInjectorError

            ------------------------------------------------------------------------

            export class DepartmentService {}


            constructor(@Optional() private departmentService: DepartmentService) {
                departmentService.sayHi();
            }

            cannot read sayHi of null


@Self():

looks only in current injector

            @Injectable({
                providedIn: 'root'
            })
            export class FacultyService {}


            constructor(@Self() private facultyService: FacultyService) {
                facultyService.sayHi();
            }

            No provider for FacultyService found in NodeInjector.

            ------------------------------------------------------------------------

            export class FacultyService {}


            @Component({
                ...
                providers: [FacultyService]
            })
            constructor(@Self() private facultyService: FacultyService) {
                facultyService.sayHi();
            }
            

@SkipSelf():

opposite of @Self()
skip the current injector - look for it only in tree



@Host():

    restricts the scope of service: html

    not look for current components providers
    only look for parent divs


-----------------------------------------------------------------------------------

DI:         using a class without creating an instance of it
injector;   creates an instance of class
            injects into constructor

Module Injector - Element Injector
Root              GrandChild Comp
Platform          Child Comp
Null              Root Comp

first angular   looks at element inj tree, not found:
                looks at module inj tree, not found;
                got an error

Use Injector for a service:

    providers: [UserService] in App Module

OR

    @Injectable({
    providedIn: 'root'
    })
    export class UserService {}

-----------------------------------------------------------------------------------

resolution modifiers:

@Optional():  
            export class DepartmentService {}


            constructor(private departmentService: DepartmentService) {
                departmentService.sayHi();
            }

            NullInjectorError

            ------------------------------------------------------------------------

            export class DepartmentService {}


            constructor(@Optional() private departmentService: DepartmentService) {
                departmentService.sayHi();
            }

            cannot read sayHi of null


@Self():

looks only in current injector

            @Injectable({
                providedIn: 'root'
            })
            export class FacultyService {}


            constructor(@Self() private facultyService: FacultyService) {
                facultyService.sayHi();
            }

            No provider for FacultyService found in NodeInjector.

            ------------------------------------------------------------------------

            export class FacultyService {}


            @Component({
                ...
                providers: [FacultyService]
            })
            constructor(@Self() private facultyService: FacultyService) {
                facultyService.sayHi();
            }
            

@SkipSelf():

opposite of @Self()
skip the current injector - look for it only in tree



@Host():

    restricts the scope of service: html

    not look for current components providers
    only look for parent divs


-----------------------------------------------------------------------------------

