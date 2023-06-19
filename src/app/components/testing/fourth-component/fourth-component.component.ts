import { Component } from '@angular/core';
import { PeopleService } from '../services/PeopleService/people.service';
import { Person } from '../Person';

@Component({
  selector: 'app-fourth-component',
  templateUrl: './fourth-component.component.html',
  styleUrls: ['./fourth-component.component.css']
})
export class FourthComponentComponent {
  constructor(
    private peopleService: PeopleService
  ){}

  people: Person[] = [];
  numberOfPeople: number = 1;

  async handleClick(){
   this.people = await this.peopleService.getPeople(this.numberOfPeople);
  }
}
