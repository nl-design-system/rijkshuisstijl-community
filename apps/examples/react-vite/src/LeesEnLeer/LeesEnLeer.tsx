import './LeesEnLeer.css';
import { CardAsLink, Heading } from '@rijkshuisstijl-community/components-react';

export function LeesEnLeer() {
  return (
    <>
      <Heading level={2}>Lees en leer</Heading>
      <div className="rhc-card-layout">
        <CardAsLink
          description="Een duplicaat van de Voorbeeld bibliotheek van Het NL Design System, waarin de design tokens van het RHC-project zijn toegepast. Deze setup maakt het mogelijk om stijl keuzes te testen en inzichtelijk te maken. Door de design tokens via Token Studio in te laden, kun je tussen thema's schakelen en beoordelen of de stijl aansluit bij jouw organisatie. "
          heading="NL Design System Rijkshuisstijl Figma Bibliotheek"
          href="#"
          linkLabel="Bekijk de NL Design System Rijkshuisstijl Bibliotheek in Figma"
        />
        <CardAsLink
          description="Mee ontwikkelen aan NL Design System of gebruik maken van bestaande compionenten? Als developer vind je hier alle documentatie die je nodig hebt om te beginnen."
          heading="Developer Handboek!"
          href="#"
          linkLabel="Lees hoe je mee ontwikkelt aan het de Rijkshuisstijl Community"
        />
        <CardAsLink
          description="Storybook is een overzicht van al onze componenten en templates in verschillende frameworks, handig voor zowel designers als developers om snel te zien hoe iets eruitziet en werkt ."
          heading="Rijkshuisstijl Community Storybook"
          href="#"
          linkLabel="Bekijk de Rijkshuisstijl Community Storybook"
        />

        <CardAsLink
          description="Voor het inzichtelijker maken vandesih=gn keuzes, gebruiken we GitHub Discussions. Feedback op de hierin voorgestelde keuzes(ook bijv. een korte 'akkord') is zeer welkom.Het delen van reeds zelfgemaakte design keuzeswordt ook"
          heading="Rijkshuisstijl styling implementatie GitHub discussies"
          href="#"
          linkLabel="Ga naar de Rijkshuisstijl styling implementatie GitHub discussies"
        />
        <CardAsLink
          description="We werken toe naar een centrale JSON met design tokens, waarmee je eenvoudig componenten uit het NL Design System kunt stijlen volgens jouw Rijkshuisstijl - deelidentiteit."
          heading="Design Tokens"
          href="#"
          linkLabel="Lees alles over design tokens"
        />
        <CardAsLink
          description="Met deze aanpak maken we de beste en meest bruikbare componenten , patronen en richtlijnen te maken. Elk nieuw onderdeel volgt het estafette model en beweegt zich in eensamenwerking tussen het kernteam en de community van begin tot eind door dit model."
          heading="Estafettemodel"
          href="#"
          linkLabel="Lees over het estafettemodel van NL Design System"
        />
      </div>
    </>
  );
}
