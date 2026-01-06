import './App.css';
import { Card, Hero, Link, PageContent, Paragraph} from '@rijkshuisstijl-community/components-react';
import { PageBody } from '@utrecht/page-body-react';
import { Footer } from './Footer';
import { Header } from './Header';
import { InDePraktijk } from './InDePraktijk';
import { LeesEnLeer } from './LeesEnLeer';
import '@rijkshuisstijl-community/design-tokens/dist/index.css';
import '@rijkshuisstijl-community/components-css/dist/index.css';

function App() {
  return (
    <>
      <Header />
      <PageBody className="rhc-page-content__container">
        <PageContent className="rhc-page-content">
          <Hero
            borderRadiusCorner="start-start"
            heading="Rijkshuisstijl Community Design System"
            imageAlt="Tulip field"
            imageSrc="src/assets/placeholder.jpg"
          />

          <div className="rhc-column-layout__paragraph">
            <Paragraph>
              De Rijkshuisstijl Community is een samenwerkingsverband om{' '}
              <Link inline href="#">
                NL Design System-componenten
              </Link>{' '}
              te gebruiken voor projecten die moeten voldoen aan de Rijkshuisstijl.
            </Paragraph>
            <Paragraph>
              De community bestaat uit organisaties van de centrale overheid van Nederland en leveranciers die zijn
              ingehuurd voor het ontwikkelen van websites en apps. Doe jij ook mee?
            </Paragraph>
          </div>

          <div className="rhc-card-doelen">
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
        </PageContent>
        <Footer />
      </PageBody>
    </>
  );
}

export default App;
