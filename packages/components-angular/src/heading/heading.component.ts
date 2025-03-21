import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';

export type HeadingLevels = 1 | 2 | 3 | 4 | 5 | 6;

@Component({
  selector: 'lib-heading',
  imports: [CommonModule],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css',
})
export class HeadingComponent {
  readonly headingLevel = input.required<HeadingLevels>();
  readonly appearanceLevel = input<HeadingLevels>();

  stylingLevel = computed(() => {
    return this.appearanceLevel() ?? this.headingLevel();
  });
}
