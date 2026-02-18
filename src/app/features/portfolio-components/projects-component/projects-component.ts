import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface projects {
      id: number
      titleId: string
      title: string
      codeBase: string
      description: string
      img: string
      github: string
}

@Component({
  selector: 'app-projects-component',
  imports: [TranslatePipe],
  templateUrl: './projects-component.html',
  styleUrl: './projects-component.scss',
})
export class ProjectsComponent {

    projects: projects[] = [
    {
      id: 1,
      titleId: '01',
      title: 'Join',
      codeBase: 'HTML | CSS | Firebase | JavaScript',
      description: 'PORTFOLIO.1',
      img: 'assets/img/projects/Join.jpg',
      github: 'https://github.com/croser93/Join_Kanban_Manager.git'
    },
    {
      id: 2,
      titleId: '02',
      title: 'Hellgate Shadowfall',
      codeBase: 'HTML | CSS | JavaScript',
      description: 'PORTFOLIO.2',
      img: 'assets/img/projects/HellgateShadowfall.jpg',
      github: 'https://github.com/croser93/2d-Game.git'
    },
     {
      id: 3,
      titleId: '03',
      title: 'Pokédex',
      codeBase: 'HTML | CSS | JavaScript | Api',
      description: 'PORTFOLIO.3',
      img: 'assets/img/projects/pokedex.jpg',
      github: 'https://github.com/croser93/Pokedex.git'
    }
  ]




}
