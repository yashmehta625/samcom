import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactServiceService } from '../contact-service.service';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.scss']
})
export class ContactCreateComponent implements OnInit {
  imageSrc = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png';

  contactForm = this.fb.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    avatar: ['', Validators.required],
  });
  submitted = false;

  constructor(private fb: FormBuilder, private contactService: ContactServiceService, private router: Router) { }


  ngOnInit(): void {
  }

  onFileChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageSrc = reader.result as string;
      };

    }
  }

  onSubmit() {
    this.submitted = true;
    this.contactService.createContact(this.contactForm.value).subscribe((data: any) => {
      if(data.id){
        alert('Contact Creation Success')
        this.router.navigate(['']);
      }else{
        this.submitted=false
      }
    });
  }

}
