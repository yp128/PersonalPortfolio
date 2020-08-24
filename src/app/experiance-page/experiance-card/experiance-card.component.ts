import {Component, Input} from '@angular/core';
import {ExperianceModel} from '../../experiance.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-experiance-card',
  templateUrl: './experiance-card.component.html',
  styleUrls: ['./experiance-card.component.css']
})

export class ExperianceCardComponent {
  @Input() experiance: ExperianceModel;
  @Input() index: number;

  constructor(public router: Router) {
  }

  getExperianceDetail(): void{
    this.router.navigate(['/experiance', this.index]);
  }
}
