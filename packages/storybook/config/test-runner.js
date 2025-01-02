import { checkA11y, injectAxe } from 'axe-playwright';

export async function preVisit(page) {
  await injectAxe(page);
}
export async function postVisit(page) {
  await checkA11y(page, '#storybook-root', {
    verbose: false,
  });
}
