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

  private reactRoot?: ReactDOM.Root;
  private observer?: MutationObserver;

  componentDidLoad() {
    if (!this.host) {
      console.error('Invalid host:', this.host);
      return;
    }

    this.reactRoot = ReactDOM.createRoot(this.host);
    this.renderComponent();

    this.observer = new MutationObserver(() => {
      this.props = handleProps(this.host);
      this.renderComponent();
    });

    this.observer.observe(this.host, {
      attributes: true,
    });
  }

  renderComponent = () => {
    if (!this.reactRoot) return;
    const props: Partial<HeroProps> = this.props;

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
  };

  componentWillLoad() {
    this.props = handleProps(this.host);
    this.renderComponent();
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

    if (this.observer) {
      this.observer.disconnect(); // Stop observing
      this.observer = undefined;
    }
  }

  render() {
    return null;
  }
}
