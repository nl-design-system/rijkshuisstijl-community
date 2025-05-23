import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[rhcHeadingItem]',
})
export class HeadingItemDirective {
  @HostBinding('class')
  className = 'rhc-nav-bar__heading';
}
