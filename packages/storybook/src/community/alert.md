<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community alert component

[NL design system](https://www.nldesignsystem.nl/alert/) | [Figma](https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1195-4201&t=n1djYpmvDCKmAEUi-0) | [GitHub](https://github.com/nl-design-system/rijkshuisstijl-community/issues/472)

De alert component is er voor berichten die de gebruiker snel moet weten, omdat ze belangrijk zijn voor het uitvoeren van de huidige taak. De alert is alleen voor eenvoudige berichten. Gebruik in de alert geen buttons, geen formulier-componenten en geen complexe opmaak zoals tabellen.

Let op: de alert component gebruiken kan essentieël zijn voor gebruikers van een schermvoorlezer, maar onjuist gebruik kan heel erg vervelend zijn.

Gebruik niet een alert voor een algemene aankondiging die op meerdere pagina's staat, als het niet per se relevant is voor de huidige taak van de bezoeker. De alert wordt door schermvoorlezers als eerste voorgelezen op elke pagina waar de alert staat, het kan lastig zijn de website te gebruiken als de schermlezer elke keer wordt geblokkeerd met steeds dezelfde melding. Gebruik in die situaties de notification banner component.

## Usage

- Als je wilt de Alert gebruiken met je eigen `children`

```tsx
import { Alert, Heading, Paragraph } from '@rijkshuisstijl-community/components-react';

<Alert type="info">
  <div className="rhc-alert-container">
    <IconInfoCircle className="rhc-alert-container__icon rhc-alert-container__icon-info " />
    <div>
      <Heading level={3}>Heading</Heading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *</Paragraph>
    </div>
  </div>
</Alert>;
```

- Als je wilt de Alert gebruiken met een `type` en defualt `children`

```tsx
import { Alert } from '@rijkshuisstijl-community/components-react';

<Alert
  heading="Heading"
  headingLevel={3}
  icon="info"
  textContent="Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *"
  type="info"
/>;
```
