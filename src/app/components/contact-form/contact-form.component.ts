import { Component,OnInit } from '@angular/core';
import { FormArray,FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit{
 

  contactForm!: FormGroup;
  emailValidation: boolean = true;
  phoneValidation: boolean = true;
  contactdetails = {
    name: '',
    email: '',
    phone: '',
    company: '',
    business: '',
  };
  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(this.contactdetails.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl(this.contactdetails.email, [
        Validators.required,
        Validators.minLength(3),
        Validators.minLength(64),
      ]),
      phone: new FormControl(this.contactdetails.phone, [
        Validators.required,
        Validators.minLength(10),
        Validators.minLength(12),
      ]),
      company: new FormControl(this.contactdetails.company, [
        Validators.required,
        Validators.minLength(3),
        Validators.minLength(50),
      ]),
      business: new FormControl(this.contactdetails.business, [
        Validators.required,
        Validators.minLength(3),
        Validators.minLength(50),
      ]),
    });
  }
  get name() {
    return this.contactForm.get('name');
  }
  get phone() {
    return this.contactForm.get('phone');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get company() {
    return this.contactForm.get('company');
  }
  get business() {
    return this.contactForm.get('business');
  }
  onSubmit(): void {
    console.log('Submitted!');
  }
}
