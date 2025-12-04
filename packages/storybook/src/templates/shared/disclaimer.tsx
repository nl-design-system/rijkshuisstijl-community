import { Alert, Heading, Paragraph } from '@rijkshuisstijl-community/components-react';

export default function SharedDisclaimer() {
  return (
    <Alert type="info">
      <Heading appearanceLevel={5} level={2}>
        Let op: dit is een voorbeeldpagina!
      </Heading>
      <Paragraph>
        Deze pagina is alleen bedoeld om te laten zien hoe Rijkshuisstijl Community-componenten eruitzien en werken. De
        informatie is niet echt en komt niet van een officiële bron. Sommige onderdelen werken mogelijk (nog) niet zoals
        op een echte website.
      </Paragraph>
    </Alert>
  );
}
