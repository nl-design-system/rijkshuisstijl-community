import { HeroProps } from '@rijkshuisstijl-community/components-react';

declare module 'rhc-hero' {
  export class RhcHero extends HTMLElement {
    props: HeroProps;
  }
}
