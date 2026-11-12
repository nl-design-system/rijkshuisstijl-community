/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import type { FocusEvent } from 'react';

/**
 * Sluit een open popover zodra de toetsenbordfocus eruit verdwijnt. Light dismiss van
 * de Popover API reageert alleen op Escape en klikken buiten de popover; zonder dit
 * tabt een gebruiker verder naar content die achter het open paneel ligt
 * (WCAG 2.4.11 Focus Not Obscured).
 */
export const hidePopoverOnFocusOut = (event: FocusEvent<HTMLElement>) => {
  const popover = event.currentTarget;
  const next = event.relatedTarget;

  // Geen nieuw focusdoel (bijv. klik op niet-focusbare content of focus naar de browser):
  // dat laten we aan light dismiss over.
  if (!(next instanceof Element) || popover.contains(next) || !popover.matches(':popover-open')) {
    return;
  }

  // De knop die deze popover bestuurt, regelt het sluiten zelf; anders sluit blur de
  // popover en opent de klik op dezelfde knop hem meteen weer.
  if (popover.id && next.closest('[popovertarget]')?.getAttribute('popovertarget') === popover.id) {
    return;
  }

  popover.hidePopover();
};
