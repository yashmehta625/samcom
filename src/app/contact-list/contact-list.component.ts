import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from '../contact-service.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contactList: any;

  constructor(private contactService: ContactServiceService) { }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe((res: any) => {
      this.contactList = res.data
    })
  }

  sort(type: string) {
    if (type === 'asc') {
      this.contactList = this.contactList.sort((a: any, b: any) => 0 - (a.first_name > b.first_name ? -1 : 1));
    } else if (type === 'desc') {
      this.contactList = this.contactList.sort((a: any, b: any) => 0 - (a.first_name > b.first_name ? 1 : -1));
    }
  }

  deleteContact(index: number) {
    console.log(index)
    this.contactList.splice(index, 1);
  }

}
