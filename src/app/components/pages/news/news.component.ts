import { Component } from '@angular/core';
import { NewsService } from '../../services/news/news.service';
import { News } from '../../News';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  news: News[] = [];
  searchTerm: string = '';
  loadingData: boolean = false;

  async handleClick(){
    this.getNews(this.searchTerm);
  }

  async getNews(searchTerm: string = 'world'){
    this.news = await this.newsService.getRecentNews(searchTerm)
    this.loadingData = false;
  }

  constructor(
    private newsService: NewsService
  ){}

  ngOnInit(){
    this.loadingData = true;
    this.getNews();
  }
}
