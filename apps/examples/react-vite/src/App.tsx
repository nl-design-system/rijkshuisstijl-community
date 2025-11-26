import './App.css';
import { Header } from './Header';
import { Footer } from './Footer';
import { LeesEnLeer } from './LeesEnLeer';
import { KomInContact } from './KomInContact/KomInContact';
import { InDePraktijk } from './InDePraktijk';
import '@rijkshuisstijl-community/design-tokens/dist/index.css'; // design tokens importeren
import '@rijkshuisstijl-community/components-css/dist/index.css';

import { Card, PageContent } from '@rijkshuisstijl-community/components-react';

function App() {
  return (
    <>
      <Header/>
      <PageContent className='page-content'>
        {/* geef alle thema tokens mee aan child components voor styling */}
        {/* <RoundedCorner
          position="start-start"
          size="lg"
          style={{
            backgroundImage: 'url(.src/placeholder.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: 'full',
            width: 'full',
          }}
        >
          <RoundedCorner
            position="start-end"
            size="md"
            style={{
              margin: '13rem 3rem 0rem 0rem',
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--rhc-color-primary-500)',
                padding: '3rem 1rem',
              }}
            >
              <span
                style={{
                  color: 'white',
                }}
              >
                Rounded Corner Content
              </span>
            </div>
          </RoundedCorner>
        </RoundedCorner> */}

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
    </>
  );
}

export default App;
