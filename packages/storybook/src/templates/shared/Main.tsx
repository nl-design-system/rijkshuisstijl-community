import type { HTMLAttributes, PropsWithChildren } from 'react';

export const Main = ({ children, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLElement>>) => {
  return (
    <main id="main" tabIndex={-1} {...restProps}>
      {children}
    </main>
  );
};
