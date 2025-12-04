import { Component } from '@angular/core';

@Component({
  selector: 'img[rhc-image]',
  imports: [],
  templateUrl: './image.component.html',
  host: {
    '[class.utrecht-img]': 'true',
    '[class.utrecht-img--photo]': 'true',
  },
})
export class ImageComponent {}
