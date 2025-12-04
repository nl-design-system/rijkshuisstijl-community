import { HeadingItemDirective } from './heading-item.directive';

describe('HeadingItemDirective', () => {
  it('should create an instance', () => {
    const directive = new HeadingItemDirective();
    expect(directive).toBeTruthy();
    expect(directive.className).toBe('rhc-nav-bar__heading');
  });
});
