export interface StencilInterface {
  componentDidLoad(): void;
  componentWillLoad(): void;
  componentWillUpdate(): void;
  disconnectedCallback(): void;
  render(): void;
}
