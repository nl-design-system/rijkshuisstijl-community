import { PropsWithChildren } from 'react';

export default function SharedMainPageContent({ children }: PropsWithChildren<{}>) {
  return (
    <div className="rhc-templates-main-content">
      <div className="rhc-templates-page-content">{children}</div>
    </div>
  );
}
