<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community link component

Met de link maak je navigatie mogelijk naar een gerelateerde pagina.

## Activeren met _touch_

Veel gebruikers activeren de link door te klikken op een _touch screen_. Deze gebruikers zien niet de _hover_ state van een link, dus een link moet ook duidelijk herkenbaar zijn zonder ooit het design van de _hover_ state te zien.

## Activeren met toetsenbord

Sommige gebruikers gebruiken het toetsenbord om telkens met één druk op de knop naar de volgende link te gaan. De `focus-visible` variant moet daarom opvallend zijn, zodat je weet welke link je kunt activeren met `Enter`. Links moet je kunnen activeren met `Enter`, maar niet met `Space`.

## Activeren met een muis

Gebuikers met een muis kunnen de _hover_ state zien wanneer de muisaanwezer over de link heen beweegt. Links met een `title` attribuut kunnen dan een tooltip tonen die in de weg zit (gebruik daarom geen `title` attribuut).

Gebruikers die zowel toetsenbord als muis gebruiken moeten kunnen onderscheiden welke link focus heeft, en welke de _hover_ state heeft.

## Activeren met een _screen reader_

Sommige gebruikers gebruiken een lijst van alle links op een pagina, en kiezen een link uit op basis van de link-tekst. Deze gebruikers bekijken niet de hele pagina, en zien niet altijd de link in de context van de omliggende tekst. Daarom is het belangrijk dat de link-tekst op zichzelf duidelijk maakt welke pagina je opent. Om de juiste link te kunnen kiezen, is het ook belangrijk dat niet dezelfde link-tekst wordt gebruikt voor verschillende links. Gebruik dus niet "Lees meer" als link-tekst, die tekst is meestal niet uniek op een pagina en is onduidelijk zonder context.

## Terug met de _Back button_

Na het activeren van een link, moet een gebruiker weer terug kunnen naar de vorige pagina. Gebruikers doen dat met bijvoorbeeld de _back button_ van de browser, of met een _swipe gesture_ op een _touch screen_.

Als je gewoon `<a href="...">` in HTML gebruikt dan werkt de back button zoals het hoort. Met extra code kun je de back button onbedoeld kapot maken. Als je het `target` attribuut gebruikt, dan werkt de _back button_ niet (bijvoorbeeld: `target="_blank"`).

Als je een _single page app_ maakt moet je goed testen dat de back button nog goed werkt. Wanneer je de `click` event van de link stopt met `event.preventDefault()` en met script een eigen navigatie maakt, dan moet je de [History API](https://developer.mozilla.org/en-US/docs/Web/API/History) gebruiken om een even goede ervaring te bieden als gewone links in HTML.

## Link versus button

Links worden vooral gebruikt om te navigeren en verschijnen dan ook in of direct na een zin.

Buttons worden gebruikt voor acties, zoals 'toevoegen', 'sluiten' of 'opslaan'.

### Relevante WCAG regels

- [WCAG 1.4.1](https://www.w3.org/TR/WCAG21/#use-of-color): een link is niet voor iedereen duidelijk herkenbaar wanneer je alleen kleur gebruikt. Gebruik ook onderstreping om de link duidelijk te maken.
- [WCAG 1.4.3](https://www.w3.org/TR/WCAG21/#contrast-minimum)
- [WCAG 2.4.4](https://www.w3.org/TR/WCAG21/#link-purpose-in-context)
- [WCAG 2.5.3](https://www.w3.org/TR/WCAG21/#label-in-name)
- [WCAG 3.1.2](https://www.w3.org/TR/WCAG21/#language-of-parts)
