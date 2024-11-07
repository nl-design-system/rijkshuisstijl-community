import { Document } from '@utrecht/component-library-react';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import '@utrecht/component-library-css';
import '@rijkshuisstijl-community/components-css/dist/index.css';
import '@rijkshuisstijl-community/rivm-design-tokens/dist/theme.css';
import './globals.css';

export const metadata: Metadata = {
  title: "Risico's van stoffen - RIVM",
  description: 'Demo met NL Design System.',
};
const RivmTheme = ({ children }: PropsWithChildren<{}>) => <div className="rivm-theme">{children}</div>;

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html lang="nl">
      <body>
        <RivmTheme>
          <Document>{children}</Document>
        </RivmTheme>
      </body>
    </html>
  );
}
