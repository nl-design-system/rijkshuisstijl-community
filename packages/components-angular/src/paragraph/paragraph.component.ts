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
    return this.appearance === 'lead' ? 'nl-paragraph nl-paragraph--lead' : 'nl-paragraph';
  };
}
