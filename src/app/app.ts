import { Component, signal, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateService, TranslatePipe, TranslateDirective } from "@ngx-translate/core";
import { Header } from './features/shared/components/header/header';
import { Footer } from './features/shared/components/footer/footer';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, TranslatePipe, TranslateDirective, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');

     private translate = inject(TranslateService);
        constructor() {
        this.translate.addLangs(['de', 'en']);
        this.translate.setFallbackLang('en');
        this.translate.use('en');
    }
}
