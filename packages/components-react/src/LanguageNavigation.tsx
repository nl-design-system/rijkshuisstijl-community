import clsx from 'clsx';
import {
  createContext,
  HTMLAttributes,
  MouseEvent,
  PropsWithChildren,
  Ref,
  RefObject,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import { Icon } from './Icon';
import { Link } from './Link';
import { LinkButton, LinkButtonProps } from './LinkButton';
import { ListboxOptionProps, ListboxProps } from './Listbox';

/* -------------------------------------------------------------------------------------------------
 * Context
 * -----------------------------------------------------------------------------------------------*/

type LanguageNavigationContextValue = {
  open: boolean;
  // eslint-disable-next-line no-unused-vars
  onOpenChange: (_newOpen: boolean) => void;
  onOpenToggle: () => void;
  selectedLanguage: string | undefined;
  // eslint-disable-next-line no-unused-vars
  onLanguageChange: (_newLanguage: string) => void;
  contentId: string;
  triggerRef: RefObject<HTMLButtonElement | null>;
};

const LanguageNavigationContext = createContext<LanguageNavigationContextValue | undefined>(undefined);
LanguageNavigationContext.displayName = 'LanguageNavigationContext';

function useLanguageNavigationContext(componentName: string) {
  const context = useContext(LanguageNavigationContext);
  if (!context) {
    throw new Error(`<LanguageNavigation.${componentName}> must be used within <LanguageNavigation.Root>`);
  }
  return context;
}

/* -------------------------------------------------------------------------------------------------
 * Root
 * -----------------------------------------------------------------------------------------------*/

export interface LanguageNavigationRootProps extends HTMLAttributes<HTMLDivElement> {
  /** Controlled open state */
  open?: boolean;
  /** Default open state for uncontrolled usage */
  defaultOpen?: boolean;
  /** Callback when open state changes */
  // eslint-disable-next-line no-unused-vars
  onOpenChange?: (_newOpen: boolean) => void;
  /** Controlled selected language */
  selectedLanguage?: string;
  /** Default selected language for uncontrolled usage */
  defaultSelectedLanguage?: string;
  /** Callback when selected language changes */
  // eslint-disable-next-line no-unused-vars
  onLanguageChange?: (_newLanguage: string) => void;
  ref?: Ref<HTMLDivElement>;
}

/**
 * Root container for the LanguageNavigation component which holds the context for state management.
 * Supports both controlled and uncontrolled modes for open state and selected language.
 */
export const Root = ({
  children,
  open: openProp,
  defaultOpen = false,
  onOpenChange: onOpenChangeProp,
  selectedLanguage: selectedLanguageProp,
  defaultSelectedLanguage,
  onLanguageChange: onLanguageChangeProp,
  className,
  ref,
  ...restProps
}: PropsWithChildren<LanguageNavigationRootProps>) => {
  // Controlled vs uncontrolled open state
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isOpenControlled = openProp !== undefined;
  const open = isOpenControlled ? openProp : uncontrolledOpen;

  // Controlled vs uncontrolled selected language
  const [uncontrolledSelectedLanguage, setUncontrolledSelectedLanguage] = useState(defaultSelectedLanguage);
  const isSelectedLanguageControlled = selectedLanguageProp !== undefined;
  const selectedLanguage = isSelectedLanguageControlled ? selectedLanguageProp : uncontrolledSelectedLanguage;

  const contentId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);

  const onOpenChange = useCallback(
    (newOpen: boolean) => {
      if (!isOpenControlled) {
        setUncontrolledOpen(newOpen);
      }
      onOpenChangeProp?.(newOpen);
    },
    [isOpenControlled, onOpenChangeProp],
  );

  const onOpenToggle = useCallback(() => {
    onOpenChange(!open);
  }, [open, onOpenChange]);

  const onLanguageChange = useCallback(
    (language: string) => {
      if (!isSelectedLanguageControlled) {
        setUncontrolledSelectedLanguage(language);
      }
      onLanguageChangeProp?.(language);
    },
    [isSelectedLanguageControlled, onLanguageChangeProp],
  );

  return (
    <LanguageNavigationContext
      value={{
        open,
        onOpenChange,
        onOpenToggle,
        selectedLanguage,
        onLanguageChange,
        contentId,
        triggerRef,
      }}
    >
      <div className={clsx('rhc-language-navigation', className)} ref={ref} {...restProps}>
        {children}
      </div>
    </LanguageNavigationContext>
  );
};
Root.displayName = 'LanguageNavigation.Root';

/* -------------------------------------------------------------------------------------------------
 * Trigger
 * -----------------------------------------------------------------------------------------------*/

export interface LanguageNavigationTriggerProps extends LinkButtonProps {
  /** Show chevron icon indicating open/closed state */
  showIcon?: boolean;
  ref?: Ref<HTMLButtonElement>;
}

/**
 * Trigger button that toggles the language navigation content visibility.
 * Automatically displays the selected language.
 */
export const Trigger = ({
  children,
  showIcon = true,
  className,
  onClick,
  ref: forwardedRef,
  ...restProps
}: PropsWithChildren<LanguageNavigationTriggerProps>) => {
  const { open, onOpenToggle, contentId, triggerRef, selectedLanguage } = useLanguageNavigationContext('Trigger');

  // Compose refs
  const composedRef = (node: HTMLButtonElement | null) => {
    triggerRef.current = node;
    if (typeof forwardedRef === 'function') {
      forwardedRef(node);
    } else if (forwardedRef) {
      forwardedRef.current = node;
    }
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    onOpenToggle();
    onClick?.(event as MouseEvent<HTMLButtonElement>);
  };

  return (
    <LinkButton
      aria-controls={contentId}
      aria-expanded={open}
      className={clsx('rhc-language-navigation__trigger', className)}
      data-state={open ? 'open' : 'closed'}
      ref={composedRef}
      onClick={handleClick}
      {...restProps}
    >
      {children ?? selectedLanguage}
      {showIcon && <Icon icon={open ? 'chevron-up' : 'chevron-down'} />}
    </LinkButton>
  );
};
Trigger.displayName = 'LanguageNavigation.Trigger';

/* -------------------------------------------------------------------------------------------------
 * Content
 * -----------------------------------------------------------------------------------------------*/

export interface LanguageNavigationContentProps extends Omit<ListboxProps, 'ref'> {
  /** Close content when clicking outside */
  closeOnOutsideClick?: boolean;
  ref?: Ref<HTMLDivElement>;
}

/**
 * Container for language options. Only rendered when the navigation is open.
 * Handles click-outside behavior and ARIA attributes.
 */
export const Content = ({
  children,
  closeOnOutsideClick = true,
  className,
  ref: forwardedRef,
  ...restProps
}: PropsWithChildren<LanguageNavigationContentProps>) => {
  const { open, onOpenChange, contentId, triggerRef } = useLanguageNavigationContext('Content');
  const contentRef = useRef<HTMLDivElement>(null);

  // Compose refs
  const composedRef = (node: HTMLDivElement | null) => {
    contentRef.current = node;
    if (typeof forwardedRef === 'function') {
      forwardedRef(node);
    } else if (forwardedRef) {
      forwardedRef.current = node;
    }
  };

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (!open || !closeOnOutsideClick) return;
      const target = event.target as Node;
      const isOutsideContent = contentRef.current && !contentRef.current.contains(target);
      const isOutsideTrigger = triggerRef.current && !triggerRef.current.contains(target);

      if (isOutsideContent && isOutsideTrigger) {
        onOpenChange(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, closeOnOutsideClick, onOpenChange, triggerRef]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (!open) return;
      if (event.key === 'Escape') {
        onOpenChange(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open, onOpenChange, triggerRef]);

  if (!open) return null;

  return (
    <div
      className={clsx('rhc-language-navigation__content', className)}
      data-state={open ? 'open' : 'closed'}
      id={contentId}
      ref={composedRef}
      {...restProps}
    >
      <ul>{children}</ul>
    </div>
  );
};
Content.displayName = 'LanguageNavigation.Content';

/* -------------------------------------------------------------------------------------------------
 * Option
 * -----------------------------------------------------------------------------------------------*/

export interface LanguageNavigationOptionProps extends Omit<ListboxOptionProps, 'ref' | 'selected'> {
  /** The language code (e.g., 'nl', 'en') */
  lang: string;
  /** The language name in that language (e.g., 'Nederlands', 'English') */
  languageName: string;
  /** The language name in the selected language (e.g., 'Dutch', 'Engels') */
  localLanguageName?: string;
  /** Link href for navigation */
  href: string;
  /** Close content after selecting this option */
  closeOnSelect?: boolean;
  ref?: Ref<HTMLLIElement>;
}

/**
 * Individual language option. Displays the language name and optionally the local translation.
 * Handles selection state and close-on-select behavior.
 */
export const Option = ({
  children,
  lang,
  languageName,
  localLanguageName,
  href,
  closeOnSelect = true,
  className,
  onClick,
  ref,
  ...restProps
}: PropsWithChildren<LanguageNavigationOptionProps>) => {
  const { selectedLanguage, onLanguageChange, onOpenChange } = useLanguageNavigationContext('Option');
  const isSelected = languageName === selectedLanguage;

  const handleClick = (event: MouseEvent<HTMLLIElement>) => {
    onLanguageChange(languageName);
    if (closeOnSelect) {
      onOpenChange(false);
    }
    onClick?.(event);
  };

  return (
    <li
      ref={ref}
      className={clsx(
        'utrecht-listbox__option utrecht-listbox__option--html-li',
        {
          'utrecht-listbox__option--selected': isSelected,
        },
        className,
      )}
      onClick={handleClick}
      {...restProps}
    >
      {children ?? (
        <Link className="rhc-language-navigation__link" href={href}>
          <span lang={lang}>{languageName}</span>
          {!isSelected && localLanguageName && (
            <span className="rhc-language-navigation__local-language"> ({localLanguageName})</span>
          )}
        </Link>
      )}
    </li>
  );
};
Option.displayName = 'LanguageNavigation.Option';

/* -------------------------------------------------------------------------------------------------
 * Compound Component Export
 * -----------------------------------------------------------------------------------------------*/

export const LanguageNavigation = {
  Root,
  Trigger,
  Content,
  Option,
};
