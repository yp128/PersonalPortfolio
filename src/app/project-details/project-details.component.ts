import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import {ProjectsModel} from '../projects.model';
import {ProjectsService} from '../projects.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  id: number;
  projectDetail: ProjectsModel;
  color = ['lightblue', 'red', 'green'];
  randomColor = Math.floor(Math.random() * this.color.length);
  constructor(public route: ActivatedRoute,
              public projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.projectDetail = this.projectsService.getMyProject(this.id);
    console.log(this.projectDetail);
  }

}
