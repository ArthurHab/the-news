import { Injectable } from '@angular/core';
import { Person } from '../../Person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  async getPeople(numberOfPeople: number = 1){
    let data: Person[] = [];

    data = await fetch(`https://randomuser.me/api/?results=${numberOfPeople}`)
    .then((response) => response.json())
    .then((data) => data.results)
    .catch(() => console.log("Falha ao tentar se comunicar com a API!"))

    return data;
  }

  constructor() { }
}
