import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export type HeadingLevels = 1 | 2 | 3 | 4 | 5 | 6;

@Component({
  selector: 'community-heading',
  imports: [CommonModule],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css',
})
export class HeadingComponent {
  @Input({ required: true }) headingLevel!: HeadingLevels;
  @Input() appearanceLevel?: HeadingLevels;

  stylingLevel = () => this.appearanceLevel ?? this.headingLevel;
}
