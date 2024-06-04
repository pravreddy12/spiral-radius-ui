import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-devforum',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './devforum.component.html',
  styleUrl: './devforum.component.css'
})
export class DevforumComponent {
  fullName:string = "";
  email:string = "";
  constructor() {
    this.fullName= "";
    this.email = "";
   
  }
  submit(form: any) {
    console.log(form);
     this.fullName = form.form.value.fullName;
     this.email = form.form.value.email;
    console.log(this.fullName + this.email);
    this.fullName = "";
    this.email = "";
  }

}
