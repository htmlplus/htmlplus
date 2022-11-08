import { Component } from '@angular/core';
import '@htmlplus/core/card.js';
import '@htmlplus/core/card-body.js';
import '@htmlplus/core/intersection.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  intersecting = false;

  onChange(event) {
    this.intersecting = event.detail.isIntersecting;
  }
}
