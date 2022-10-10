import { Component } from '@angular/core';
import '@htmlplus/core/card.js';
import '@htmlplus/core/intersection.js';
import '@htmlplus/core/spinner.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onChange(event) {
    if (!event.detail.isIntersecting) return;
    setTimeout(() => {
      const image = event.target.querySelector('img');
      const spinner = event.target.querySelector('plus-spinner');
      const src = image.getAttribute('data-src');
      image.setAttribute('src', src);
      image.removeAttribute('data-hidden');
      spinner.setAttribute('data-hidden', 'true');
    }, 1000);
  }
}
