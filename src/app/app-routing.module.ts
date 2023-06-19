import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { NewsComponent } from './components/pages/news/news.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: HomeComponent},
    { path: 'news', component: NewsComponent},
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent}

  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
