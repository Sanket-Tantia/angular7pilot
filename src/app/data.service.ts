import { Injectable } from '@angular/core';

/**
 * Services have injectable decorator
 */
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  clickMe(){
    console.log("I am working from service");
  }
}
