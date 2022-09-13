import { Component } from '@angular/core';
import '@htmlplus/core/switch.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ensure(event) {
    if (window.confirm('Are you sure you want to toggle it?')) return;
    event.preventDefault();
  }
}
