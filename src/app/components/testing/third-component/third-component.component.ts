import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-third-component',
  templateUrl: './third-component.component.html',
  styleUrls: ['./third-component.component.css']
})
export class ThirdComponentComponent {
  @Output() clearData: EventEmitter<any> = new EventEmitter();

  @Input() nameReceived: string = '';
  @Input() ageReceived: number = 0;

  handleClick(){
    this.clearData.emit();
  }
}
