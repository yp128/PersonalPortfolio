import { Component, OnInit } from '@angular/core';

import { ProjectsModel } from '../projects.model';
import projects from '../../assets/JSON/projectsDetail.json';
import {ProjectsService} from '../projects.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent {
    projectData: ProjectsModel[];


    constructor(public projectsService: ProjectsService) {
      this.projectData = projectsService.getMyProjects();
    }
    getProjects(value= 'all'): void{
      this.projectData = this.projectsService.getSelectedProjects(value);
      console.log(this.projectData);
    }
}
