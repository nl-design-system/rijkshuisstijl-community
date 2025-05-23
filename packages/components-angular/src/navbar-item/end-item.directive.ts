import { Directive } from '@angular/core';

/**
 * Deze directive wordt gebruikt als "marker". Hiermee kunnen <li>'s gemarkeerd worden als endItem.
 * Een endItem wordt aan het einde van de navbar geplaatst.
 */
@Directive({
  selector: '[rhcEndItem]',
})
export class EndItemDirective {}
