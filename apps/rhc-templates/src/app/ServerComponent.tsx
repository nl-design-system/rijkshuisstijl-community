import { Paragraph } from '@rijkshuisstijl-community/components-react/paragraph';

export default function ServerComponent() {
  if (globalThis.window === undefined) {
    console.log('Paragraph is on server side');
  } else {
    console.log('Paragraph is on client side');
  }
  return <Paragraph>serverside rendered</Paragraph>;
}
