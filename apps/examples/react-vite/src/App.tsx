
import '@rijkshuisstijl-community/design-tokens/dist/index.css'; // design tokens importeren
import '@rijkshuisstijl-community/components-css/dist/index.css';
import { Card, PageContent, Image } from '@rijkshuisstijl-community/components-react';

import './App.css';

import { Header } from './Header';
import { Footer } from './Footer';
import { LeesEnLeer } from './LeesEnLeer';
import { KomInContact } from './KomInContact/KomInContact';
import { InDePraktijk } from './InDePraktijk';


function App() {
  return (
    <>
      <Header />
      <div className='page-content-container'>
        <PageContent className="page-content">
          {/* geef alle thema tokens mee aan child components voor styling */}
          <Image alt="Multicolored tulip field" height={425} src="src/placeholder.jpg" width={1280} />

          <div className="card-doelen">
            <Card
              description="Een uitgebreide bibliotheek van herbruikbare componenten. Platform-onafhankelijk met de nieuwe Rijkshuisstijl."
              heading="Efficient"
            />
            <Card
              description=" De community deelt regelmatig kennis, ervaring, updates en verbeteringen."
              heading="Breed gedragen"
            />
            <Card
              description="Consistente gebruikservaring met herbruikbare voorbeeldpagina's"
              heading="Gebruiksvriendelijk"
            />
          </div>

          <InDePraktijk />
          <LeesEnLeer />
          <KomInContact />
          <Footer />
        </PageContent>
      </div>
    </>
  );
}

export default App;
