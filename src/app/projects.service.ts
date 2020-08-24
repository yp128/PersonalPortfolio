import {Injectable} from '@angular/core';
import {ProjectsModel} from './projects.model';
import projects from '../assets/JSON/projectsDetail.json';

export class ProjectsService {

  private projectList: ProjectsModel[] = projects;
  newProjectArray: ProjectsModel[];
  checkIt: string[];

  getMyProjects(): ProjectsModel[]{
    return this.projectList;
  }
  getMyProject(index): ProjectsModel{
    return this.projectList[index];
  }

  getSelectedProjects(value): ProjectsModel[]{
    this.newProjectArray = projects.filter((project) => {
      this.checkIt = project.type;
      console.log(this.checkIt);
      return this.checkIt.includes(value);
    });
    return this.newProjectArray;
  }

}
