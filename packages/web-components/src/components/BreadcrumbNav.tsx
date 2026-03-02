/**
 * @license EUPL-1.2
 * Copyright (c) 2025 Community for NL Design System
 */

import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import {
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavLinkProps,
  BreadcrumbNavProps,
  BreadcrumbNavSeparator,
  BreadcrumbNavSeparatorProps,
} from '@rijkshuisstijl-community/components-react';
import { Icon } from '@rijkshuisstijl-community/icon-react';
import { render } from 'preact';
import { BaseWebComponent } from './BaseComponent';

export type BreadcrumbNavWebComponentAttributes = BreadcrumbNavProps;
export type BreadcrumbNavLinkWebComponentAttributes = BreadcrumbNavLinkProps;
export type BreadcrumbNavSeparatorWebComponentAttributes = BreadcrumbNavSeparatorProps;

interface BreadCrumbNavElement {
  [key: string]: string;
}

export class BreadcrumbNavWebComponent extends BaseWebComponent {
  static override readonly tagName: string = 'rhc-breadcrumb-nav';
  private readonly allowedTypes: string[] = ['LINK', 'SEPARATOR'];

  constructor() {
    super(stylesheet);
  }

  BreadcrumbNavLink({ active, classname, current, href, text, ...restProps }: BreadCrumbNavElement) {
    return (
      <BreadcrumbNavLink
        active={(active === 'true') as BreadcrumbNavLinkWebComponentAttributes['active']}
        className={(classname as BreadcrumbNavLinkWebComponentAttributes['className']) ?? undefined}
        current={(current === 'true') as BreadcrumbNavLinkWebComponentAttributes['current']}
        href={(href as BreadcrumbNavLinkWebComponentAttributes['href']) ?? undefined}
        {...restProps}
      >
        {text}
      </BreadcrumbNavLink>
    );
  }

  BreadcrumbNavSeparator({ icon, ...restProps }: BreadCrumbNavElement) {
    return (
      <BreadcrumbNavSeparator {...restProps}>
        <Icon icon={icon} />
      </BreadcrumbNavSeparator>
    );
  }

  render(): void {
    if (!this.shadowRoot) return;

    const { elements, ...restProps } = this.props;

    if (!elements) throw new Error("Elements wasn't passed upon element.");
    const parsedElements = JSON.parse(elements);
    if (!parsedElements) throw new Error("Elements couldn't be parsed correctly.");

    render(
      <BreadcrumbNav {...restProps}>
        {parsedElements.map(({ type, ...restElementProps }: BreadCrumbNavElement) => {
          if (this.allowedTypes.includes(type) && this.allowedTypes[0] === type) {
            return this.BreadcrumbNavLink(restElementProps);
          } else if (this.allowedTypes.includes(type) && this.allowedTypes[1] === type) {
            return this.BreadcrumbNavSeparator(restElementProps);
          } else {
            throw new Error('Invalid element type given, only support for link / separator');
          }
        })}
      </BreadcrumbNav>,
      this.shadowRoot,
    );
  }
}
