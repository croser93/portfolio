import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-legal-notice',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {
  ngOnInit() {window.scrollTo(0, 0);
setTimeout(() => {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}, 0);}

}