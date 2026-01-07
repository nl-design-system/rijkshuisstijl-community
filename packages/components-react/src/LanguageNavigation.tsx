/**
 * @license EUPL-1.2
 * Copyright (c) 2025 Community for NL Design System
 */

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
  useMemo,
  useRef,
  useState,
} from 'react';
import { Icon } from './Icon';
import { Link } from './Link';
import { LinkButton, LinkButtonProps } from './LinkButton';

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

  // Memoize context value
  const value: LanguageNavigationContextValue = useMemo(
    () => ({
      open,
      onOpenChange,
      onOpenToggle,
      selectedLanguage,
      onLanguageChange,
      contentId,
      triggerRef,
    }),
    [open, onOpenChange, onOpenToggle, selectedLanguage, onLanguageChange, contentId],
  );

  return (
    <LanguageNavigationContext value={value}>
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

export interface LanguageNavigationContentProps extends Omit<HTMLAttributes<HTMLUListElement>, 'id'> {
  /** Close content when clicking outside */
  closeOnOutsideClick?: boolean;
  ref?: Ref<HTMLUListElement>;
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
  const contentRef = useRef<HTMLUListElement>(null);

  // Compose refs
  const composedRef = (node: HTMLUListElement | null) => {
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
    <ul
      className={clsx('rhc-language-navigation__list', className)}
      data-state={open ? 'open' : 'closed'}
      id={contentId}
      ref={composedRef}
      {...restProps}
    >
      {children}
    </ul>
  );
};
Content.displayName = 'LanguageNavigation.Content';

/* -------------------------------------------------------------------------------------------------
 * Item
 * -----------------------------------------------------------------------------------------------*/

interface LanguageNavigationItemBaseProps {
  /** The language code (e.g., 'nl', 'en') */
  lang: string;
  /** The language name in that language (e.g., 'Nederlands', 'English') */
  languageName: string;
  /** The language name in the selected language (e.g., 'Dutch', 'Engels') */
  localLanguageName?: string;
  /** Close content after selecting this item */
  closeOnSelect?: boolean;
  className?: string;
  ref?: Ref<HTMLLIElement>;
}

interface LanguageNavigationItemLinkProps extends LanguageNavigationItemBaseProps {
  /** Link href for URL-based navigation */
  href: string;
  onClick?: never;
}

interface LanguageNavigationItemButtonProps extends LanguageNavigationItemBaseProps {
  /** Click handler for programmatic navigation */
  // eslint-disable-next-line no-unused-vars
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  href?: never;
}

export type LanguageNavigationItemProps = LanguageNavigationItemLinkProps | LanguageNavigationItemButtonProps;

/**
 * Individual language item. Displays the language name and optionally the local translation.
 * Handles selection state and close-on-select behavior.
 *
 * Renders as a link when `href` is provided (for URL-based navigation),
 * or as a button when `onClick` is provided (for programmatic navigation).
 */
export const Item = ({
  children,
  lang,
  languageName,
  localLanguageName,
  closeOnSelect = true,
  className,
  ref,
  ...restProps
}: PropsWithChildren<LanguageNavigationItemProps>) => {
  const { selectedLanguage, onLanguageChange, onOpenChange } = useLanguageNavigationContext('Item');
  const isSelected = languageName === selectedLanguage;

  const handleSelect = () => {
    onLanguageChange(languageName);
    if (closeOnSelect) {
      onOpenChange(false);
    }
  };

  const handleLinkClick = () => {
    handleSelect();
    // Don't prevent default - let the link navigate
  };

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    handleSelect();
    restProps.onClick?.(event);
  };

  const content = children ?? (
    <>
      <span lang={lang}>{languageName}</span>
      {!isSelected && localLanguageName && <span> ({localLanguageName})</span>}
    </>
  );

  const isLink = 'href' in restProps && restProps.href !== undefined;

  return (
    <li
      ref={ref}
      className={clsx(
        'rhc-language-navigation__list__item rhc-language-navigation__list__item--html-li',
        {
          'rhc-language-navigation__list__item--selected': isSelected,
        },
        className,
      )}
    >
      {isLink ? (
        <Link
          aria-current={isSelected ? 'page' : undefined}
          className="rhc-language-navigation__link"
          href={(restProps as LanguageNavigationItemLinkProps).href}
          onClick={handleLinkClick}
        >
          {content}
        </Link>
      ) : (
        <button
          aria-pressed={isSelected}
          className="rhc-language-navigation__link rhc-link"
          type="button"
          onClick={handleButtonClick}
        >
          {content}
        </button>
      )}
    </li>
  );
};
Item.displayName = 'LanguageNavigation.Item';

/* -------------------------------------------------------------------------------------------------
 * Compound Component Export
 * -----------------------------------------------------------------------------------------------*/

export const LanguageNavigation = {
  Root,
  Trigger,
  Content,
  Item,
};
