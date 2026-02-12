import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-components',
  imports: [FormsModule],
  templateUrl: './contact-components.html',
  styleUrl: './contact-components.scss',
})
export class ContactComponents {
 
  contactData = {
    name: "",
    email: "",
    message: "",

  }

  onSubmit(){
    console.log(this.contactData)
  }

}
