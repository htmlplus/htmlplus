import { Component } from '@angular/core';
import '@htmlplus/core/card.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elevation = '12';

  onChange(event) {
    this.elevation = event.target.value;
  }
}
