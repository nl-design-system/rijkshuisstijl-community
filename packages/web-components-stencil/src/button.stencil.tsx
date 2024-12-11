import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'rhc-button',
  styleUrls: ['button.scss', 'index.scss'],
  shadow: true,
})
export class Button {
  @Prop() appearance?: string;
  @Prop() busy?: boolean;
  @Prop() disabled?: boolean;
  @Prop() type?: string;
  @Prop() hint?: string;
  @Prop() pressed?: boolean;
  @Prop() label?: string;
  @Prop() customClass?: string;

  render() {
    const { label, busy, disabled, type, hint, pressed, appearance, customClass } = this;

    return (
      <button
        class={clsx(
          'utrecht-button',
          busy && 'utrecht-button--busy',
          disabled && 'utrecht-button--disabled',
          type === 'submit' && 'utrecht-button--submit',
          appearance === 'primary-action-button' && 'utrecht-button--primary-action',
          appearance === 'secondary-action-button' && 'utrecht-button--secondary-action',
          appearance === 'subtle-button' && 'utrecht-button--subtle',
          hint === 'danger' && 'utrecht-button--danger',
          hint === 'warning' && 'utrecht-button--warning',
          hint === 'ready' && 'utrecht-button--ready',
          pressed && 'utrecht-button--pressed',
          customClass,
        )}
        aria-busy={busy || undefined}
        aria-pressed={typeof pressed === 'boolean' ? pressed : undefined}
        type={type || 'button'}
      >
        {label && <span class="utrecht-button__label">{label}</span>}
        <slot />
      </button>
    );
  }
}
