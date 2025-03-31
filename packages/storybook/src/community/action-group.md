<!-- @license CC0-1.0 -->

# Richtlijnen

- Plaatsing: De action group wordt meestal horizontaal weergegeven, maar kan ook verticaal worden weergegeven als er onvoldoende ruimte is (bijvoorbeeld op mobiele apparaten of in smalle vensters).
- Gebruik van knoppen: Wanneer een actie belangrijker is dan de andere, geef de belangrijkste actie een prominente stijl (bijvoorbeeld een primaire knop).
- ARIA-rol: De role="group" is van toepassing op de container, om aan te geven dat de acties samen horen. Elke individuele actie heeft de role="button" voor knoppen, of role="link" voor links.

## Anatomie

De `ActionGroup` component bestaat uit de volgende elementen:

- Container (ActionGroup): Dit is de container van de groep, die alle actie-elementen bevat en bepaalt hoe de acties gepositioneerd worden (horizontaal of verticaal).
- Acties (Buttons): Elke actie binnen de groep is een knop (Button).
- Appearance: Elke knop moet een duidelijke stijl hebben. Primaire acties krijgen een opvallende stijl, terwijl secundaire acties een minder prominente stijl hebben.

## Voorbeelden met verkeerde implementatie

Hier zijn enkele veelvoorkomende fouten bij het implementeren van ActionGroup en hoe deze kunnen worden vermeden:

- Niet gerelateerde acties groeperen: Plaats geen acties samen die geen verband met elkaar hebben.

```jsx
<ActionGroup direction="row">
  <Button appearance="primary-action-button">Save</Button>
  <Button appearance="secondary-action-button">Delete User</Button>
</ActionGroup>
```

- Verkeerde children gebruiken

```jsx
// Verkeerd
<ActionGroup direction="row">
  <div>Ongeldig element</div>
  <Button appearance="primary-action-button">Save</Button>
</ActionGroup>

// Correct
<ActionGroup direction="row">
  <Button appearance="primary-action-button">Save</Button>
  <Button appearance="secondary-action-button">Cancel</Button>
</ActionGroup>
```

- Acties zonder duidelijke appearance: Elke actie moet een duidelijke stijl hebben zodat gebruikers het belang van de actie kunnen herkennen.

```jsx
// Verkeerd
<ActionGroup direction="row">
  <Button>Save</Button>
  <Button>Cancel</Button>
</ActionGroup>

// Correct
<ActionGroup direction="row">
  <Button appearance="primary-action-button">Save</Button>
  <Button appearance="secondary-action-button">Cancel</Button>
</ActionGroup>
```
