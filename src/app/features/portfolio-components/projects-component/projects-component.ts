import { ChangeDetectorRef, Component, inject, HostListener} from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';



interface projects {
  id: number
  titleId: string
  title: string
  codeBase: string
  description: string
  img: string
  github: string
  demo: string
}

@Component({
  selector: 'app-projects-component',
  imports: [TranslatePipe],
  templateUrl: './projects-component.html',
  styleUrl: './projects-component.scss',
  

})
export class ProjectsComponent {
  isMobile: boolean = false;

  ngOnInit() {
  this.checkScreenSize();
}

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize(); 
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth <= 1250;
  }

  private cdr = inject(ChangeDetectorRef);
  visibleProjects = new Map<number, boolean>();
  private hideTimers = new Map<number, ReturnType<typeof setTimeout>>();

  projects: projects[] = [
    {
      id: 1,
      titleId: '01',
      title: 'Join',
      codeBase: 'HTML | CSS | Firebase | JavaScript',
      description: 'PORTFOLIO.1',
      img: 'assets/img/projects/Join.jpg',
      github: 'https://github.com/croser93/Join_Kanban_Manager.git',
      demo: 'https://join.maik-groth.com',
    },
    {
      id: 2,
      titleId: '02',
      title: 'Hellgate Shadowfall',
      codeBase: 'HTML | CSS | JavaScript',
      description: 'PORTFOLIO.2',
      img: 'assets/img/projects/HellgateShadowfall.jpg',
      github: 'https://github.com/croser93/2d-Game.git',
      demo: 'https://hellgate-shadowfall.maik-groth.com',
    },
    {
      id: 3,
      titleId: '03',
      title: 'Code a Cuisine',
      codeBase: 'Angular | TypeScript | Supabase | N8N',
      description: 'PORTFOLIO.3',
      img: 'assets/img/projects/CodeaCuisine.jpg',
      github: 'https://github.com/croser93/Code-a-Cuisine.git',
      demo: 'https://code-a-cuisine.maik-groth.com',
    },
  ]


}
