import {Injectable} from '@angular/core';
import {ExperianceModel} from './experiance.model';
import experianceDetails from '../assets/JSON/experianceDetail.json';

@Injectable({
  providedIn: 'root'
})

export class ExperianceService {
  private experiance: ExperianceModel[] = experianceDetails;

  constructor() {
  }
  getTheExperiances(): ExperianceModel[]{
    return this.experiance;
  }

  getTheExperiance(index): ExperianceModel{
    return  this.experiance[index];
  }

}
