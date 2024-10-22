# Keep Component

De **Keep component** helpt bij het creëren van vormelementen. Een vormelement is een element dat bestaat uit een rechthoek waarvan één hoek is afgesneden. Een vormelement mag tot maximaal 2 keer worden genest. Dit component ondersteunt je bij het implementeren van deze functionaliteit.

## Structuur van de Keep Component

Dit component is net iets anders dan andere componenten, omdat het ook classes bevat die je kan of moet gebruiken op andere componenten binnen het element.

Het Keep element heeft altijd 1 child, wat het basis element is waarop de Keep wordt toegepast. Stel je voor dat je een afbeelding hebt waarop je het vormelement wilt toepassen.

```HTML
<Keep
  borderRadius="m"
  keep="top-right"
>
  <Image
    alt="Multicolored tulip field"
    height={763}
    src="./placeholder.jpg"
    style={{
      marginBottom: '-.5rem'
    }}
    width={640}
  />
</Keep>
```

In dit voorbeeld wordt het Keep component gebruikt met de keep parameter. Hier moet een string worden doorgegeven die aangeeft in welke hoek de Keep moet zijn.

Als je op de afbeelding een andere component wilt plaatsen, kun je onder de `<Image>` tag een tweede child toevoegen. Deze tweede child wordt automatisch gestapeld op de eerste child. Zorg ervoor dat je aan de child doorgeeft waar deze moet staan en hoe groot deze moet zijn.

```HTML
<Keep
  borderRadius="m"
  keep="top-right"
>
  <Image
    alt="Multicolored tulip field"
    height={763}
    src="./placeholder.jpg"
    style={{
      marginBottom: '-.5rem'
    }}
    width={640}
  />
  <Blockquote
    attribution="— Pippi Langkous"
    className="rhc-keep-child-bottom-left rhc-keep-child__horizontal-l"
    variation="pink-background"
  >
    Ik heb het nog nooit gedaan dus ik denk dat ik het wel kan
  </Blockquote>
</Keep>
```

Let vooral op de extra classes `rhc-keep-child-top-left` `rhc-keep-child__horizontal-m` die zijn toegevoegd aan het `<Blockquote>` component. Deze zorgen voor de positionering en de grootte van het component.

Opmerking: Je kunt maximaal 3 elementen in het Keep component plaatsen: 1 "basis" en 2 "children".

## Beschikbare Styling

Voor het hoofdcomponent:
De waarde voor de keep parameter kan zijn: `top-left`, `top-right`, `bottom-left`, of `bottom-right`.

**_Voor de children:_**

| Naam                                     | Waarde                 |
| ---------------------------------------- | ---------------------- |
| rhc-keep-child-top-left                  | Uitlijning             |
| rhc-keep-child-top-right                 | Uitlijning             |
| rhc-keep-child-bottom-left               | Uitlijning             |
| rhc-keep-child-bottom-right              | Uitlijning             |
| .rhc-keep-child\_\_horizontal-s/m/l/full | 25% / 50% / 75% / 100% |
| .rhc-keep-child\_\_vertical-s/m/l/full   | 25% / 50% / 75% / 100% |
