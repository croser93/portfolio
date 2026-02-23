import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-components',
  imports: [TranslatePipe],
  templateUrl: './hero-components.html',
  styleUrl: './hero-components.scss',
})
export class HeroComponents {

}
