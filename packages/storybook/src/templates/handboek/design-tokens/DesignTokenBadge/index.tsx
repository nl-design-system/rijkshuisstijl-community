import { DataBadge } from '@utrecht/component-library-react';
import './index.css';

export const DesignTokenBadge = ({ path }: { path: string[] }) => (
  <DataBadge className="rhc-design-token-badge">{[...path].join(' ⟩ ')}</DataBadge>
);
