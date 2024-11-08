import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  // templateUrl: './new-contact-form.component.html',
  styleUrl: './new-contact-form.component.scss',
  template: `
    <div class="row">
        <div class="column">
          <form [formGroup]="contactForm" >
            <label for="firstname"> First Name </label>
            <input (keyup)="prettyformupdater()" name="firstname" formControlName="firstName" />
            <label for="age"> Age </label>
            <input (keyup)="prettyformupdater()" name="age" formControlName="age" />
            <label for="telephone"> Telephone </label>
            <input  (keyup)="prettyformupdater()" name="telephone" formControlName="telephone"/>
            <label for="twitter">Twitter </label>
            <input (keyup)="prettyformupdater()" name="twitter" formControlName="twitter"/>
          </form>
          <pre>{{prettyFormValues}}</pre>
          <button (click)="saveContact()">SAVE</button>
        </div>
        <div class="column">
          @if (contactList.length > 0) {
            @for (item of contactList; track item.firstName) {
                <div class="card">

                <p>{{item.firstName}}</p>
                <p>{{item.age}}</p>
                <p>{{item.telephone}}</p>
                <p>{{item.twitter}}</p>
            
                </div>
            }
          }
      </div>

      
  `
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
