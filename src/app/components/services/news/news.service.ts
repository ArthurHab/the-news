import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  async getRecentNews(searchTerm: string = 'world'){
    let apiKey = "7b190dc12ce441b5b28cd5a8743cf5fb";

    if(searchTerm.length < 1){
      searchTerm = 'world';
    }

    let data = await fetch(`https://newsapi.org/v2/top-headlines?q=${searchTerm}&apiKey=${apiKey}&sortBy=publishedAt`)
    .then((response) => response.json())
    .then((data) => data.articles)
    .catch(() => console.log('Falha ao tenta se comunicar com a API!'))

    return data;
  }


  constructor() { }
}
