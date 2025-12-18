import './LeesEnLeer.css';
import { CardAsLink, Heading } from '@rijkshuisstijl-community/components-react';

export function LeesEnLeer() {
  return (
    <>
      <Heading appearanceLevel={2} level={2}>
        Lees en leer
      </Heading>

      <div className="card-layout">
        <CardAsLink
          description="We zijn blij dat je ons team komt versterken. Met deze app helpen we bij de voorbereiding op je eerste dag en de eerste weken dat je aan het werk bent. Zo vind je snel je weg binnen onze organisatie. Doorloop de app waar en wanneer jij wilt. Je ziet op deze pagina ook een aantal reminders staan, jouw buddy kan jou helpen met deze acties.
 "
          heading="WELKOM!"
          href="#"
          linkLabel="Link label"
          metadata="Logius/KOOP"
          title="Card Title"
        />
        <CardAsLink
          description="Mee ontwikkelen aan NL Design System of gebruik maken van bestaande compionenten? Als developer vind je hier alle documentatie die je nodig hebt om te beginnen."
          heading="Developer Handboek!"
          href="#"
          linkLabel="Link label"
          metadata="Logius/KOOP"
          title="Card Title"
        />
        <CardAsLink
          description="Storybook is een overzicht van al onze componenten en templates in verschillende frameworks, handig voor zowel designers als developers om snel te zien hoe iets eruitziet en werkt ."
          heading="Rijkshuisstijl Community Storybook"
          href="#"
          linkLabel="Link label"
          metadata="Logius/KOOP"
          title="Card Title"
        />

        <CardAsLink
          description="Voor het inzichtelijker maken vandesih=gn keuzes, gebruiken we GitHub Discussions. Feedback op de hierin voorgestelde keuzes(ook bijv. een korte 'akkord') is zeer welkom.Het delen van reeds zelfgemaakte design keuzeswordt ook
         "
          heading="Rijkshuisstijl styling implementatie GitHub discussies"
          href="#"
          linkLabel="Link label"
          metadata="Logius/KOOP"
          title="Card Title"
        />
        <CardAsLink
          description="We werken toe naar een centrale JSON met design tokens, waarmee je eenvoudig componenten uit het NL Design System kunt stijlen volgens jouw Rijkshuisstijl - deelidentiteit."
          heading="Design Tokens"
          href="#"
          linkLabel="Link label"
          metadata="Logius/KOOP"
          title="Card Title"
        />
        <CardAsLink
          description="Met deze aanpak maken we de beste en meest bruikbare componenten , patronen en richtlijnen te maken. Elk nieuw onderdeel volgt het estafette model en beweegt zich in eensamenwerking tussen het kernteam en de community van begin tot eind door dit model."
          heading="Estafettemodel"
          href="#"
          linkLabel="Link label"
          metadata="Logius/KOOP"
          title="Card Title"
        />
      </div>
    </>
  );
}
