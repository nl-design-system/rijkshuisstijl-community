import { Heading } from '@rijkshuisstijl-community/components-react';
import PageLayoutTwoColumnSidenav from '../../../../PageLayoutTwoColumnSidenav';

export default function Page() {
  return (
    <PageLayoutTwoColumnSidenav>
      <div className="rhc-margin-block-end-wrapper">
        <Heading level={1}>Start-thema</Heading>
      </div>
    </PageLayoutTwoColumnSidenav>
  );
}
