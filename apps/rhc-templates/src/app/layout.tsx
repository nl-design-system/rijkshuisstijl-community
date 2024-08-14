import { Document } from '@utrecht/component-library-react';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import '@rijkshuisstijl-community/design-tokens/dist/index.css';
import '@rijkshuisstijl-community/components-css/index.scss';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rijkshuisstijl demo',
  description: 'Demo met NL Design System.',
};
const RHCTheme = ({ children }: PropsWithChildren<{}>) => <div className="rhc-theme">{children}</div>;

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html lang="nl">
      <body>
        <div className="information">
          <div className="unstarted">Elemententen die nog helemaal geen styling hebben zijn met rood omgeven</div>
          <div className="unfinished">
            Elementen die al styling hebben maar die nog niet helemaal af zijn zijn met geel omgeven
          </div>
          <div>
            Elementen die niet met een kleur zijn omgeven zijn af, let op: dit betekent niet per se dat ze ook in
            storybook staan.
          </div>
        </div>
        <RHCTheme>
          <Document>{children}</Document>
        </RHCTheme>
      </body>
    </html>
  );
}
