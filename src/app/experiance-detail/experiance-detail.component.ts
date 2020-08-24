import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ExperianceService} from '../experiance.service';
import {ExperianceModel} from '../experiance.model';

@Component({
  selector: 'app-experiance-detail',
  templateUrl: './experiance-detail.component.html',
  styleUrls: ['./experiance-detail.component.css']
})
export class ExperianceDetailComponent implements OnInit {

  index: number;
  experianceDetail: ExperianceModel;
  constructor(public routes: ActivatedRoute,
              public experianceService: ExperianceService) { }

  ngOnInit(): void {
    this.routes.params.subscribe((params) => {
      this.index = params['id'];
    })
    this.experianceDetail = this.experianceService.getTheExperiance(this.index);
  }

}
