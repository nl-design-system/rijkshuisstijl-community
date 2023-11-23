/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import {
  DataList,
  DataListItem,
  DataListKey,
  DataListValue,
  Heading1,
  Heading2,
  Link,
  Paragraph,
  SpotlightSection,
} from '@utrecht/component-library-react';

const TemplateLijstStory = () => (
  <div>
    <Heading1>(Epoxyethyl)Benzeen</Heading1>

    <Heading2>Stofgegevens</Heading2>
    <DataList>
      <DataListItem>
        <DataListKey>Stofnaam</DataListKey>
        <DataListValue>(epoxyethyl)benzeen</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListKey>Engelse naam</DataListKey>
        <DataListValue>styrene oxide</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListKey>CAS-nummer</DataListKey>
        <DataListValue>96-09-3</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListKey>EG-nummer</DataListKey>
        <DataListValue>202-476-7</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListKey>ECHA stofinformatie</DataListKey>
        <DataListValue>Substance Infocard(opens in a new tab) *33</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListKey>Aquo-code</DataListKey>
        <DataListValue>12epOxC2yBen</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListKey>SIKB-id</DataListKey>
        <DataListValue>2815</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListKey>Synoniem</DataListKey>
        <DataListValue>fenyloxiraan</DataListValue>
        <DataListValue>styreenoxide</DataListValue>
        <DataListValue>(epoxyethyl)benzene</DataListValue>
        <DataListValue>phenyloxirane</DataListValue>
        <DataListValue>1,2-epoxyethylbenzeen</DataListValue>
        <DataListValue>styrene-7,8-oxide</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListKey>Molecuulformule</DataListKey>
        <DataListValue>C8-H8-O</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListKey>SMILES</DataListKey>
        <DataListValue>C1OC1C1=CC=CC=C1</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListKey>Structuurformule</DataListKey>
        <DataListValue>Structuurformule van de stof</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListKey>Functionele stofgroep</DataListKey>
        <DataListValue>Lijst ZZS</DataListValue>
        <DataListValue>Lijst Autorisaties en restricties</DataListValue>
        <DataListValue>Lijst CMR volgens CLP</DataListValue>
        <DataListValue>Lijst Stofklassen voor luchtemissies</DataListValue>
        <DataListValue>Lijst CMR-stoffen SZW</DataListValue>
        <DataListValue>Lijst CMR volgens zelfclassificatie</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListKey>Chemische stofgroep</DataListKey>
        <DataListValue>ZZS oxiranen</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListKey>Emissiegegevens ZZS-Navigator(opens in a new tab)</DataListKey>
        <DataListValue>
          <Link href="https://rvszoeksysteem.rivm.nl/ZzsNavigator/stof/1588/lucht">Naar lucht</Link>
        </DataListValue>
        <DataListValue>
          <Link href="https://rvszoeksysteem.rivm.nl/ZzsNavigator/stof/1588/water">Naar water</Link>
        </DataListValue>
      </DataListItem>
    </DataList>
    <Heading2>
      <Link href="">ZZS</Link>
    </Heading2>
    <DataList>
      <DataListItem>
        <DataListKey>Op ZZS lijst vanwege EU gevaarsindeling</DataListKey>
        <DataListValue>Annex VI van Verordening (EG) 1272/2008</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListKey>Datum toevoeging</DataListKey>
        <DataListValue>2-12-2013</DataListValue>
      </DataListItem>
    </DataList>
    <SpotlightSection type="warning">
      <Paragraph>
        Er zijn voor deze stof geen gegevens voor RIVM stofadviezen. Stoffen kunnen echter tot een groep behoren
        waarvoor wel gegevens voor RIVM stofadviezen zijn opgenomen.
      </Paragraph>
    </SpotlightSection>
  </div>
);

const meta = {
  title: 'RIVM/Templates/Lijst van Zeer Zorgwekkende Stoffen',
  id: 'rivm-template-lijst',
  component: TemplateLijstStory,
  argTypes: {},
  args: {},
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Bla bla uitleg hier',
      },
    },
  },
} as Meta<typeof TemplateLijstStory>;

export default meta;

export const Template: StoryObj<typeof meta> = {
  args: {},
  name: 'Template',
};
