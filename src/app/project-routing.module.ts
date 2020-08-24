import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {ProjectPageComponent} from './project-page/project-page.component';
import {ExperiancePageComponent} from './experiance-page/experiance-page.component';
import {ContactMePageComponent} from './contact-me-page/contact-me-page.component';
import {AbilitiesPageComponent} from './abilities-page/abilities-page.component';
import {ProjectDetailsComponent} from './project-details/project-details.component';
import {ExperianceDetailComponent} from './experiance-detail/experiance-detail.component';
import {AboutMeComponent} from './about-me/about-me.component';

const myRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'projects', component: ProjectPageComponent},
  {path: 'experiance', component: ExperiancePageComponent},
  {path: 'contactme', component: ContactMePageComponent},
  {path: 'abilities', component: AbilitiesPageComponent},
  {path: 'aboutme', component: AboutMeComponent},
  {path: 'project/:id', component: ProjectDetailsComponent},
  {path: 'experiance/:id', component: ExperianceDetailComponent},
  {path: '**', redirectTo: 'home'}
]

@NgModule({
    imports: [
      RouterModule.forRoot(myRoutes)
    ],
    exports: [
      RouterModule
    ]
  })

export class ProjectRoutingModule{

}
