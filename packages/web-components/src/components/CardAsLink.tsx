import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import {
  Button,
  CardAsLink,
  CardAsLinkProps,
  FullBleedCardAsLinkProps,
  HorizontalImageCardAsLinkProps,
  Icon,
} from '@rijkshuisstijl-community/components-react';
import { render } from 'preact';
import { BaseWebComponent } from './BaseComponent';
import { ButtonWebComponentAttributes } from './Button';

export type CardAsLinkWebComponentAttributes = CardAsLinkProps;
export type FullBleedCardAsLinkPropsWebComponentAttributes = FullBleedCardAsLinkProps;
export type HorizontalImageCardAsLinkPropsWebComponentAttributes = HorizontalImageCardAsLinkProps;

export class CardAsLinkWebComponent extends BaseWebComponent {
  static override readonly tagName: string = 'rhc-card-as-link';

  constructor() {
    super(stylesheet);
  }

  Button({ appearance, disabled, text, ...restProps }: { [key: string]: string }) {
    return (
      <Button
        appearance={appearance as ButtonWebComponentAttributes['appearance']}
        disabled={(disabled === 'true') as ButtonWebComponentAttributes['disabled']}
        {...restProps}
      >
        {text}
      </Button>
    );
  }

  render(): void {
    if (!this.shadowRoot) return;

    const {
      appearance,
      icon,
      imagesrc,
      imagealt,
      description,
      metadata,
      linklabel,
      href,
      title,
      classname,
      heading,
      button,
      ...restProps
    } = this.props;

    let component;
    let buttonParsed;

    if (button) {
      buttonParsed = JSON.parse(button);
    }

    switch (appearance) {
      case 'full-bleed':
        component = (
          <CardAsLink
            appearance={appearance as FullBleedCardAsLinkPropsWebComponentAttributes['appearance']}
            className={(classname as FullBleedCardAsLinkPropsWebComponentAttributes['className']) ?? undefined}
            description={(description as FullBleedCardAsLinkPropsWebComponentAttributes['description']) ?? undefined}
            heading={(heading as FullBleedCardAsLinkPropsWebComponentAttributes['heading']) ?? undefined}
            href={(href as FullBleedCardAsLinkPropsWebComponentAttributes['href']) ?? undefined}
            imageAlt={(imagealt as FullBleedCardAsLinkPropsWebComponentAttributes['imageAlt']) ?? undefined}
            imageSrc={(imagesrc as FullBleedCardAsLinkPropsWebComponentAttributes['imageSrc']) ?? undefined}
            metadata={(metadata as FullBleedCardAsLinkPropsWebComponentAttributes['metadata']) ?? undefined}
            title={(title as FullBleedCardAsLinkPropsWebComponentAttributes['title']) ?? undefined}
            {...restProps}
          >
            <slot />
          </CardAsLink>
        );
        break;
      case 'horizontal':
        component = (
          <CardAsLink
            appearance={appearance as HorizontalImageCardAsLinkPropsWebComponentAttributes['appearance']}
            className={(classname as HorizontalImageCardAsLinkPropsWebComponentAttributes['className']) ?? undefined}
            heading={(heading as HorizontalImageCardAsLinkPropsWebComponentAttributes['heading']) ?? undefined}
            href={(href as HorizontalImageCardAsLinkPropsWebComponentAttributes['href']) ?? undefined}
            imageAlt={(imagealt as HorizontalImageCardAsLinkPropsWebComponentAttributes['imageAlt']) ?? undefined}
            imageSrc={(imagesrc as HorizontalImageCardAsLinkPropsWebComponentAttributes['imageSrc']) ?? undefined}
            title={(title as HorizontalImageCardAsLinkPropsWebComponentAttributes['title']) ?? undefined}
            {...restProps}
          >
            <slot />
          </CardAsLink>
        );
        break;
      default: {
        component = (
          <CardAsLink
            appearance={appearance as CardAsLinkWebComponentAttributes['appearance']}
            button={buttonParsed && (this.Button(buttonParsed) as CardAsLinkWebComponentAttributes['button'])}
            className={(classname as CardAsLinkWebComponentAttributes['className']) ?? undefined}
            description={(description as CardAsLinkWebComponentAttributes['description']) ?? undefined}
            heading={(heading as CardAsLinkWebComponentAttributes['heading']) ?? undefined}
            href={(href as CardAsLinkWebComponentAttributes['href']) ?? undefined}
            icon={icon && ((<Icon icon={icon} />) as CardAsLinkWebComponentAttributes['icon'])}
            imageAlt={(imagealt as CardAsLinkWebComponentAttributes['imageAlt']) ?? undefined}
            imageSrc={(imagesrc as CardAsLinkWebComponentAttributes['imageSrc']) ?? undefined}
            linkLabel={(linklabel as CardAsLinkWebComponentAttributes['linkLabel']) ?? undefined}
            metadata={(metadata as CardAsLinkWebComponentAttributes['metadata']) ?? undefined}
            title={(title as CardAsLinkWebComponentAttributes['title']) ?? undefined}
            {...restProps}
          >
            <slot />
          </CardAsLink>
        );
      }
    }

    render(component, this.shadowRoot);
  }
}
