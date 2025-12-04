import { Component, Input } from '@angular/core';

@Component({
  selector: 'rhc-link',
  imports: [],
  templateUrl: './link.component.html',
  styleUrl: './link.component.css',
})
export class LinkComponent {
  @Input({ required: true }) href!: string;
  @Input() inline?: boolean;
  @Input() target?: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop' = '_self';

  computedClasses = () => `nl-link rhc-link ${this.inline ? 'rhc-link--inline' : ''}`;
}
