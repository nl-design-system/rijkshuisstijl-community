import { Component, Input } from '@angular/core';

@Component({
  selector: 'rhc-link',
  imports: [],
  templateUrl: './link.component.html',
  styleUrl: './link.component.css',
})
export class LinkComponent {
  @Input({ required: true }) href!: string;
}
