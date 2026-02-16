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
      name: 'V. Schuster',
      job: 'Team Partner',
      description: 'REFERENCES.1',
    },
        {
      id: 2,
      name: 'V. Schuster',
      job: 'Team Partner',
      description: 'REFERENCES.2',
    },
        {
      id: 3,
      name: 'V. Schuster',
      job: 'Team Partner',
      description: 'REFERENCES.3',
    },
  ]
}
