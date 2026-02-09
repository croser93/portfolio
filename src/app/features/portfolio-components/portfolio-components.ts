import { Component } from '@angular/core';
import { HeroComponents } from './hero-components/hero-components';
import { AboutMeComponents } from "./about-me-components/about-me-components";
import { ContactComponents } from './contact-components/contact-components';
import { SkillsComponents } from './skills-components/skills-components';


@Component({
  selector: 'app-portfolio-components',
  imports: [HeroComponents, AboutMeComponents, ContactComponents, SkillsComponents],
  templateUrl: './portfolio-components.html',
  styleUrl: './portfolio-components.scss',
})
export class PortfolioComponents {

}
