import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'; 

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  activeLanguage: 'en' | 'de' = 'en';
  isMenuOpen = false;
 
    private translate = inject(TranslateService); 
    toggleLanguage(lang: 'en' | 'de') {
    this.activeLanguage = lang;
    this.translate.use(lang); 
  }

  toggleMenuBar(){
  this.isMenuOpen = !this.isMenuOpen;

  }

}
