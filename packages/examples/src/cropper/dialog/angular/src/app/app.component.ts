import { Component } from '@angular/core';
import '@htmlplus/core/cropper.js';
import '@htmlplus/core/dialog.js';
import '@htmlplus/core/dialog-body.js';
import '@htmlplus/core/dialog-content.js';
import '@htmlplus/core/dialog-footer.js';
import '@htmlplus/core/dialog-header.js';
import '@htmlplus/core/dialog-toggler.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  disabled: boolean = true;

  change(disabled) {
    this.disabled = disabled;
  }
}
