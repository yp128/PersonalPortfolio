import { Component, OnInit } from '@angular/core';
import {ExperianceModel} from '../experiance.model';
import {ExperianceService} from '../experiance.service';

@Component({
  selector: 'app-experiance-page',
  templateUrl: './experiance-page.component.html',
  styleUrls: ['./experiance-page.component.css']
})
export class ExperiancePageComponent implements OnInit {

  experiances: ExperianceModel[];
  constructor(public experianceService: ExperianceService) { }

  ngOnInit(): void {
    this.experiances = this.experianceService.getTheExperiances();
    console.log(this.experiances);
  }

}
