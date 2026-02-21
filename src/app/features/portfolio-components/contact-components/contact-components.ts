import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-components',
  imports: [FormsModule, RouterLink, TranslatePipe],
  templateUrl: './contact-components.html',
  styleUrl: './contact-components.scss',
})
export class ContactComponents {

  http = inject(HttpClient)

  contactData = {
    name: "",
    email: "",
    message: "",
    checkBox: "",
  }

  mailTest = false;
  mailSent = false;

  post = {
    endPoint: '/api/sendMail',
    body: (payload: any) => payload,
    options: {
      headers: {
        'Content-Type': 'application/json',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
          next: (response) => {
            this.showSuccessFeedback(ngForm);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log("gesendet" + this.contactData)
      this.showSuccessFeedback(ngForm);
    }
  }

  showSuccessFeedback(ngForm: NgForm) {
    this.mailSent = true;
    setTimeout(() => {
      this.mailSent = false;
      ngForm.resetForm();
    }, 3000);
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
