import { IconCopy } from '@tabler/icons-react';
import { Button } from '@utrecht/component-library-react';
import { DesignTokenBadge } from '../DesignTokenBadge';
import './index.css';

export const CopyDesignTokenButton = ({ path }: { path: string[] }) => (
  <Button
    appearance="subtle-button"
    className="rhc-button rhc-button--rhc-fit-content"
    onClick={() => {
      navigator.clipboard.writeText(`var(--${path.join('-')})`);
    }}
  >
    <DesignTokenBadge path={path} />
    <IconCopy />
  </Button>
);
