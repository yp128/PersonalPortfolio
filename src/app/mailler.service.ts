import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaillerService {

  constructor(private http: HttpClient) { }

  sendEmail(url, body): any {
    return this.http.post(url, body);
  }

  sendConfEmail(url, body): any {
    return this.http.post(url, body);
  }
}
