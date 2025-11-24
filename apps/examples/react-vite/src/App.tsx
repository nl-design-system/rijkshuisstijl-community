import { useState } from 'react';
// import viteLogo from '/vite.svg';

import './App.css';
import Body from './Body';
import { Header } from './Header';
import { Footer } from './Footer';
import '@rijkshuisstijl-community/design-tokens/dist/index.css'; // design tokens importeren
import '@rijkshuisstijl-community/components-css/dist/index.css';
import {
  Button,
  Heading,
  PageContent,
  Alert,
  Icon,
  Image,
  ColumnLayout,
  Card,
  CheckboxGroup,
  FormFieldCheckboxOption,
  CardAsLink,
} from '@rijkshuisstijl-community/components-react';
import { Neslihan } from './text';

function App() {
  // const [count, setCount] = useState(0);

  const hello = 100;

  return (
    <>
      <PageContent className="rhc-theme">
        {/* geef alle thema tokens mee aan child components voor styling */}
        <div>
          <Header />
          <Image alt="Multicolored tulip field" height={763} src="src/placeholder.jpg" width={640} className="utrecht-img utrecht-img--photo"/>
        </div>
        <h1>ONBOARDING PROCES BIJ KOOP</h1>
        <Icon icon="home" />
        <Body />

        <div>
          <Heading appearanceLevel={1} level={1}>
          In de praktijk 
        </Heading>

          <ColumnLayout>
              <CardAsLink
            appearance="horizontal"
            heading="React"
            href="#"
            imageAlt="Placeholder Image"
            imageSrc="src/placeholder.jpg"
            title="Card Title"
          />
              <CardAsLink
            appearance="horizontal"
            heading="CSS"
            href="#"
            imageAlt="Placeholder Image"
            imageSrc="src/placeholder.jpg"
            title="Card Title"
          />
              <CardAsLink
            appearance="horizontal"
            heading="Web Components"
            href="#"
            imageAlt="Placeholder Image"
            imageSrc="src/placeholder.jpg"
            title="Card Title"
          />
          
              <CardAsLink
            appearance="horizontal"
            heading="Design Tokens"
            href="#"
            imageAlt="Placeholder Image"
            imageSrc="src/placeholder.jpg"
            title="Card Title"
          />
        
          </ColumnLayout>
      
        </div>

        <div>
           <Heading appearanceLevel={1} level={1}>
          Leer en leer 
          </Heading>

          <Card
            className="rhc-card rhc-card--default" //???
            appearance="default"
            description="We zijn blij dat je ons team komt versterken. Met deze app helpen we bij de voorbereiding op je eerste dag en de eerste weken dat je aan het werk bent. Zo vind je snel je weg binnen onze organisatie. Doorloop de app waar en wanneer jij wilt. Je ziet op deze pagina ook een aantal reminders staan, jouw buddy kan jou helpen met deze acties.
 "
            heading="WELKOM!"
            href="#"
            linkLabel="Link label"
            metadata="Logius/KOOP"
            subheading="We kijken uit naar je komst en wensen je voor nu alvast veel plezier! "
            title="Card Title"
          />
          <Card
            appearance="default"
            description="Mee ontwikkelen aan NL Design System of gebruik maken van bestaande compionenten? Als developer vind je hier alle documentatie die je nodig hebt om te beginnen."
            heading="Developer Handboek!"
            href="#"
            linkLabel="Link label"
            metadata="Logius/KOOP"
            title="Card Title"
          />
          <Card
            appearance="default"
            description="Storybook is een overzicht van al onze componenten en templates in verschillende frameworks, handig voor zowel designers als developers om snel te zien hoe iets eruitziet en werkt ."
            heading="Rijkshuisstijl Community Storybook"
            href="#"
            linkLabel="Link label"
            metadata="Logius/KOOP"
            title="Card Title"
          />
        </div>

        <div>
          <Card
            appearance="default"
            description="Voor het inzichtelijker maken vandesih=gn keuzes, gebruiken we GitHub Discussions. Feedback op de hierin voorgestelde keuzes(ook bijv. een korte 'akkord') is zeer welkom.Het delen van reeds zelfgemaakte design keuzeswordt ook
 "
            heading="Rijkshuisstijl styling implementatie GitHub discussies"
            href="#"
            linkLabel="Link label"
            metadata="Logius/KOOP"
            subheading="We kijken uit naar je komst en wensen je voor nu alvast veel plezier! "
            title="Card Title"
          />
          <Card
            appearance="default"
            description="We werken toe naar een centrale JSON met design tokens, waarmee je eenvoudig componenten uit het NL Design System kunt stijlen volgens jouw Rijkshuisstijl - deelidentiteit."
            heading="Design Tokens"
            href="#"
            linkLabel="Link label"
            metadata="Logius/KOOP"
            title="Card Title"
          />
          <Card
            appearance="default"
            description="Met deze aanpak maken we de beste en meest bruikbare componenten , patronen en richtlijnen te maken. Elk nieuw onderdeel volgt het estafette model en beweegt zich in eensamenwerking tussen het kernteam en de community van begin tot eind door dit model."
            heading="Estafettemodel"
            href="#"
            linkLabel="Link label"
            metadata="Logius/KOOP"
            title="Card Title"
          />
        </div>

        <Alert type="warning">
          {' '}
          <Heading appearanceLevel={5} level={3}>
            Volg alle stapjes goed door! En dan ben jij % {hello} klaar met je nieuwe, gezellige uitdaging!
          </Heading>
        </Alert>
        <ColumnLayout>
          <Heading level={2}>Checklist </Heading>,
          {/* <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum magnam magni expedita modi sit quasi, natus
            nobis sint hic, eum illum quis laboriosam pariatur quo alias eaque qui quae recusandae?
          </Paragraph> */}
          <CheckboxGroup>
            <FormFieldCheckboxOption label="KOOP/ LOOGIUS E-MAIL " />
            <FormFieldCheckboxOption label="Laptop -  Telefoon" />
            <FormFieldCheckboxOption label="VPN" />
            <FormFieldCheckboxOption label="Rijkspas" />
            <FormFieldCheckboxOption label="Azure Devops" />
            <FormFieldCheckboxOption label="Confluence" />
            <FormFieldCheckboxOption label="Rijkspas" />
            <FormFieldCheckboxOption label="P-Direct" />
            <FormFieldCheckboxOption label="Confluence" />
          </CheckboxGroup>
        </ColumnLayout>

        <Heading appearanceLevel={1} level={1}>
          Kom in contact
        </Heading>
        <ColumnLayout>
          <CardAsLink
            appearance="full-bleed"
            description="This card has a background image."
            heading="Slack"
            href="#"
            imageAlt="Placeholder Image"
            imageSrc="/src/placeholder.jpg"
            metadata="Metadata"
            title="Card Title"
          />

          <CardAsLink
            appearance="full-bleed"
            description="This card has a background image."
            heading="Contributers"
            href="#"
            imageAlt="Placeholder Image"
            imageSrc="/src/placeholder.jpg"
            metadata="Metadata"
            title="Card Title"
          />

          <CardAsLink
            appearance="full-bleed"
            description="This card has a background image."
            heading="Kernteam"
            href="#"
            imageAlt="Placeholder Image"
            imageSrc="/src/placeholder.jpg"
            metadata="Metadata"
            title="Card Title"
          />

          <CardAsLink
            appearance="full-bleed"
            description="This card has a background image."
            heading="GitHub Discussies"
            href="#"
            imageAlt="Placeholder Image"
            imageSrc="/src/placeholder.jpg"
            metadata="Metadata"
            title="Card Title"
          />
        </ColumnLayout>

        <Button appearance="primary-action-button">Jij bent klaar! </Button>
        <Neslihan achternaam="Utuk" />
        <div className="card">
          {/* <button onClick={() => setCount((count) => count + 1)}>count is {count}</button> */}
          <p>Ben je klaar voor een nieuwe ontwikkeling en productieproces bij KOOP?</p>
        </div>
        {/* <p className="read-the-docs">Click on the Vite and React logos to learn more</p> */}
        <Footer />
      </PageContent>
    </>
  );
}

export default App;
