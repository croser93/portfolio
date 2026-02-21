import { ChangeDetectorRef, Component, inject, HostListener} from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { trigger, transition, style, animate } from '@angular/animations';


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
  animations: [
  trigger('fadeAnimation', [
    transition(':enter', [
      // Hier wird der komplette String eingefügt (z.B. 'translateX(-150px)')
      style({ opacity: 0, transform: '{{ startTransform }}' }), 
      animate('400ms ease-out', style({ opacity: 1, transform: 'translate(0,0)' }))
    ], { params: { startTransform: 'translateX(-150px)' } }), // Standardwert

    transition(':leave', [
      animate('600ms ease-in', style({ opacity: 0, transform: '{{ endTransform }}' }))
    ], { params: { endTransform: 'translateX(-80px)' } })
  ])
]

})
export class ProjectsComponent {
  isMobile: boolean = false;

  ngOnInit() {
  this.checkScreenSize(); // Das hier muss in den ngOnInit!
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

  isVisible(id: number): boolean {
    return this.visibleProjects.get(id) ?? false;
  }

  onMouseEnter(id: number): void {
    const existing = this.hideTimers.get(id);
    if (existing) {
      clearTimeout(existing);
      this.hideTimers.delete(id);
    }
    this.visibleProjects.set(id, true);
  }

  onMouseLeave(id: number): void {
    const timer = setTimeout(() => {
      this.visibleProjects.set(id, false);
      this.hideTimers.delete(id);
      this.cdr.markForCheck();
    }, 5000);
    this.hideTimers.set(id, timer);
  }


  projects: projects[] = [
    {
      id: 1,
      titleId: '01',
      title: 'Join',
      codeBase: 'HTML | CSS | Firebase | JavaScript',
      description: 'PORTFOLIO.1',
      img: 'assets/img/projects/Join.jpg',
      github: 'https://github.com/croser93/Join_Kanban_Manager.git',
      demo: 'https://google.de',
    },
    {
      id: 2,
      titleId: '02',
      title: 'Hellgate Shadowfall',
      codeBase: 'HTML | CSS | JavaScript',
      description: 'PORTFOLIO.2',
      img: 'assets/img/projects/HellgateShadowfall.jpg',
      github: 'https://github.com/croser93/2d-Game.git',
      demo: 'https://google.de',
    },
    {
      id: 3,
      titleId: '03',
      title: 'Pokédex',
      codeBase: 'HTML | CSS | JavaScript | Api',
      description: 'PORTFOLIO.3',
      img: 'assets/img/projects/pokedex.jpg',
      github: 'https://github.com/croser93/Pokedex.git',
      demo: 'https://google.de',
    }
  ]


}
