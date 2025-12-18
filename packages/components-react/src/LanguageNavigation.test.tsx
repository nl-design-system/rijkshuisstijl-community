import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { LanguageNavigation } from './LanguageNavigation';

const languages = [
  { languageName: 'Nederlands', localLanguageName: 'Nederlands', lang: 'nl' },
  { languageName: 'English', localLanguageName: 'Engels', lang: 'en' },
  { languageName: 'Deutsch', localLanguageName: 'Duits', lang: 'de' },
];

const renderLanguageNavigation = async (props = {}) => {
  const user = await userEvent.setup();
  const utils = render(
    <LanguageNavigation.Root defaultSelectedLanguage="Nederlands" {...props}>
      <LanguageNavigation.Trigger />
      <LanguageNavigation.Content>
        {languages.map(({ languageName, localLanguageName, lang }) => (
          <LanguageNavigation.Item
            href="#"
            key={lang}
            lang={lang}
            languageName={languageName}
            localLanguageName={localLanguageName}
          />
        ))}
      </LanguageNavigation.Content>
    </LanguageNavigation.Root>,
  );
  return { ...utils, user };
};

describe('LanguageNavigation', () => {
  describe('Root', () => {
    it('renders without crashing', async () => {
      await renderLanguageNavigation();
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('applies custom className', async () => {
      await renderLanguageNavigation({ className: 'custom-class' });
      expect(screen.getByRole('button').parentElement?.classList.contains('custom-class')).toBe(true);
    });

    it('forwards ref to the root element', async () => {
      const ref = createRef<HTMLDivElement>();
      await renderLanguageNavigation({ ref: ref });
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current?.classList.contains('rhc-language-navigation')).toBe(true);
    });

    it('starts closed by default', async () => {
      await renderLanguageNavigation();
      expect(screen.queryByRole('list')).not.toBeInTheDocument();
    });

    it('starts open when defaultOpen is true', async () => {
      await renderLanguageNavigation({ defaultOpen: true });
      expect(screen.getByRole('list')).toBeInTheDocument();
    });

    it('supports controlled open state', async () => {
      const onOpenChange = vi.fn();
      const { rerender, user } = await renderLanguageNavigation({ open: false, onOpenChange: onOpenChange });

      expect(screen.queryByRole('list')).not.toBeInTheDocument();

      // Click trigger - should call onOpenChange but not actually open (controlled)
      await user.click(screen.getByRole('button'));
      expect(onOpenChange).toHaveBeenCalledWith(true);
      expect(screen.queryByRole('list')).not.toBeInTheDocument();

      // Rerender with open=true
      rerender(
        <LanguageNavigation.Root open={true} onOpenChange={onOpenChange}>
          <LanguageNavigation.Trigger />
          <LanguageNavigation.Content>
            <LanguageNavigation.Item href="#" lang="nl" languageName="Nederlands" />
          </LanguageNavigation.Content>
        </LanguageNavigation.Root>,
      );

      expect(screen.getByRole('list')).toBeInTheDocument();
    });

    it('supports controlled selected language', async () => {
      const onLanguageChange = vi.fn();
      const { user } = await renderLanguageNavigation({
        defaultOpen: true,
        selectedLanguage: 'English',
        onLanguageChange,
      });

      // Trigger should show controlled selected language
      expect(screen.getByRole('button', { name: 'English' })).toBeInTheDocument();

      // Click on Nederlands option
      const Item = screen.getByRole('link', { name: /Nederlands/ });

      await user.click(Item);

      expect(onLanguageChange).toHaveBeenCalledWith('Nederlands');
    });
  });

  describe('Trigger', () => {
    it('renders a button element', async () => {
      await renderLanguageNavigation();
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('displays the selected language', async () => {
      await renderLanguageNavigation({ defaultSelectedLanguage: 'English' });
      expect(screen.getByRole('button', { name: 'English' })).toBeInTheDocument();
    });

    it('displays custom children instead of selected language', () => {
      render(
        <LanguageNavigation.Root defaultSelectedLanguage="Nederlands">
          <LanguageNavigation.Trigger>Custom Label</LanguageNavigation.Trigger>
        </LanguageNavigation.Root>,
      );
      expect(screen.getByRole('button', { name: 'Custom Label' })).toBeInTheDocument();
    });

    it('toggles content visibility on click', async () => {
      const { user } = await renderLanguageNavigation();
      const trigger = screen.getByRole('button');

      expect(screen.queryByRole('list')).not.toBeInTheDocument();

      await user.click(trigger);
      expect(screen.getByRole('list')).toBeInTheDocument();

      await user.click(trigger);
      expect(screen.queryByRole('list')).not.toBeInTheDocument();
    });

    it('has correct ARIA attributes when closed', async () => {
      await renderLanguageNavigation();
      const trigger = screen.getByRole('button');

      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      expect(trigger).toHaveAttribute('aria-controls');
      expect(trigger).toHaveAttribute('data-state', 'closed');
    });

    it('has correct ARIA attributes when open', async () => {
      await renderLanguageNavigation({ defaultOpen: true });
      const trigger = screen.getByRole('button');

      expect(trigger).toHaveAttribute('aria-expanded', 'true');
      expect(trigger).toHaveAttribute('aria-controls');
      expect(trigger).toHaveAttribute('data-state', 'open');
    });

    it('shows chevron icon by default', async () => {
      await renderLanguageNavigation();
      const trigger = screen.getByRole('button');
      // Icon should be present (checking for svg or icon element)
      expect(trigger.querySelector('.utrecht-icon')).toBeInTheDocument();
    });

    it('hides chevron icon when showIcon is false', () => {
      render(
        <LanguageNavigation.Root>
          <LanguageNavigation.Trigger showIcon={false} />
        </LanguageNavigation.Root>,
      );
      const trigger = screen.getByRole('button');
      expect(trigger.querySelector('.utrecht-icon')).not.toBeInTheDocument();
    });

    it('applies custom className', () => {
      render(
        <LanguageNavigation.Root>
          <LanguageNavigation.Trigger className="custom-trigger" />
        </LanguageNavigation.Root>,
      );
      expect(screen.getByRole('button').classList.contains('custom-trigger')).toBe(true);
    });

    it('calls custom onClick handler', async () => {
      const onClick = vi.fn();
      const user = await userEvent.setup();
      render(
        <LanguageNavigation.Root>
          <LanguageNavigation.Trigger onClick={onClick} />
        </LanguageNavigation.Root>,
      );

      await user.click(screen.getByRole('button'));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('forwards ref to button element', () => {
      const ref = createRef<HTMLButtonElement>();
      render(
        <LanguageNavigation.Root>
          <LanguageNavigation.Trigger ref={ref} />
          <LanguageNavigation.Content />
        </LanguageNavigation.Root>,
      );
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });
  });

  describe('Content', () => {
    it('renders a list when open', async () => {
      await renderLanguageNavigation({ defaultOpen: true });
      expect(screen.getByRole('list')).toBeInTheDocument();
    });

    it('does not render when closed', async () => {
      await renderLanguageNavigation({ defaultOpen: false });
      expect(screen.queryByRole('list')).not.toBeInTheDocument();
    });

    it('applies custom className', () => {
      render(
        <LanguageNavigation.Root defaultOpen={true}>
          <LanguageNavigation.Trigger />
          <LanguageNavigation.Content className="custom-content" />
        </LanguageNavigation.Root>,
      );
      expect(screen.getByRole('list').classList.contains('custom-content')).toBe(true);
    });

    it('has correct id matching aria-controls', async () => {
      await renderLanguageNavigation({ defaultOpen: true });
      const trigger = screen.getByRole('button');
      const content = screen.getByRole('list');

      expect(trigger.getAttribute('aria-controls')).toBe(content.id);
    });

    it('closes when clicking outside', async () => {
      const user = await userEvent.setup();
      render(
        <div>
          <div data-testid="outside">Outside element</div>
          <LanguageNavigation.Root defaultOpen={true}>
            <LanguageNavigation.Trigger />
            <LanguageNavigation.Content>
              <LanguageNavigation.Item href="#" lang="nl" languageName="Nederlands" />
            </LanguageNavigation.Content>
          </LanguageNavigation.Root>
        </div>,
      );

      expect(screen.getByRole('list')).toBeInTheDocument();

      // Click outside
      await user.click(screen.getByTestId('outside'));

      expect(screen.queryByRole('list')).not.toBeInTheDocument();
    });

    it('does not close when clicking outside if closeOnOutsideClick is false', async () => {
      const user = await userEvent.setup();
      render(
        <div>
          <div data-testid="outside">Outside element</div>
          <LanguageNavigation.Root defaultOpen={true}>
            <LanguageNavigation.Trigger />
            <LanguageNavigation.Content closeOnOutsideClick={false}>
              <LanguageNavigation.Item href="#" lang="nl" languageName="Nederlands" />
            </LanguageNavigation.Content>
          </LanguageNavigation.Root>
        </div>,
      );

      expect(screen.getByRole('list')).toBeInTheDocument();

      await user.click(screen.getByTestId('outside'));

      expect(screen.getByRole('list')).toBeInTheDocument();
    });

    it('closes when pressing Escape key', async () => {
      const { user } = await renderLanguageNavigation({ defaultOpen: true });

      expect(screen.getByRole('list')).toBeInTheDocument();

      await user.keyboard('{Escape}');

      expect(screen.queryByRole('list')).not.toBeInTheDocument();
    });

    it('focuses trigger when closing with Escape key', async () => {
      const { user } = await renderLanguageNavigation({ defaultOpen: true });
      const trigger = screen.getByRole('button');

      await user.keyboard('{Escape}');

      expect(trigger).toHaveFocus();
    });
  });

  describe('Item', () => {
    it('renders items as list items', async () => {
      await renderLanguageNavigation({ defaultOpen: true });
      const items = screen.getAllByRole('link');
      expect(items).toHaveLength(3);
    });

    it('displays language name', async () => {
      await renderLanguageNavigation({ defaultOpen: true });

      expect(screen.getByText('English')).toBeInTheDocument();
      expect(screen.getByText('Deutsch')).toBeInTheDocument();
    });

    it('displays local language name for non-selected items', async () => {
      await renderLanguageNavigation({ defaultOpen: true, defaultSelectedLanguage: 'Nederlands' });
      // Nederlands is selected, so no local name shown
      expect(screen.queryByText('(Nederlands)')).not.toBeInTheDocument();
      // Other languages show local names
      expect(screen.getByText('(Engels)')).toBeInTheDocument();
      expect(screen.getByText('(Duits)')).toBeInTheDocument();
    });

    it('hides local language name for selected item', async () => {
      await renderLanguageNavigation({ defaultOpen: true, defaultSelectedLanguage: 'English' });
      // English is selected, so no local name shown
      expect(screen.queryByText('(Engels)')).not.toBeInTheDocument();
      // Other languages show local names
      expect(screen.getByText('(Nederlands)')).toBeInTheDocument();
      expect(screen.getByText('(Duits)')).toBeInTheDocument();
    });

    it('marks current link with aria-current', async () => {
      await renderLanguageNavigation({ defaultOpen: true, defaultSelectedLanguage: 'English' });
      const englishItem = screen.getByRole('link', { name: /English/ });

      expect(englishItem).toHaveAttribute('aria-current', 'page');
    });

    it('changes selected language on click', async () => {
      const onLanguageChange = vi.fn();
      const { user } = await renderLanguageNavigation({ defaultOpen: true, onLanguageChange });

      const englishItem = screen.getByRole('link', { name: /English/ });

      await user.click(englishItem);
      expect(onLanguageChange).toHaveBeenCalledWith('English');
    });

    it('closes content after selection by default', async () => {
      const { user } = await renderLanguageNavigation({ defaultOpen: true });
      await user.click(screen.getByRole('link', { name: /English/ }));

      expect(screen.queryByRole('list')).not.toBeInTheDocument();
    });

    it('keeps content open when closeOnSelect is false', async () => {
      const user = await userEvent.setup();
      render(
        <LanguageNavigation.Root defaultOpen={true} defaultSelectedLanguage="Nederlands">
          <LanguageNavigation.Trigger />
          <LanguageNavigation.Content>
            <LanguageNavigation.Item closeOnSelect={false} href="#" lang="en" languageName="English" />
          </LanguageNavigation.Content>
        </LanguageNavigation.Root>,
      );

      await user.click(screen.getByRole('link', { name: /English/ }));

      expect(screen.getByRole('list')).toBeInTheDocument();
    });

    it('applies custom className', () => {
      render(
        <LanguageNavigation.Root defaultOpen={true}>
          <LanguageNavigation.Trigger />
          <LanguageNavigation.Content>
            <LanguageNavigation.Item className="custom-list-item" href="#" lang="nl" languageName="Nederlands" />
          </LanguageNavigation.Content>
        </LanguageNavigation.Root>,
      );

      expect(screen.getByRole('listitem').classList.contains('custom-list-item')).toBe(true);
    });

    it('calls custom onClick handler', async () => {
      const user = await userEvent.setup();
      const onClick = vi.fn();
      render(
        <LanguageNavigation.Root defaultOpen={true}>
          <LanguageNavigation.Trigger />
          <LanguageNavigation.Content>
            <LanguageNavigation.Item href="#" lang="nl" languageName="Nederlands" onClick={onClick} />
          </LanguageNavigation.Content>
        </LanguageNavigation.Root>,
      );

      await user.click(screen.getByRole('link'));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('renders custom children instead of default content', () => {
      render(
        <LanguageNavigation.Root defaultOpen={true}>
          <LanguageNavigation.Trigger />
          <LanguageNavigation.Content>
            <LanguageNavigation.Item href="#" lang="nl" languageName="Nederlands">
              <span data-testid="custom-content">Custom Option Content</span>
            </LanguageNavigation.Item>
          </LanguageNavigation.Content>
        </LanguageNavigation.Root>,
      );

      expect(screen.getByTestId('custom-content')).toBeInTheDocument();
    });

    it('sets lang attribute on language name span', async () => {
      await renderLanguageNavigation({ defaultOpen: true });

      // Query within the list to avoid trigger button text
      const list = screen.getByRole('list');
      const nlSpan = list.querySelector('span[lang="nl"]');
      expect(nlSpan).toHaveTextContent('Nederlands');

      const enSpan = list.querySelector('span[lang="en"]');
      expect(enSpan).toHaveTextContent('English');
    });
  });

  describe('Context error handling', () => {
    it('throws error when Trigger is used outside Root', () => {
      // Suppress console.error for this test
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

      expect(() => {
        render(<LanguageNavigation.Trigger />);
      }).toThrow('<LanguageNavigation.Trigger> must be used within <LanguageNavigation.Root>');

      consoleSpy.mockRestore();
    });

    it('throws error when Content is used outside Root', () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

      expect(() => {
        render(<LanguageNavigation.Content />);
      }).toThrow('<LanguageNavigation.Content> must be used within <LanguageNavigation.Root>');

      consoleSpy.mockRestore();
    });

    it('throws error when Option is used outside Root', () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

      expect(() => {
        render(<LanguageNavigation.Item href="#" lang="nl" languageName="Nederlands" />);
      }).toThrow('<LanguageNavigation.Item> must be used within <LanguageNavigation.Root>');

      consoleSpy.mockRestore();
    });
  });

  describe('Keyboard navigation', () => {
    it('allows opening with Enter key on trigger', async () => {
      const { user } = await renderLanguageNavigation();

      const trigger = screen.getByRole('button');
      trigger.focus();

      await user.keyboard('{Enter}');

      expect(screen.getByRole('list')).toBeInTheDocument();
    });

    it('allows opening with Space key on trigger', async () => {
      const { user } = await renderLanguageNavigation();

      const trigger = screen.getByRole('button');
      trigger.focus();

      await user.keyboard(' ');

      expect(screen.getByRole('list')).toBeInTheDocument();
    });
  });
});

afterEach(() => cleanup());
