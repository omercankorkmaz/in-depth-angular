import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
  // declares that this service should be created
  // by the root application injector.
})
export class UserService {

  constructor() { }

  sayHi() {
    console.log('hello from user service');
  }
}
