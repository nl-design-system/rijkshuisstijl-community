<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Table component

## Duidelijke koppen

In tabellen staat vaak veel informatie en daarom helpen koppen gebruikers om snel informatie over te slaan die niet relevant is. De data in tabellen kan op drie niveau's koppen bevatten: kop van de tabel (caption), kop van de kolom (column header) en kop van de rij (row header). Het is belangrijk dat je precies de goede HTML gebruikt voor elke kop:

- `<caption>` voor de kop van de tabel
- `<th scope="col">` voor de kop van de kolom
- `<th scope="row">` voor de kop van de rij

## Usage

```jsx
import {
  Table,
  TableHeader,
  TableHeaderCell,
  TableRow,
  TableBody,
  TableCell,
} from '@rijkshuisstijl/community-components';

<Table>
  <TableHeader>
    <TableRow>
      <TableHeaderCell scope="col">Header</TableHeaderCell>
      <TableHeaderCell scope="col">Header</TableHeaderCell>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Label</TableCell>
      <TableCell>Label</TableCell>
    </TableRow>
  </TableBody>
</Table>;
```
