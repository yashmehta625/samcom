import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  api = 'https://reqres.in/api/';

  constructor(private http: HttpClient) { }

  getContacts(){
    return this.http.get(this.api + 'users');
  }

  createContact(contact: any){
    return this.http.post(this.api + 'users', contact);
  }
}
