import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AidService {

  constructor() { }
  getData() { //creating a function and returning an object of infos

    return {
      name:'idriss',
      age:20,
      id:123
    }
  }
}
