import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export const headingLevels = [1, 2, 3, 4, 5] as const;
export type HeadingLevel = (typeof headingLevels)[number];

@Component({
  selector: 'rhc-heading',
  imports: [CommonModule],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css',
})
export class HeadingComponent {
  @Input({ required: true }) headingLevel!: HeadingLevel;
  @Input() appearanceLevel?: HeadingLevel;

  stylingLevel = () => this.appearanceLevel ?? this.headingLevel;
}
