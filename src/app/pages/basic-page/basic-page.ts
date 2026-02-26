import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe],
  templateUrl: './basic-page.html',
  styleUrl: './basic-page.css',
})
export default class BasicPage {
  nameLower = signal('agustin');
  nameUpper = signal('AGUSTIN');
  fullName = signal('AgUSTin FArIsAnO');
}
