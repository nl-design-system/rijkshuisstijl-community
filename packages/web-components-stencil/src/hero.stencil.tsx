import { Hero, HeroProps } from '@rijkshuisstijl-community/components-react';
import { Component } from '@stencil/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { StencilBase } from './StencilBase';

@Component({
  tag: 'rhc-hero',
  shadow: false,
})
export class StencilHero extends StencilBase {
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
}
