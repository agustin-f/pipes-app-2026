import { Injectable, signal } from '@angular/core';

export type availableLocale = 'en' | 'fr' | 'es';

@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  private currentLocale = signal<availableLocale>('es');

  constructor() {
    this.currentLocale.set(localStorage.getItem('locale') as availableLocale) ?? 'en';
  }

  get getLocale() {
    return this.currentLocale();
  }

  changeLocale(locale: availableLocale) {
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    window.location.reload();
  }
}
