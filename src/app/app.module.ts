import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SpecialityComponent } from './speciality/speciality.component';
import { PopularComponent } from './popular/popular.component';
import { StepsComponent } from './steps/steps.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ReviewComponent } from './review/review.component';
import { OrderComponent } from './order/order.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SpecialityComponent,
    PopularComponent,
    StepsComponent,
    GalleryComponent,
    ReviewComponent,
    OrderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
