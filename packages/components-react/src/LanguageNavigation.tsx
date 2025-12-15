import clsx from 'clsx';
import {
  createContext,
  forwardRef,
  HTMLAttributes,
  MouseEvent,
  MutableRefObject,
  PropsWithChildren,
  Ref,
  RefObject,
  useCallback,
  useContext,
  useId,
  useRef,
  useState,
} from 'react';
import { Icon } from './Icon';
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

export interface LanguageNavigationTriggerProps extends Omit<LinkButtonProps, 'ref'> {
  /** Show chevron icon indicating open/closed state */
  showIcon?: boolean;
  ref?: Ref<HTMLButtonElement>;
}

/**
 * Trigger button that toggles the language navigation content visibility.
 * Automatically displays the selected language and handles ARIA attributes.
 */
export const Trigger = forwardRef<HTMLButtonElement, PropsWithChildren<LanguageNavigationTriggerProps>>(
  ({ children, showIcon = true, className, onClick, ...restProps }, forwardedRef) => {
    const context = useLanguageNavigationContext('Trigger');
    const { open, onOpenToggle, contentId, triggerRef, selectedLanguage } = context;

    // Compose refs
    const composedRef = (node: HTMLButtonElement | null) => {
      (triggerRef as MutableRefObject<HTMLButtonElement | null>).current = node;
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
        {...restProps}
        onClick={handleClick}
      >
        {children ?? selectedLanguage}
        {showIcon && <Icon icon={open ? 'chevron-up' : 'chevron-down'} />}
      </LinkButton>
    );
  },
);
Trigger.displayName = 'LanguageNavigation.Trigger';
