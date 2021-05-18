import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/home/header/header.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { ContentComponent } from './components/home/content/content.component';
import { SliderComponent } from './components/home/slider/slider.component';
 

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    SliderComponent,
     
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
