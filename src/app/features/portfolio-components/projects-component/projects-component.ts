import { Component } from '@angular/core';

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
  imports: [],
  templateUrl: './projects-component.html',
  styleUrl: './projects-component.scss',
})
export class ProjectsComponent {

    projects: projects[] = [
    {
      id: 1,
      titleId: '01',
      title: 'Join',
      codeBase: 'HTML | CSS | Firebase | Javascript',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      img: 'assets/img/projects/Join.jpg',
      github: 'https://github.com/croser93/Join_Kanban_Manager.git'
    },
    {
      id: 2,
      titleId: '02',
      title: 'Hellgate Shadowfall',
      codeBase: 'HTML | CSS | Javascript',
      description: 'A simple Jump-and-Run game based on object-oriented approach. Help Elvoron to find coins and mana to fight against the Hellknight.',
      img: 'assets/img/projects/HellgateShadowfall.JPG',
      github: 'https://github.com/croser93/2d-Game.git'
    },
     {
      id: 3,
      titleId: '03',
      title: 'Pokédex',
      codeBase: 'HTML | CSS | Javascript | Api',
      description: 'Based on the PokéAPI a simple libary hat provides and catalogues pokemon information-.',
      img: 'assets/img/projects/pokedex.JPG',
      github: 'https://github.com/croser93/Pokedex.git'
    }
  ]




}
