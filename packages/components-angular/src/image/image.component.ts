import { Component } from '@angular/core';

@Component({
  selector: 'img[rhc-image]',
  imports: [],
  templateUrl: './image.component.html',
  host: {
    '[class.utrecht-image]': 'true',
    '[class.utrecht-image--photo]': 'true',
  },
})
export class ImageComponent {}
