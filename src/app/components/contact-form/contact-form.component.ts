import { Component,OnInit } from '@angular/core';
import { FormArray,FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit{
 

  contactForm!: FormGroup;
  submitted: boolean = false;
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
        Validators.email
      ]),
      phone: new FormControl(this.contactdetails.phone, [
        Validators.required,
        Validators.minLength(10),
        Validators.minLength(12),
      ]),
      company: new FormControl(this.contactdetails.company, [
        Validators.required
      ]),
      business: new FormControl(this.contactdetails.business, [
      Validators.required]),
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
    this.submitted = true;

    if (this.contactForm.valid) {
      
      let alerttxt = this.name?.value+" Thank you for contacting us!\n Following are your details : \n"+
      "Phone : "+this.phone?.value+"\n"+
      "Email : "+this.email?.value+"\n"+
      "Company : "+this.company?.value+"\n"+
      "Business details : "+this.business?.value+"\n";
      alert(
        alerttxt
      );
      console.log(this.contactForm.value);
    }else{
      alert("Please correct errors and retry");
    }
  }
}
