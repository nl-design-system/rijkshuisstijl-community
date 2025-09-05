<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Code Input Group component

## Doel

Dit component kan worden gebruikt wanneer een gebruiker een verificatiecode moet invoeren. Het doel is om de gebruiker  
een gemakkelijke en overzichtelijke manier te bieden om de code in te voeren.

## Kenmerken

- Bij dit component kan je instellen welke karakters worden toegestaan
- Dit component bevat functionaliteit om automatisch de cursor op het volgende input-veldje te zetten bij het typen van een geldig karakter
- Als er een volledige en geldige code in het eerste veld wordt geplakt wordt deze verdeeld over de input-veldjes.
- Als een karakter wordt weggehaald met backspace gaat de cursor automatisch naar het vorige input-veldje.

## Gebruik

Dit component is te gebruiken door de `CodeInputGroup` te importeren. De component heeft één verplichte property genaamd
`codeLength`. Deze property bepaalt het aantal invoervelden dat wordt weergegeven, gebaseerd op de aangegeven waarde
van type `number`.
De values worden bij invoer terug gegeven via de `onChange()` methode.

Gebruik dit component voor validatiecodes.
Gebruik dit component **niet** voor andere numerieke invoervelden zoals telefoonnummers, postcodes, etc.

## Design tokens

```JSON
{
  "rhc": {
    "code-input-group": {
      "column-gap": {
        "value": "{}",
        "type": "spacing"
      }
    },
    "code-input": {
      "size": {
        "value": "{}",
        "type": "spacing"
      }
    }
  }
}
```
