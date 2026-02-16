import { Component,} from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-about-me-components',
  imports: [TranslatePipe],
  templateUrl: './about-me-components.html',
  styleUrl: './about-me-components.scss',
})
export class AboutMeComponents {

}
