<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Message List component

NL design system - geen | [Figma](https://www.figma.com/design/Nv5EsCW9ioWBUSi9m9JqOa/Local---Rijkshuisstijl---Bibliotheek?node-id=4070-5888&node-type=frame&t=xhXU5ugIkPqvOZwt-0) | [GitHub](https://github.com/nl-design-system/rijkshuisstijl-community/issues/556)

## Usage

```tsx
import { MessageList, MessageListItem } from '@rijkshuisstijl-community/components-react';

<MessageList>
  <MessageListItem description={'Uw pensioenoverzicht'} href={'#'} label={'Pensioenfonds'} metaData={'Meta Data'} />
  <MessageListItem description={'Herinnering APK'} href={'#'} label={'RDW'} metaData={'Meta Data'} />
  <MessageListItem
    description={'Aanslag OZB'}
    href={'#'}
    label={'Samenwerkings-verband Haaglanden'}
    metaData={'Meta Data'}
  />
</MessageList>;
```
