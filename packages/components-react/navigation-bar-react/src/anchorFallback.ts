/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import type { ToggleEvent } from 'react';

/** Zonder CSS anchor positioning: geef de popover de positie van de balk mee als custom properties. */
export const setAnchorFallback = (event: ToggleEvent<HTMLElement>) => {
  if (event.newState !== 'open' || (typeof CSS !== 'undefined' && CSS.supports?.('anchor-name: --a'))) {
    return;
  }

  const popover = event.currentTarget;
  const nav = popover.closest('.rhc-nav-bar');
  if (!nav) {
    return;
  }

  const { top, bottom, left, width } = nav.getBoundingClientRect();
  popover.style.setProperty('--rhc-nav-bar-fallback-top', `${top}px`);
  popover.style.setProperty('--rhc-nav-bar-fallback-bottom', `${bottom}px`);
  popover.style.setProperty('--rhc-nav-bar-fallback-left', `${left}px`);
  popover.style.setProperty('--rhc-nav-bar-fallback-width', `${width}px`);
};
