import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/testing/first-component/first-component.component';
import { SecondComponentComponent } from './components/testing/second-component/second-component.component';
import { ThirdComponentComponent } from './components/testing/third-component/third-component.component';
import { FourthComponentComponent } from './components/testing/fourth-component/fourth-component.component';
import { FifthComponentComponent } from './components/testing/fifth-component/fifth-component.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { BaseComponent } from './components/layout/base/base.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { NewsComponent } from './components/pages/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    ThirdComponentComponent,
    FourthComponentComponent,
    FifthComponentComponent,
    HomeComponent,
    HeaderComponent,
    BaseComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
