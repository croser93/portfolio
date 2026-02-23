import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-privat-policy',
  imports: [TranslatePipe],
  templateUrl: './privat-policy.html',
  styleUrl: './privat-policy.scss',
})
export class PrivatPolicy {
    ngOnInit() {
    window.scrollTo(0, 0);
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);}

}
