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
      id: 2,
      name: 'V. Schuster',
      job: 'Team Partner',
      description: 'Michi was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals..',
    },
        {
      id: 3,
      name: 'V. Schuster',
      job: 'Team Partner',
      description: 'It was a great pleasure to work with Michael. He knows how to push and encourage team members to present the best work possible, always adding something to brainstorm. Regarding the well-being of group members, he was always present and available to listen and help others, with a great sense of humor as well.',
    },
  ]
}
