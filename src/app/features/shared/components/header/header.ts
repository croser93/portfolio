import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  activeLanguage: 'en' | 'de' = 'en';
  isMenuOpen = false;


  toggleLanguage(lang: 'en' | 'de') {
  this.activeLanguage = lang;
  console.log(`Language switched to: ${lang}`);
  }

  toggleMenuBar(){
  this.isMenuOpen = !this.isMenuOpen;

  }

}
