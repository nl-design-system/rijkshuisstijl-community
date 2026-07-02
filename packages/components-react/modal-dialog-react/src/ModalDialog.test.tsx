import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { ModalDialog } from '.';

describe('Modal Dialog', () => {
  afterEach(() => cleanup());

  it('renders as a native dialog element with the ams-dialog class', () => {
    const { container } = render(<ModalDialog heading="Titel">Inhoud</ModalDialog>);

    const dialog = container.querySelector('dialog');

    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveClass('ams-dialog');
  });

  it('labels the dialog with its heading', () => {
    const { container, getByRole } = render(
      <ModalDialog open heading="Weet u het zeker?">
        Inhoud
      </ModalDialog>,
    );

    const heading = getByRole('heading', { name: 'Weet u het zeker?' });
    const dialog = container.querySelector('dialog');

    expect(heading).toBeInTheDocument();
    expect(dialog).toHaveAttribute('aria-labelledby', heading.id);
  });

  it('renders the body content', () => {
    const { getByText } = render(<ModalDialog heading="Titel">Hoofdtekst van de dialog</ModalDialog>);

    expect(getByText('Hoofdtekst van de dialog')).toBeInTheDocument();
  });

  it('renders a close button with the provided label', () => {
    const { getByRole } = render(
      <ModalDialog open closeButtonLabel="Venster sluiten" heading="Titel">
        Inhoud
      </ModalDialog>,
    );

    expect(getByRole('button', { name: 'Venster sluiten' })).toBeInTheDocument();
  });

  it('renders footer content when provided', () => {
    const { getByText } = render(
      <ModalDialog footer={<span>Footer-inhoud</span>} heading="Titel">
        Inhoud
      </ModalDialog>,
    );

    expect(getByText('Footer-inhoud')).toBeInTheDocument();
  });

  it('exposes static open and close helpers', () => {
    expect(typeof ModalDialog.open).toBe('function');
    expect(typeof ModalDialog.close).toBe('function');
  });
});
