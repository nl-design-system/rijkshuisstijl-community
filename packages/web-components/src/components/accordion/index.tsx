import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import { AccordionProvider, AccordionProviderProps } from '@rijkshuisstijl-community/components-react';
import { BaseWebComponent } from '../BaseComponent';

export type AccordionWebComponentAttributes = AccordionProviderProps;

export class AccordionWebComponent extends BaseWebComponent {
  static override tagName: string = 'rhc-accordion';
  static override observedAttributes: string[] = ['appearance', 'icon', 'sections'];

  constructor() {
    super(stylesheet);
  }

  render(): void {
    this.root.render(
      <AccordionProvider
        appearance={this.getAttribute('appearance') ?? undefined}
        icon={this.getAttribute('icon')}
        sections={
          (this.getAttribute('sections') &&
            JSON.parse(this.getAttribute('sections') as string)) as AccordionProviderProps['sections']
        }
      />,
    );
  }
}
