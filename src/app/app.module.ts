import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { LandingPageComponent } from './module/landing-page/landing-page.component';
import { AboutUsComponent } from './module/about-us/about-us.component';
import { VedicNeutraceuticlesComponent } from './module/vedic-neutraceuticles/vedic-neutraceuticles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OurOfferingsComponent } from './module/our-offerings/our-offerings.component';
import { DonationsComponent } from './module/donations/donations.component';
import { GalleryComponent } from './module/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    AboutUsComponent,
    VedicNeutraceuticlesComponent,
    OurOfferingsComponent,
    DonationsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
