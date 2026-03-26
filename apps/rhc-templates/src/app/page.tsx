import type { Metadata } from 'next';
import ServerComponent from './ServerComponent';
import ClientComponent from './ClientComponent';

export const metadata: Metadata = {
  description: 'Homepage template voor de Rijkshuisstijl Community',
};

export default function Page() {
  return (
    <>
      <ClientComponent />
      <ServerComponent />
    </>
  );
}
