import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import { AccordionProvider, AccordionProviderProps, Icon, RHCIconID } from '@rijkshuisstijl-community/components-react';
import { render } from 'preact';
import { BaseWebComponent } from './BaseComponent';

export type AccordionWebComponentAttributes = AccordionProviderProps;

export class AccordionWebComponent extends BaseWebComponent {
  static override readonly tagName: string = 'rhc-accordion';

  constructor() {
    super(stylesheet);
  }

  render(): void {
    if (!this.shadowRoot) return;

    const { heading, icon, headinglevel, sections, ...restProps } = this.props;

    render(
      <AccordionProvider
        heading={heading ?? undefined}
        icon={icon && <Icon icon={icon as RHCIconID} />}
        sections={(sections && JSON.parse(sections as string)) as AccordionWebComponentAttributes['sections']}
        headingLevel={
          headinglevel ? (Number(headinglevel) as AccordionWebComponentAttributes['headingLevel']) : undefined
        }
        {...restProps}
      />,
      this.shadowRoot,
    );
  }
}
