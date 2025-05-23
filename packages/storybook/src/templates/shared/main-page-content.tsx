import { PageContent } from '@rijkshuisstijl-community/components-react';
import { PropsWithChildren } from 'react';

export default function SharedMainPageContent({ children }: PropsWithChildren<{}>) {
  return (
    <main className="rhc-templates-main-content" id="main" tabIndex={-1}>
      <PageContent className="rhc-templates-page-content">{children}</PageContent>
    </main>
  );
}
