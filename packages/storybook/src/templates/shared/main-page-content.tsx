import { PageContent } from '@rijkshuisstijl-community/components-react';
import { PropsWithChildren } from 'react';

export default function SharedMainPageContent({ children }: PropsWithChildren<{}>) {
  return (
    <div className="rhc-templates-main-content">
      <PageContent className="rhc-templates-page-content">{children}</PageContent>
    </div>
  );
}
