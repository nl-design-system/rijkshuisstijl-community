/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { HTMLAttributes, PropsWithChildren, useEffect, useRef } from 'react';

const FOCUSABLE_SELECTORS = [
  'a[href]',
  'area[href]',
  'button:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'iframe',
  'object',
  'embed',
  '[contenteditable]',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

export interface FocusTrapProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
  active?: boolean;
}

export const FocusTrap = ({ active = true, children, ...props }: FocusTrapProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active) return undefined;

    const container = containerRef.current;
    if (!container) return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return undefined;

      const focusableElements = [...container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)].filter(
        (el) => !el.closest('[hidden]') && !el.closest('[inert]'),
      );

      if (focusableElements.length === 0) return undefined;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        }
      } else {
        // For some reason, SQ thinks activeElement can never be the same type as lastElement, even though it does not
        // have this problem with firstElement
        // eslint-disable-next-line sonarjs/different-types-comparison
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    container.addEventListener('keydown', handleKeyDown);
    return () => {
      container.removeEventListener('keydown', handleKeyDown);
    };
  }, [active]);

  return (
    <div ref={containerRef} {...props}>
      {children}
    </div>
  );
};
