import { Hero, HeroProps } from '@rijkshuisstijl-community/components-react';
import { Component, Element, Prop } from '@stencil/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { handleProps } from './stencil.helper';
import { StencilInterface } from './stencil.interface';

@Component({
  tag: 'rhc-hero',
  shadow: false,
})
export class StencilHero implements StencilInterface {
  @Prop() props: Record<string, any> = {};
  @Element() host!: HTMLElement;

  reactRoot?: ReactDOM.Root;
  componentDidLoad() {
    if (!this.host) {
      console.error('Invalid host:', this.host);
      return;
    }

    const props: Partial<HeroProps> = this.props;

    this.reactRoot = ReactDOM.createRoot(this.host);
    this.reactRoot.render(
      React.createElement(Hero, {
        textAlign: props.textAlign || 'start',
        imageSrc:
          props.imageSrc ||
          'https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/main/proprietary/assets/src/placeholder.jpg',
        imageAlt: props.imageAlt || 'Tullip field',
        heading: props.heading || 'Heading',
        subHeading: props.subHeading || 'Subtext',
        ...this.props,
      }),
    );
  }

  componentWillLoad() {
    this.props = handleProps(this.host);
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
    this.props = handleProps(this.host);
  }

  disconnectedCallback() {
    if (this.reactRoot) {
      this.reactRoot.unmount();
      this.reactRoot = undefined;
    }
  }

  render() {
    return null;
  }
}
