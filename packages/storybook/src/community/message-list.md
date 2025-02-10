<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Message List component

## Usage

```tsx
import { MessageList, MessageListItem } from '@rijkshuisstijl-community/components-react';

<MessageList {...args}>
  <MessageListItem
    description={'Uw pensioenoverzicht'}
    href={'#'}
    label={'Pensioenfonds'}
    metaData={'01-05-2024'}
    withBadge={{ label: 'Nieuw', role: 'status' }}
  />
  <MessageListItem description={'Herinnering APK'} href={'#'} label={'RDW'} metaData={'04-04-2024'} />
  <MessageListItem
    description={'Aanslag OZB'}
    href={'#'}
    label={'Samenwerkings-verband Haaglanden'}
    metaData={'04-04-2024'}
  />
</MessageList>;
```
