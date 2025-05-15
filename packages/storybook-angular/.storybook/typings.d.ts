declare module '*.md' {
  const content: string;
  export default content;
}

declare module '*.mdx' {
  import { ComponentType } from 'react';
  const MDXComponent: ComponentType;
  export default MDXComponent;
}
