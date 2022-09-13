import { Component } from '@angular/core';
import '@htmlplus/core/browse.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onChange(event) {
    const name = event.detail.files[0].file.name;
    alert(`File '${name}' selected.`);
  }
}
