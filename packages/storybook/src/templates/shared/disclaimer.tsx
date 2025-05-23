import { Alert } from '@rijkshuisstijl-community/components-react';

export default function SharedDisclaimer() {
  return (
    <Alert
      heading="Let op: dit is een voorbeeldpagina!"
      headingLevel={2}
      textContent="Deze pagina is alleen bedoeld om te laten zien hoe Rijkshuisstijl Community-componenten eruitzien en werken. De informatie is niet echt en komt niet van een officiële bron. Sommige onderdelen werken mogelijk (nog) niet zoals op een echte website."
      type="info"
    />
  );
}
