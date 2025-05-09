import { Component } from '@angular/core';

@Component({
  selector: 'figcaption[rhc-figure-caption]',
  imports: [],
  templateUrl: './figure-caption.component.html',
  host: {
    '[class.utrecht-figure__caption]': 'true',
  },
})
export class FigureCaptionComponent {}
