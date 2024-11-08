import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-contact-form.component.html',
  styleUrl: './new-contact-form.component.scss',
})
export class NewContactFormComponent {
  public firstName: FormControl = new FormControl('');
  public age: FormControl = new FormControl('');
  public telephone: FormControl = new FormControl('');
  public twitter: FormControl = new FormControl('');
  public contactList: {
    firstName:String,
    age:String,
    telephone:String,
    twitter:String,
  }[] = [];
  public contactForm = new FormGroup({
    firstName: this.firstName,
    age: this.age,
    telephone: this.telephone,
    twitter: this.twitter,
  });

  public initialPrettyFormatValue = `
  {
    firstname:'',
    age:'',
    telephone:'',
    twitter:'',
  }`
  public prettyFormValues = this.initialPrettyFormatValue;


  ngOnInit(){
  } 
  prettyformupdater(){
    this.prettyFormValues = `
    {
      firstname:'${this.contactForm.value.firstName}',
      age:'${this.contactForm.value.age}',
      telephone:'${this.contactForm.value.telephone}',
      twitter:'${this.contactForm.value.twitter}',
    }`
  }
  saveContact(){
    this.contactList.push(this.contactForm.getRawValue())
    this.contactForm.reset();
    this.prettyFormValues = this.initialPrettyFormatValue;
  }
  
}
