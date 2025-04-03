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
  @Input({ required: true }) level!: HeadingLevel;
  @Input() appearanceLevel?: HeadingLevel;

  stylingLevel = () => this.appearanceLevel ?? this.level;
  computedClasses = () => `nl-heading nl-heading--level-${this.stylingLevel()}`;
}
