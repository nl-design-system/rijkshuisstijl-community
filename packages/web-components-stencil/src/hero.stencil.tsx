import { Hero } from '@rijkshuisstijl-community/components-react';
import { Component, Element, Prop } from '@stencil/core';
import React from 'react';
import ReactDOM from 'react-dom/client';

@Component({
  tag: 'rhc-hero',
  styleUrl: 'hero.scss',
  shadow: false,
})
export class StencilHero {
  @Prop() aspectRatio?: '16 / 9' | '1 / 1' | '4 / 3' = '16 / 9';
  @Prop() textAlign?: 'start' | 'end' = 'start';
  @Prop() borderRadiusCorner?: 'start-start' | 'start-end' | 'end-start' | 'end-end';
  @Prop() imageSrc?: string;
  @Prop() imageAlt?: string;
  @Prop() heading?: string;
  @Prop() headingLevel?: 1 | 2 | 3 | 4 | 5 = 3;
  @Prop() subHeading?: string;
  @Prop() heroMessage?: boolean;
  @Prop() customClass?: string;

  @Element() host!: HTMLElement;
  private reactRoot?: ReactDOM.Root;

  componentDidLoad() {
    if (!this.host) {
      console.error('Invalid host:', this.host);
      return;
    }

    this.reactRoot = ReactDOM.createRoot(this.host);
    this.renderComponent();
  }

  renderComponent() {
    if (!this.reactRoot) return;

    this.reactRoot.render(
      React.createElement(Hero, {
        textAlign: this.textAlign || 'start',
        imageSrc:
          this.imageSrc ||
          'https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/main/proprietary/assets/src/placeholder.jpg',
        imageAlt: this.imageAlt || 'Tullip field',
        heading: this.heading || 'Heading',
        subHeading: this.subHeading || 'Subtext',
        aspectRatio: this.aspectRatio || '16 / 9',
        borderRadiusCorner: this.borderRadiusCorner || 'start-start',
        headingLevel: this.headingLevel || 3,
        heroMessage: this.heroMessage || false,
        className: this.customClass || '',
      }),
    );
  }

  componentWillUpdate() {
    this.renderComponent();
  }

  disconnectedCallback() {
    if (this.reactRoot) {
      this.reactRoot.unmount();
      this.reactRoot = undefined;
    }
  }
}
