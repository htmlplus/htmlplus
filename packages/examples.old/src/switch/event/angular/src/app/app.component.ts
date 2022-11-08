import { Component } from '@angular/core';
import '@htmlplus/core/switch.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onChange(event) {
    window.alert(`Will be changed to ${event.target.checked ? 'On' : 'Off'}`);
  }
}
