import { Component, signal, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateService, TranslatePipe, TranslateDirective } from "@ngx-translate/core";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, TranslatePipe, TranslateDirective],
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
