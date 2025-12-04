import { Component, Input } from '@angular/core';

@Component({
  selector: 'figure[rhc-figure]',
  imports: [],
  templateUrl: './figure.component.html',
  host: {
    '[class.utrecht-figure]': 'true',
    '[style.--utrecht-figure-img-border-end-end-radius]': 'borderEndEndRadius ? borderEndEndRadius + "px" : null',
    '[style.--utrecht-figure-img-border-end-start-radius]': 'borderEndStartRadius ? borderEndStartRadius + "px" : null',
    '[style.--utrecht-figure-img-border-start-end-radius]': 'borderStartEndRadius ? borderStartEndRadius + "px" : null',
    '[style.--utrecht-figure-img-border-start-start-radius]':
      'borderStartStartRadius ? borderStartStartRadius + "px" : null',
  },
})
export class FigureComponent {
  @Input() borderEndEndRadius?: number;
  @Input() borderEndStartRadius?: number;
  @Input() borderStartEndRadius?: number;
  @Input() borderStartStartRadius?: number;
}
