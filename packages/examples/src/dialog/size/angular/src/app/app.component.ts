import { Component } from '@angular/core';
import '@htmlplus/core/dialog.js';
import '@htmlplus/core/dialog-body.js';
import '@htmlplus/core/dialog-content.js';
import '@htmlplus/core/dialog-footer.js';
import '@htmlplus/core/dialog-header.js';
import '@htmlplus/core/grid.js';
import '@htmlplus/core/grid-item.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  open = false;
  size = 'md';

  hide() {
    this.open = false;
  }

  show(size) {
    this.size = size;
    this.open = true;
  }
}
