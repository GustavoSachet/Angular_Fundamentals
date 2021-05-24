import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: [
  ]
})
export class DataBindingComponent {
  public clicks: number = 0;
  public name: string = "";

  addClick() {
    this.clicks++;
  }

  resetClicks() {
    this.clicks = 0;
  }
}
