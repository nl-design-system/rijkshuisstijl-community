import styles from './button.css?inline';
export const BUTTON_TAG_NAME = 'rhc-button';

export const ButtonAppearance = {
  BUTTON: 'button',
  PRIMARY_ACTION_BUTTON: 'primary-action',
  SECONDARY_ACTION_BUTTON: 'secondary-action',
  SUBTLE_BUTTON: 'subtle',
} as const;

export type ButtonAppearanceType = (typeof ButtonAppearance)[keyof typeof ButtonAppearance];

const sheet = new CSSStyleSheet();
sheet.replaceSync(styles);

export interface ButtonProps {
  appearance?: ButtonAppearanceType;
  disabled?: boolean;
  type: 'button' | 'submit' | 'reset';
}

export class RHCButton extends HTMLElement {
  static tagName = BUTTON_TAG_NAME;

  static get observedAttributes(): string[] {
    return ['appearance', 'disabled', 'type'];
  }

  private props: ButtonProps = {
    disabled: false,
    type: 'button',
  };

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.adoptedStyleSheets = [sheet];
  }

  connectedCallback(): void {
    this.render();
  }

  attributeChangedCallback(name: string, oldValue: string | undefined | boolean, newValue: string | undefined): void {
    console.log(name, oldValue, newValue);
    if (oldValue === newValue) return;

    switch (name) {
      case 'appearance':
        this.props.appearance = (newValue as ButtonAppearanceType) || '';
        break;
      case 'disabled':
        this.props.disabled = newValue !== null;
        break;
      case 'type':
        this.props.type = (newValue as 'button' | 'submit' | 'reset') || 'button';
        break;
    }
    this.render();
  }

  private getClassNames(): string[] {
    const classes = ['utrecht-button'];
    if (this.props.appearance) classes.push(`utrecht-button--${this.props.appearance}`);
    return classes;
  }

  private render(): void {
    if (!this.shadowRoot) return;
    const classes = this.getClassNames();

    this.shadowRoot.innerHTML = `
      <button class="${classes.join(' ')}" type="${this.props.type}">
        <slot></slot>
      </button>
    `;
    if (this.props.disabled) this.shadowRoot.querySelector('button')?.setAttribute('disabled', String(false));
  }

  static define(name = RHCButton.tagName): void {
    if (!customElements.get(name)) {
      customElements.define(name, this);
    }
  }
}
