import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'rhc-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Hero {
  @Prop() label!: string;

  render() {
    const { label } = this;

    return (
      <button class={clsx('rhc-button', 'rhc-button--icon-only')} aria-label={label}>
        <span class="rhc-button__sr-only">{label}</span>
        <slot />
      </button>
    );
  }
}
