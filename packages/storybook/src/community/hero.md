<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community hero component

[NL design system](https://www.nldesignsystem.nl/hero/) | [Figma](https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=15708-524&node-type=canvas&t=fXG4KjJRXbo2PG2J-0)

Let op: Zowel `heading` als `subHeading` zijn optioneel, maar als je een `subHeading` toevoegt, moet je ook een `heading` toevoegen. Een Hero-component met alleen een `subHeading` is niet toegestaan.

## Usage

```tsx
import { Hero } from '@rijkshuisstijl-community/components-react';
import { Heading } from './Heading';
import { HeadingGroup } from './HeadingGroup';
import { Image } from './Image';
import { Paragraph } from './Paragraph';

<Hero
  heading="Heading"
  imageAlt="Tullip field"
  imageSrc="https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/main/proprietary/assets/src/placeholder.jpg"
  subHeading="Subtext"
/>;
```
