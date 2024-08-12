'use client';

import { Logo } from '@rijkshuisstijl-community/components-react';
import {
  BreadcrumbNav,
  BreadcrumbNavLink,
  FormField,
  Heading,
  Link,
  Paragraph,
  Textbox,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react';
import { DateInput } from '@amsterdam/design-system-react';

export default function Form() {
  return (
    <>
      <main>
        <Logo organisation="Voorbeeld organisatie" subtitle="Voorbeeld sub-title"></Logo>
        <div className="container page-content">
          <div className="unstarted">
            <BreadcrumbNav>
              <BreadcrumbNavLink href="/" rel="home" index={0}>
                Home
              </BreadcrumbNavLink>
              <BreadcrumbNavLink href="/a/" index={1}>
                Niveau 1
              </BreadcrumbNavLink>
              <BreadcrumbNavLink href="/a/b/" rel="up" index={2}>
                Niveau 2
              </BreadcrumbNavLink>
            </BreadcrumbNav>
          </div>
          <div className="unstarted">
            <Heading level={1}>Formulier voor vragen over Sisa</Heading>
          </div>
          <Paragraph>Heeft u vragen over Single information, Single audit (SiSa)?</Paragraph>
          <Paragraph>Gebruik dan het formulier hieronder.</Paragraph>
          <br />
          <Paragraph>Mogelijke vragen:</Paragraph>
          <div className="unstarted">
            <UnorderedList>
              <UnorderedListItem>Hoe moet ik extra regels toevoegen bij de macro-versie?</UnorderedListItem>
              <UnorderedListItem>Er zitten fouten in het Excel bestand of de macro-versie?</UnorderedListItem>
              <UnorderedListItem>Macro bestand werkt niet</UnorderedListItem>
              <UnorderedListItem>Hierziene aanleveringen</UnorderedListItem>
              <UnorderedListItem>Tabel van fouten en onzekerheden</UnorderedListItem>
              <UnorderedListItem>Inloggegevens CBS</UnorderedListItem>
              <UnorderedListItem>Aanlevering CBS</UnorderedListItem>
              <UnorderedListItem>Controle verklaring</UnorderedListItem>
              <UnorderedListItem>Hoe leg ik verantwoording af?</UnorderedListItem>
            </UnorderedList>
          </div>
          <br />
          <Paragraph>
            Lees verder over de{' '}
            <span className="unstarted">
              <Link href="#">verantwoordingsmethode SiSa</Link>
            </span>
            .
          </Paragraph>
          <form>
            <div className="unstarted">
              <FormField label="Naam">
                <Textbox required></Textbox>
              </FormField>
            </div>
            <div className="unstarted">
              <FormField label="Organisatie">
                <Textbox></Textbox>
              </FormField>
            </div>
            <div className="unstarted">
              <FormField label="E-mailadres">
                <Textbox type="email"></Textbox>
              </FormField>
            </div>
            <div className="unstarted">
              <FormField label="Telefoonnummer">
                <Textbox type="tel"></Textbox>
              </FormField>
            </div>
            <div className="unstarted">
              <FormField label="Organisatie">
                <DateInput></DateInput>
              </FormField>
            </div>
            <div className="unstarted">
              <FormField label="Om welke uitkering gaat het?">
                <Paragraph>Bijvoorbeeld E27B</Paragraph>
                <Textbox></Textbox>
              </FormField>
            </div>
            <div className="unstarted">
              <FormField label="">
                <Paragraph className="utrecht-form-field__label">Om welke indicator gaat het?</Paragraph>
                <Paragraph className="utrecht-form-field__optional">Niet verplicht</Paragraph>
                <Paragraph className="utrecht-form-field__helptext">Bijvoorbeeld E27B</Paragraph>
                <Paragraph className="utrecht-form-field__input">
                  <Textbox></Textbox>
                </Paragraph>
              </FormField>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
