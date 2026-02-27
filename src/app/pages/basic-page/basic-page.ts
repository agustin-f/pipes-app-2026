import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html',
  styleUrl: './basic-page.css',
})
export default class BasicPage {
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
}
