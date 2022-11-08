import { Component } from '@angular/core';
import '@htmlplus/core/card.js';
import '@htmlplus/core/card-body.js';
import '@htmlplus/core/click-outside.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inside = 0;
  outside = 0;

  onClick() {
    this.inside = this.inside + 1;
  }

  onClickOutside() {
    this.outside = this.outside + 1;
  }
}
