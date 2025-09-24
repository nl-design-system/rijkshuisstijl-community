import { Component } from '@angular/core';

@Component({
  selector: 'rhc-back-to-top',
  imports: [],
  templateUrl: './back-to-top.component.html',
})
export class BackToTopComponent {
  scrollBackToTop = (event: MouseEvent) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const targetElement = event.currentTarget as HTMLAnchorElement;
    const targetSelector = targetElement.getAttribute('href');
    if (!targetSelector) return;
    const $target = document.querySelector(targetSelector) as HTMLElement | null;
    if (!$target) return;
    $target.focus({ preventScroll: true }); // Ensure target is focusable, ie via tabindex={-1} on #main
  };
}
