import { Component, Input } from '@angular/core';

export const appearanceOptions = [undefined, 'lead'] as const;
export type AppearanceType = (typeof appearanceOptions)[number];

@Component({
  selector: 'rhc-paragraph',
  imports: [],
  templateUrl: './paragraph.component.html',
  styleUrl: './paragraph.component.css',
})
export class ParagraphComponent {
  @Input() appearance?: AppearanceType;

  computedClass = () => {
    switch (this.appearance) {
      case 'lead':
        return 'nl-paragraph nl-paragraph--lead';
      default:
        return 'nl-paragraph';
    }
  };
}
