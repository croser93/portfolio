import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  activeLanguage: 'en' | 'de' = 'en';
  isMenuOpen = false;

  private translate = inject(TranslateService);

  constructor() {
    const savedLang = localStorage.getItem('language') as 'en' | 'de';
    if (savedLang) {
      this.activeLanguage = savedLang;
      this.translate.use(savedLang);
    } else {
      this.translate.use(this.activeLanguage);
    }
  }

  toggleLanguage(lang: 'en' | 'de') {
    this.activeLanguage = lang;
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }

  toggleMenuBar() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

}
