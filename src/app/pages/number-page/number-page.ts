import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-number-page',
  imports: [DecimalPipe, PercentPipe, CurrencyPipe],
  templateUrl: './number-page.html',
  styleUrl: './number-page.css',
})
export default class NumberPage {
  totalSells = signal(2434444444.57676);
  percent = signal(0.4892);
}
