import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/data-hero.data';
import { canFlyPipe } from '../../pipes/can-fly.pipe';
import { heroColorPipe } from '../../pipes/herColor.pipe';
import { heroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, canFlyPipe, heroColorPipe, heroTextColorPipe, TitleCasePipe],
  templateUrl: './custom-page.html',
  styleUrl: './custom-page.css',
})
export default class CustomPage {
  name = signal('Agustin Farisano');

  upperCase = signal(true);

  heroes = signal(heroes);
}
