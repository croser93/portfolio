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

  mailSent = false;
  isSending = false;

  post = {
    endPoint: '/api/sendMail',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'text' as 'json',
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.isSending) {
      this.isSending = true;
      this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
          next: (response) => {
            this.isSending = false;
            this.showSuccessFeedback(ngForm);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    }
  }

  showSuccessFeedback(ngForm: NgForm) {
    this.mailSent = true;
    setTimeout(() => {
      this.mailSent = false;
      ngForm.resetForm();
    }, 4000);
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
