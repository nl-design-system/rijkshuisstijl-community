import 'react';

declare module 'react' {
  export interface CSSProperties {
    [key: `--${'example' | 'denhaag' | 'utrecht' | 'logius'}-${string}`]: string | number | undefined;
  }
}
