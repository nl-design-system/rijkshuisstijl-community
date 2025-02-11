import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import { AccordionProvider, AccordionProviderProps, Icon, RHCIconID } from '@rijkshuisstijl-community/components-react';
import { render } from 'preact';
import { BaseWebComponent } from './BaseComponent';

export type AccordionWebComponentAttributes = AccordionProviderProps;

export class AccordionWebComponent extends BaseWebComponent {
  static override readonly tagName: string = 'rhc-accordion';
  static override readonly observedAttributes: string[] = ['appearance', 'icon', 'sections', 'heading', 'headinglevel'];

  constructor() {
    super(stylesheet);
  }

  override setupRestProps(): void {
    for (const attributeName of this.getAttributeNames()) {
      if (AccordionWebComponent.observedAttributes.includes(attributeName)) continue;
      this.restProps[attributeName] = this.getAttribute(attributeName);
    }
  }

  render(): void {
    if (!this.root) return;
    render(
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
        {...this.restProps}
      />,
      this.root,
    );
  }
}
