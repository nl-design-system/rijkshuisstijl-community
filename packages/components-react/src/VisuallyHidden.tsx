import { PropsWithChildren } from 'react';

export const VisuallyHidden = ({ children }: PropsWithChildren) => {
  return <span className={'rhc-visually-hidden'}>{children}</span>;
};
