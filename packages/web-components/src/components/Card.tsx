import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import {
  Button,
  Card,
  CardProps,
  FullBleedCardProps,
  HorizontalImageCardProps,
  Icon,
} from '@rijkshuisstijl-community/components-react';
import { render } from 'preact';
import { BaseWebComponent } from './BaseComponent';
import { ButtonWebComponentAttributes } from './Button';

export type CardWebComponentAttributes = CardProps;
export type FullBleedCardPropsWebComponentAttributes = FullBleedCardProps;
export type HorizontalImageCardPropsWebComponentAttributes = HorizontalImageCardProps;

export class CardWebComponent extends BaseWebComponent {
  static override readonly tagName: string = 'rhc-card';

  constructor() {
    super(stylesheet);
  }

  Button({ appearance, disabled, text, ...restProps }: { [key: string]: string }) {
    console.log('Button - start');
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

    console.log('button prop', button);

    if (button) {
      buttonParsed = JSON.parse(button);
    }

    switch (appearance) {
      case 'full-bleed':
        component = (
          <Card
            appearance={appearance as FullBleedCardPropsWebComponentAttributes['appearance']}
            className={(classname as FullBleedCardPropsWebComponentAttributes['className']) ?? undefined}
            description={(description as FullBleedCardPropsWebComponentAttributes['description']) ?? undefined}
            heading={(heading as FullBleedCardPropsWebComponentAttributes['heading']) ?? undefined}
            href={(href as FullBleedCardPropsWebComponentAttributes['href']) ?? undefined}
            imageAlt={(imagealt as FullBleedCardPropsWebComponentAttributes['imageAlt']) ?? undefined}
            imageSrc={(imagesrc as FullBleedCardPropsWebComponentAttributes['imageSrc']) ?? undefined}
            metadata={(metadata as FullBleedCardPropsWebComponentAttributes['metadata']) ?? undefined}
            title={(title as FullBleedCardPropsWebComponentAttributes['title']) ?? undefined}
            {...restProps}
          >
            <slot />
          </Card>
        );
        break;
      case 'horizontal':
        component = (
          <Card
            appearance={appearance as HorizontalImageCardPropsWebComponentAttributes['appearance']}
            className={(classname as HorizontalImageCardPropsWebComponentAttributes['className']) ?? undefined}
            heading={(heading as HorizontalImageCardPropsWebComponentAttributes['heading']) ?? undefined}
            href={(href as HorizontalImageCardPropsWebComponentAttributes['href']) ?? undefined}
            imageAlt={(imagealt as HorizontalImageCardPropsWebComponentAttributes['imageAlt']) ?? undefined}
            imageSrc={(imagesrc as HorizontalImageCardPropsWebComponentAttributes['imageSrc']) ?? undefined}
            title={(title as HorizontalImageCardPropsWebComponentAttributes['title']) ?? undefined}
            {...restProps}
          >
            <slot />
          </Card>
        );
        break;
      default: {
        component = (
          <Card
            appearance={appearance as CardWebComponentAttributes['appearance']}
            button={buttonParsed && (this.Button(buttonParsed) as CardWebComponentAttributes['button'])}
            className={(classname as CardWebComponentAttributes['className']) ?? undefined}
            description={(description as CardWebComponentAttributes['description']) ?? undefined}
            heading={(heading as CardWebComponentAttributes['heading']) ?? undefined}
            href={(href as CardWebComponentAttributes['href']) ?? undefined}
            icon={icon && ((<Icon icon={icon} />) as CardWebComponentAttributes['icon'])}
            imageAlt={(imagealt as CardWebComponentAttributes['imageAlt']) ?? undefined}
            imageSrc={(imagesrc as CardWebComponentAttributes['imageSrc']) ?? undefined}
            linkLabel={(linklabel as CardWebComponentAttributes['linkLabel']) ?? undefined}
            metadata={(metadata as CardWebComponentAttributes['metadata']) ?? undefined}
            title={(title as CardWebComponentAttributes['title']) ?? undefined}
            {...restProps}
          >
            <slot />
          </Card>
        );
      }
    }

    render(component, this.shadowRoot);
  }
}
