import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { interval } from 'rxjs';
import { availableLocale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html',
  styleUrl: './basic-page.css',
})
export default class BasicPage {
  localService = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID));

  nameLower = signal('agustin');
  nameUpper = signal('AGUSTIN');
  fullName = signal('AgUSTin FArIsAnO');

  customDate = signal(new Date());

  tickingDateEffect = effect((onCleanUp) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
      console.log('tick');
    }, 1000);

    onCleanUp(() => {
      clearInterval(interval);
    });
  });

  changeLocale(locale: availableLocale) {
    this.localService.changeLocale(locale);
  }
}
