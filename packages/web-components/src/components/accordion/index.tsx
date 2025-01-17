import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import { AccordionProvider, AccordionProviderProps, Icon } from '@rijkshuisstijl-community/components-react';
import { RHCIconID } from '@rijkshuisstijl-community/components-react';
import { BaseWebComponent } from '../BaseComponent';

export type AccordionWebComponentAttributes = AccordionProviderProps;

export class AccordionWebComponent extends BaseWebComponent {
  static override tagName: string = 'rhc-accordion';
  static override observedAttributes: string[] = ['appearance', 'icon', 'sections', 'heading', 'headinglevel'];

  constructor() {
    super(stylesheet);
  }

  render(): void {
    this.root.render(
      <AccordionProvider
        appearance={this.getAttribute('appearance') ?? undefined}
        heading={this.getAttribute('heading') ?? undefined}
        icon={this.getAttribute('icon') && <Icon icon={this.getAttribute('icon') as RHCIconID} />}
        headingLevel={
          this.getAttribute('headingLevel')
            ? (Number(this.getAttribute('headingLevel')) as AccordionProviderProps['headingLevel'])
            : undefined
        }
        sections={
          (this.getAttribute('sections') &&
            JSON.parse(this.getAttribute('sections') as string)) as AccordionProviderProps['sections']
        }
      />,
    );
  }
}
