import { Component } from '@angular/core';
import { CounterService } from '../services/CounterService/counter.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  constructor(
    private counterService: CounterService
  ){}

  counter: number = 0;

  incrementar(){
    this.counter = this.counterService.increment(this.counter);
  }

  decrementar(){
    this.counter = this.counterService.decrement(this.counter);
  }

  resetar(){
    this.counter = this.counterService.reset(this.counter);
  }
}
