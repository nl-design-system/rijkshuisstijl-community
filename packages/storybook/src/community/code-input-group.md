<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Code Input Group component

[NL design system](https://www.nldesignsystem.nl/) | [Figma](https://www.figma.com/design/H4hSqpPbvFMLklDZgswwgd/NLDS---Rijkshuisstijl---Templates?node-id=4652-10195&node-type=frame&t=b4RSbycsPxEdIHZ6-0) | [GitHub](https://github.com/nl-design-system/rijkshuisstijl-community/issues/823)

Dit is een Rijkshuisstijl Community Component

## Doel

Dit component kan worden gebruikt wanneer een gebruiker een verificatiecode moet invoeren. Het doel is om de gebruiker  
een gemakkelijke en overzichtelijke manier te bieden om de code in te voeren.

## Gebruik

Dit component is te gebruiken door de `CodeInputGroup` te importeren. De component heeft één verplicht property genaamd
`numberOfDigits`. Deze property bepaalt het aantal invoervelden dat wordt weergegeven, gebaseerd op de aangegeven waarde
van type `number`.

Gebruik dit component voor validatiecodes.
Gebruik dit component **niet** voor andere numerieke invoervelden zoals telefoonnummers, postcodes, etc.

## Design tokens

```JSON
    "rhc": {
      "code-input-group": {
        "column-gap": {
          "value": "{}",
          "type": "spacing"
        }
      }
    }

    "rhc": {
      "code-input": {
        "size": {
          "value": "{}",
          "type": "spacing"
        }
      }
    }
```
