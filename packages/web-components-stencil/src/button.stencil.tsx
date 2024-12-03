import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'rhc-button',
  styleUrls: ['button.scss', 'index.scss'],
  shadow: true,
})
export class Hero {
  @Prop() label!: string;
  @Prop() appearance!: string;

  render() {
    const { label, appearance } = this;

    return (
      <button class={clsx('utrecht-button', appearance && 'utrecht-button--' + appearance)} aria-label={label}>
        <span class="rhc-button__sr-only">{label}</span>
        <slot />
      </button>
    );
  }
}
