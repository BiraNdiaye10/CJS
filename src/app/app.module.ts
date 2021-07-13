import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { Slider1Component } from './Accueil/slider1/slider1.component';
import { SectionComponent } from './Accueil/section/section.component';
import { Slider2Component } from './Accueil/slider2/slider2.component';
import { CardSliderComponent } from './Accueil/card-slider/card-slider.component';
import { AProposComponent } from './Accueil/a-propos/a-propos.component';
import { TemoignageComponent } from './Accueil/temoignage/temoignage.component';
import { PartenaireComponent } from './Accueil/partenaire/partenaire.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Slider1Component,
    SectionComponent,
    Slider2Component,
    CardSliderComponent,
    AProposComponent,
    TemoignageComponent,
    PartenaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
