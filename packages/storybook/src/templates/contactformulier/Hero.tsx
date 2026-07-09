import { Alert, Button, Heading, Icon, Paragraph } from '@rijkshuisstijl-community/components-react';

/**
 * Custom hero-band voor de contactformulier-voorbeeldpagina.
 *
 * Deze compositie (primary-tint banner met afgeronde onderhoek links, een site-naam-badge
 * linksboven en Contact/Menu-knoppen rechtsboven) bestaat nog niet als RHC-component; daarom
 * lokaal opgebouwd uit bestaande componenten, alleen voor deze story.
 */
export const Hero = ({ showNotification = true }: Readonly<{ showNotification?: boolean }>) => {
  return (
    <div className="rhc-example-contactformulier-hero">
      {/* GAP: geen NederlandWereldwijd-logo-asset in RHC; het nederland-map-icoon staat hier als plaatsvervanger. */}
      <div className="rhc-example-contactformulier-hero__sitename rhc-rounded-corner rhc-rounded-corner--size-md rhc-rounded-corner--position-end-end">
        <Icon icon="nederland-map" />
        <span className="rhc-example-contactformulier-hero__sitename-label">NederlandWereldwijd</span>
      </div>

      {/* GAP: een hero action-balk (outline "Contact" + filled "Menu") bestaat niet als component. */}
      <div className="rhc-example-contactformulier-hero__actions">
        <Button iconStart={<Icon icon="telefoon" />} label="Contact" purpose="secondary" />
        <Button iconStart={<Icon icon="menu" />} label="Menu" purpose="primary" />
      </div>

      <div className="rhc-example-contactformulier-hero__content">
        <Heading level={1}>Contactformulier</Heading>
        <Paragraph>
          U kunt uw vraag aan NederlandWereldwijd stellen via het contactformulier. We proberen binnen 5 dagen antwoord
          te geven.
        </Paragraph>
        {/* Figma toont de melding als waarschuwing (let-op-icoon) op de primary-tint; de kleuren
            worden in index.css afgestemd zodat hij niet als standaard-geel opvalt. */}
        {showNotification ? (
          <Alert className="rhc-example-contactformulier-hero__notification" type="warning">
            <Paragraph>
              Door de situatie in het Midden-Oosten kan het tot 14 dagen duren voordat wij uw mail beantwoorden.
            </Paragraph>
          </Alert>
        ) : null}
      </div>
    </div>
  );
};
