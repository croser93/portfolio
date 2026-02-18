import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

  constructor(private router: Router) {}

  scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  isSubRoute(): boolean {
    return  this.router.url == '/legal-notice' || this.router.url == '/privacy-policy'
  }
}
