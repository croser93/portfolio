import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface comment {
      id: number
      name:string 
      job:string 
      description:string 
}

@Component({
  selector: 'app-references-components',
  imports: [TranslatePipe],
  templateUrl: './references-components.html',
  styleUrl: './references-components.scss',
})
export class ReferencesComponents {
  humanComments: comment[] = [
    {
      id: 1,
      name: 'Leon G Leuning',
      job: 'Team Partner',
      description: 'REFERENCES.2',
    },
        {
      id: 2,
      name: 'Lucas Graf',
      job: 'Team Partner',
      description: 'REFERENCES.1',
    },
        {
      id: 3,
      name: 'V. Schuster',
      job: 'Team Partner',
      description: 'REFERENCES.3',
    },
  ]
  
  currentIndex = 1
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.humanComments.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.humanComments.length) % this.humanComments.length;
  }

  setSlide(index: number) {
    this.currentIndex = index;
  }
}
