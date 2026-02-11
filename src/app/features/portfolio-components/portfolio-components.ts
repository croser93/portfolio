import { Component } from '@angular/core';
import { HeroComponents } from './hero-components/hero-components';
import { AboutMeComponents } from "./about-me-components/about-me-components";
import { ContactComponents } from './contact-components/contact-components';
import { SkillsComponents } from './skills-components/skills-components';
import { Header } from '../shared/components/header/header';
import { ProjectsComponent } from './projects-component/projects-component';
import { ReferencesComponents } from './references-components/references-components';


@Component({
  selector: 'app-portfolio-components',
  imports: [HeroComponents, AboutMeComponents, ContactComponents, SkillsComponents, ProjectsComponent ,ReferencesComponents ,Header],
  templateUrl: './portfolio-components.html',
  styleUrl: './portfolio-components.scss',
})
export class PortfolioComponents {
}
