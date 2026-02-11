import { Component } from '@angular/core';

interface comment {
      id: number
      name:string 
      job:string 
      description:string 
}

@Component({
  selector: 'app-references-components',
  imports: [],
  templateUrl: './references-components.html',
  styleUrl: './references-components.scss',
})
export class ReferencesComponents {
  humanComments: comment[] = [
    {
      id: 1,
      name: 'V. Schuster',
      job: 'Team Partner',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    },
        {
      id: 1,
      name: 'V. Schuster',
      job: 'Team Partner',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    },
        {
      id: 1,
      name: 'V. Schuster',
      job: 'Team Partner',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    },
  ]
}
