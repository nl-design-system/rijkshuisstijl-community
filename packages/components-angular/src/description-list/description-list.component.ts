import { Component, Input } from '@angular/core';

@Component({
  selector: 'rhc-description-list',
  imports: [],
  templateUrl: './description-list.component.html',
  styleUrl: './description-list.component.css',
})
export class DescriptionListComponent {
  @Input() caption?: string | null;
  @Input() items: { title: string; detail: string }[] = [];
}
