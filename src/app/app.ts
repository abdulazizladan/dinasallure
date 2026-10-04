import { Component, inject, signal } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dinasallure');

  constructor() {
    // Keep anchor targets clear of the fixed navbar
    inject(ViewportScroller).setOffset([0, 80]);
  }
}
