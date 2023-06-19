import { Component } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent {
  name: string = '';
  age: number = 0;

  onClearData(){
    this.name = '';
    this.age = 0;
  }
}
