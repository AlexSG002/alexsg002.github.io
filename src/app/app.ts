import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Language } from './language';
import { translations } from './translations';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portfolio');

  language = signal<Language>((localStorage.getItem('language') as Language) || 'es');

  translations = translations;

  get t() {
    return this.translations[this.language()];
  }

  changeLanguage(): void {
    const newLanguage: Language = this.language() === 'es' ? 'en' : 'es';

    this.language.set(newLanguage);

    localStorage.setItem('language', newLanguage);
  }
}
