import { Icon } from '@utrecht/component-library-react';
import { PropsWithChildren } from 'react';

export const IconStart = ({ children }: PropsWithChildren<{}>) => (
  <Icon className="utrecht-icon--nldoc-start">{children}</Icon>
);

export const IconEnd = ({ children }: PropsWithChildren<{}>) => (
  <Icon className="utrecht-icon--nldoc-end">{children}</Icon>
);

/**
 * Nieuwe icons toevoegen:
 * - verwijder de `width` en `height` attributen
 * - fill="currentColor"
 **/
export const IconMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" fill="currentColor" viewBox="0 0 48 48">
    <path d="m2 8v4.199l18.801 11.402c2 1.199 4.398 1.199 6.199 0l19-11.402v-4.199zm18.801 20-18.801-11.398v21.398h44v-21.398l-18.801 11.398c-2 1.199-4.398 1.199-6.398 0zm0 0" />
  </svg>
);

export const IconExterneLink = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" fill="currentColor" viewBox="0 0 48 48">
    <path d="m32 40h-24v-24h12v-6h-15.801a2.22 2.22 0 0 0 -2.199 2.199v31.602a2.22 2.22 0 0 0 2.199 2.199h31.602a2.22 2.22 0 0 0 2.199-2.199v-15.801h-6zm11.199-35.199c-.598-.602-1.199-.801-2-.602l-16.801 1.801c-1.199.199-2.199 1.199-2.199 2.398s1 2.203 2.199 2.402l7.402.598-9.402 9.402c-1.598 1.598-.797 3.199.402 4.398s2.801 2 4.398.402l9.402-9.402.598 7.402c.199 1.199 1.199 2.199 2.402 2.199s2.199-1 2.398-2.199l1.801-16.801c.199-.801-.199-1.402-.602-2zm0 0" />
  </svg>
);
