import {Component, Input} from '@angular/core';
import {ProjectsModel} from '../../projects.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})

export class ProjectCardComponent {
  @Input() projectDetails: ProjectsModel;
  @Input() index: number;

  constructor(public router: Router) {
  }
  getTheProjectDetail(): void{
   this.router.navigate(['/project', this.index]);
  }
}
