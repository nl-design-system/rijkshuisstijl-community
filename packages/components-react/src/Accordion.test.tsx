import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Accordion, AccordionProvider } from '.';

describe('Accordion', () => {
  it('renders a visible element', () => {
    const { container } = render(<Accordion />);

    const accordion = container.querySelector(':only-child');

    expect(accordion).toBeInTheDocument();
    expect(accordion).toBeVisible();
  });
});

describe('AccordionProvider', () => {
  it('renders a visible element', () => {
    const exampleBody =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n      laborum.';

    const { container } = render(
      <AccordionProvider
        sections={[
          {
            body: exampleBody,
            label: 'Van welke organisaties kan ik berichten digitaal ontvangen?',
          },
          {
            body: exampleBody,
            label: 'Wie heeft toegang tot mijn gegevens in MijnOverheid?',
          },
          {
            body: exampleBody,
            label: 'Ik wil mijn account opzeggen. Kan dat?',
          },
        ]}
      />,
    );

    const accordionProvider = container.querySelector(':only-child');

    expect(accordionProvider).toBeInTheDocument();
    expect(accordionProvider).toBeVisible();
  });
});

afterEach(() => cleanup());
