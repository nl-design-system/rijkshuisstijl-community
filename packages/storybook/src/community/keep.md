# Keep Component

De _Keep component_ helpt bij het creëren van vormelementen. Een vormelement is een element dat bestaat uit een rechthoek waarvan één hoek is afgesneden. Een vormelement mag tot maximaal 3 componenten bevatten. Dit component ondersteunt je bij het implementeren van deze functionaliteit. Een _keep_ is een afgeronde border in één van de hoeken van een component.

## Structuur van de Keep Component

De Keep component heeft altijd minimaal één child, wat het basis component is waarop de `keep` wordt toegepast. Stel je voor dat je een afbeelding hebt waarop je het vormelement wilt toepassen.

```HTML
<Keep
  borderRadius="m"
  keepCorner="top-right"
>
  <Image
    alt="Multicolored tulip field"
    height={763}
    src="./placeholder.jpg"
    width={640}
  />
</Keep>
```

In dit voorbeeld wordt de Keep component gebruikt met de keepCorner parameter. Hier moet een string worden doorgegeven die aangeeft in welke hoek de keep moet zijn. Ook moet je meegeven hoe groot de afronding moet zijn.

Als je op de afbeelding een andere component wilt plaatsen, kun je onder de `<Image>` tag een tweede child toevoegen. Deze tweede child wordt automatisch gestapeld op de eerste child zodra je hier een klasse aan toevoegt. Zorg ervoor dat je aan de child doorgeeft waar deze moet staan en hoe groot deze moet zijn.

```HTML
<Keep
  borderRadius="m"
  keepCorner="top-right"
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
    className="rhc-keep-child-bottom-left rhc-keep-child__horizontal-lg"
    variation="pink-background"
  >
    Ik heb het nog nooit gedaan dus ik denk dat ik het wel kan
  </Blockquote>
</Keep>
```

Let vooral op de extra classes `rhc-keep-child-top-left` `rhc-keep-child__horizontal-m` die zijn toegevoegd aan de tweede child component (`<Blockquote>`). Deze zorgen voor de positionering en de grootte van de component.

Opmerking: Je kunt maximaal 3 elementen in het Keep component plaatsen: 1 "basis" en 2 "children".

## Parameters

De keep component heeft twee verplichte parameters:

- keepCorner: In deze parameter geef je aan waar je de afronding op het eerste component wilt hebben. De waardes kunnen zijn; `top-left` `top-right` `bottom-left` `bottom-right`

- borderRadius: Hoeveel pixel de border radius is van het eerste component. `s` `m` `l`. De waarde van de pixel hangt af van de helft van de lint-size. Voor Rijkshuisstijl is dat 24px voor `s`, 48px voor `m` en 72px voor `l`.

**_Voor de overige twee componenten zijn er utilities classes die je kan gebruiken voor de styling._**

**_Waar het component is uitgelijnd_**

| Class                       | Waarde     |
| --------------------------- | ---------- |
| rhc-keep-child-top-left     | Uitlijning |
| rhc-keep-child-top-right    | Uitlijning |
| rhc-keep-child-bottom-left  | Uitlijning |
| rhc-keep-child-bottom-right | Uitlijning |

**_Hoe groot het component horizontaal is_**

| Class                             | Waarde |
| --------------------------------- | ------ |
| rhc-keep-child\_\_horizontal-xs   | 25%    |
| rhc-keep-child\_\_horizontal-sm   | 33%    |
| rhc-keep-child\_\_horizontal-md   | 50%    |
| rhc-keep-child\_\_horizontal-lg   | 66%    |
| rhc-keep-child\_\_horizontal-xl   | 75%    |
| rhc-keep-child\_\_horizontal-full | 100%   |

**_Hoe groot het component verticaal is_**

| Class                           | Waarde |
| ------------------------------- | ------ |
| rhc-keep-child\_\_vertical-xs   | 25%    |
| rhc-keep-child\_\_vertical-sm   | 33%    |
| rhc-keep-child\_\_vertical-md   | 50%    |
| rhc-keep-child\_\_vertical-lg   | 66%    |
| rhc-keep-child\_\_vertical-xl   | 75%    |
| rhc-keep-child\_\_vertical-full | 100%   |
