import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  resumeView = false;
  title = 'View Resume';

  constructor() {
  }

  ngOnInit(): void {
  }

  showResume(): void {
    this.resumeView = !this.resumeView;

    if (this.resumeView === false) {
      this.title = 'View Resume';
    } else {
      this.title = 'Hide Resume';
    }
  }

}
