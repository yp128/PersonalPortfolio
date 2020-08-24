import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MaillerService} from '../mailler.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact-me-page',
  templateUrl: './contact-me-page.component.html',
  styleUrls: ['./contact-me-page.component.css']
})
export class ContactMePageComponent {

  loading = false;
  modal = false;

  constructor(public maillerService: MaillerService,
              public router: Router,
              public http: HttpClient) {
  }

  contactMeForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    message: new FormControl()
  });

  goToHomePage(): void {
    this.router.navigate(['/home']);
  }
  onSubmit(): void {
    this.loading = true;
    const user = {
      name: this.contactMeForm.value.name,
      email: this.contactMeForm.value.email,
      message: this.contactMeForm.value.message
    };

    this.http.post('https://yash-mail.herokuapp.com/sendConfirmMail', user). toPromise().then(
      data => {
        console.log(data);
      }
    ).catch(err => {
      console.log(err.error);
    });

    this.http.post('https://yash-mail.herokuapp.com/sendmail', user). toPromise().then(
      data => {
        console.log(data);
      }
    ).catch(err => {
      console.log(err.error);
    });

  }
}
