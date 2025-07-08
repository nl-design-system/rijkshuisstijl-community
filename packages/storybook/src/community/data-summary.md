<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Data Summary component

Lijst met eigenschappen en bijbehorende data over een onderwerp.

## Usage

```jsx
import { DataSummary, DataSummaryItem } from '@rijkshuisstijl-community/components-react';

<DataSummary>
  <DataSummaryItem itemKey="Soort" itemValue="Reuzenpanda" />
  <DataSummaryItem href="#" itemKey="Rijk" itemValue="Animalia (Dieren)">
    Bekijk alle dieren
    <Icon icon="externe-link" />
  </DataSummaryItem>
  <DataSummaryItem itemKey="Klasse" itemValue="Mammalia (Zoogdieren)" />
</DataSummary>;
```
