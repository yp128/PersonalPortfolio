import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ExperiancePageComponent } from './experiance-page/experiance-page.component';
import { ContactMePageComponent } from './contact-me-page/contact-me-page.component';
import { AbilitiesPageComponent } from './abilities-page/abilities-page.component';
import {ProjectRoutingModule} from './project-routing.module';
import {ProjectCardComponent} from './project-page/project-card/project-card.component';
import {ProjectsService} from './projects.service';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import {ExperianceCardComponent} from './experiance-page/experiance-card/experiance-card.component';
import {ExperianceService} from './experiance.service';
import { ExperianceDetailComponent } from './experiance-detail/experiance-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaillerService} from './mailler.service';
import {HttpClientModule} from '@angular/common/http';
import { AboutMeComponent } from './about-me/about-me.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    ProjectPageComponent,
    ExperiancePageComponent,
    ExperianceCardComponent,
    ContactMePageComponent,
    AbilitiesPageComponent,
    ProjectCardComponent,
    ProjectDetailsComponent,
    ExperianceDetailComponent,
    AboutMeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ProjectRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ProjectsService,
    ExperianceService,
    MaillerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
