/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { IconButton } from '@rijkshuisstijl-community/button-react';
import { Heading } from '@rijkshuisstijl-community/heading-react';
import clsx from 'clsx';
import { type DialogHTMLAttributes, type MouseEvent, type ReactNode, type Ref, useId } from 'react';

export interface ModalDialogProps extends DialogHTMLAttributes<HTMLDialogElement> {
  /** De titel van de dialog. */
  heading: ReactNode;
  /** Het label voor de sluitknop. */
  closeButtonLabel?: string;
  /** Inhoud voor de footer, vaak een of meer knoppen. */
  footer?: ReactNode;
  ref?: Ref<HTMLDialogElement>;
}

const closeDialog = (event: MouseEvent<HTMLButtonElement>): void => {
  event.currentTarget.closest('dialog')?.close();
};

const openDialog = (id: string): void => {
  document.querySelector<HTMLDialogElement>(id)?.showModal();
};

const ModalDialogRoot = ({
  ref,
  children,
  className,
  closeButtonLabel = 'Sluiten',
  footer,
  heading,
  ...restProps
}: ModalDialogProps) => {
  const headingId = useId();

  return (
    <dialog aria-labelledby={headingId} className={clsx('ams-dialog', className)} ref={ref} {...restProps}>
      <header className="ams-dialog__header">
        <Heading appearanceLevel={4} id={headingId} level={1}>
          {heading}
        </Heading>
        <IconButton appearance="secondary-action-button" icon="kruis" label={closeButtonLabel} onClick={closeDialog} />
      </header>
      <div className="ams-dialog__body">{children}</div>
      {footer ? <footer className="ams-dialog__footer">{footer}</footer> : null}
    </dialog>
  );
};

ModalDialogRoot.displayName = 'ModalDialog';

/**
 * Modal Dialog van de Rijkshuisstijl Community. Rendert een native `<dialog>` met de dialoog-CSS
 * van de Gemeente Amsterdam en een eigen Heading en sluitknop. Open via `ModalDialog.open('#id')`
 * (gebruikt `showModal()` voor een modale dialog met focus-trap) en sluit via de sluitknop of
 * `ModalDialog.close(event)`.
 */
export const ModalDialog = Object.assign(ModalDialogRoot, {
  close: closeDialog,
  open: openDialog,
});
