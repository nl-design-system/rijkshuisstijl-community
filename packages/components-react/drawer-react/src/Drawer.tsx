/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { Drawer as UtrechtDrawer } from '@utrecht/component-library-react';
import React, { useEffect, useRef } from 'react';

export { type DrawerProps } from '@utrecht/component-library-react';

export const Drawer: React.FC<React.ComponentProps<typeof UtrechtDrawer>> = ({ open, modal, onClose, ...props }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Beheer de native <dialog> zelf op basis van `open`/`modal`. React kan het `open`-attribuut niet
  // betrouwbaar met showModal() combineren (drawer blijft niet-modaal en is niet te sluiten), dus
  // roepen we showModal()/show()/close() aan. De guards (dialog.open) voorkomen dubbele calls.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }
    if (open) {
      if (!dialog.open) {
        if (modal) {
          dialog.showModal();
        } else {
          dialog.show();
        }
      }
    } else if (dialog.open) {
      dialog.close();
    }
  }, [open, modal]);

  // `close` bubbelt niet, dus koppel een native listener (React's synthetische onClose is
  // onbetrouwbaar voor dit event). `close` vuurt bij élke sluiting: via de sluitknop
  // (`<form method="dialog">`), via Escape (de UA vuurt `cancel` en sluit dan, wat `close`
  // triggert) en via een programmatische `close()`. Eén listener dekt alles en vuurt één keer.
  useEffect(() => {
    const dialog = dialogRef.current;
    const handler = onClose as EventListener | undefined;
    if (!dialog || !handler) {
      return () => {};
    }
    dialog.addEventListener('close', handler);
    return () => dialog.removeEventListener('close', handler);
  }, [onClose]);

  // De scroll-container is de `.utrecht-drawer__body` (die krijgt in de markup een `tabIndex`
  // voor toetsenbord-scrollen); de drawer zelf hoeft geen tab-stop te zijn.
  return <UtrechtDrawer {...props} ref={dialogRef} />;
};

Drawer.displayName = 'Drawer';
