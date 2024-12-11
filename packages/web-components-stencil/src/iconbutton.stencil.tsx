import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'rhc-iconbutton',
  styleUrls: ['button.scss', 'index.scss'],
  shadow: true,
})
export class IconButton {
  @Prop() label?: string;
  @Prop() customClass?: string;

  render() {
    const { label, customClass } = this;
    return (
      <button
        class={clsx('utrecht-button', 'utrecht-button--subtle', 'rhc-button', 'rhc-button--icon-only', customClass)}
      >
        <span class="rhc-button__sr-only">{label}</span>
        <slot />
      </button>
    );
  }
}
