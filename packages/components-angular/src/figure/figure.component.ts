import { Component } from '@angular/core';

@Component({
  selector: 'figure[rhc-figure]',
  imports: [],
  templateUrl: './figure.component.html',
  host: {
    '[class.utrecht-figure]': 'true',
  },
})
export class FigureComponent {}
