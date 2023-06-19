import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  increment(counter: number){
    return counter + 1;
  }

  decrement(counter: number){
    return counter - 1;
  }

  reset(counter: number){
    return counter = 0;
  }
  constructor() { }
}
