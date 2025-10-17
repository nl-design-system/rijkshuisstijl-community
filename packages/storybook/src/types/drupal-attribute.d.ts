/* eslint-disable no-unused-vars */
declare module 'drupal-attribute' {
  export default class DrupalAttribute {
    constructor(data?: Record<string, any>);
    addClass(...classes: string[]): this;
    removeClass(...classes: string[]): this;
    setAttribute(name: string, value: any): this;
    removeAttribute(name: string): this;
    hasClass(className: string): boolean;
    toString(): string;
  }
}
