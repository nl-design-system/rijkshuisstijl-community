/* @license CC0-1.0 */

import { Logo as RijkshuisstijlLogo } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconInfoSquare, IconMenu2 } from '@tabler/icons-react';
import {
  Article,
  Document,
  LinkButton,
  Logo,
  NavBar,
  Page,
  PageHeader,
  Surface,
} from '@utrecht/component-library-react/dist/css-module';
import { ReactNode } from 'react';
import { IconEnd, IconStart } from './icon';
import { NldocPage } from './page.stories';
import './index.scss';

interface NldocLayoutProps {
  logoImage?: ReactNode;
  logoPosition?: 'start' | 'center';
  document?: ReactNode;
  theme?: string;
  documentFontFamily?: string;
  decorationBackgroundColor?: string;
  decorationColor?: string;
  author?: string;
}

const NldocLayout = ({ logoImage, logoPosition, document, author, theme }: NldocLayoutProps) => {
  return (
    <div className={`rhc-theme nldoc-basis-theme ${theme || ''}`}>
      <Surface>
        <Document>
          <Page>
            <PageHeader>
              <div className={`nldoc-header nldoc-header--logo-${logoPosition}`}>
                <Logo>{logoImage}</Logo>
              </div>
              <NavBar>
                <LinkButton aria-expanded="false" aria-haspopup="true">
                  <IconStart>
                    <IconMenu2 />
                  </IconStart>
                  Inhoudsopgave
                </LinkButton>
                <span>{author}</span>
                <LinkButton aria-expanded="false" aria-haspopup="true">
                  Informatie
                  <IconEnd>
                    <IconInfoSquare />
                  </IconEnd>
                </LinkButton>
              </NavBar>
            </PageHeader>
            <div className="nldoc-content">
              <Article className="utrecht-article--nldoc-main">{document}</Article>
            </div>
          </Page>
        </Document>
      </Surface>
    </div>
  );
};

const meta = {
  title: 'NLdoc/Layout',
  id: 'nldoc-layout',
  component: NldocLayout,
  argTypes: {},
  args: {},
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
    layout: 'fullscreen',
  },
  render: NldocLayout,
} as Meta<typeof NldocLayout>;

export default meta;

export const Rijksoverheid: StoryObj<typeof meta> = {
  args: {
    logoImage: <RijkshuisstijlLogo organisation="Rijksoverheid"></RijkshuisstijlLogo>,
    logoPosition: 'center',
    document: <NldocPage />,
    author: 'Rijksoverheid',
  },
};

export const Ridderkerk: StoryObj<typeof meta> = {
  args: {
    theme: 'ridderkerk-theme',
    logoImage: <img src="/ridderkerk-logo.png" alt="logo gemeente Ridderkerk" />,
    logoPosition: 'start',
    document: <NldocPage />,
    author: 'Gemeente Ridderkerk',
  },
};

export const WaterschapHollandseDelta: StoryObj<typeof meta> = {
  args: {
    theme: 'wshd-theme',
    logoImage: <img src="/wshd-logo.svg" alt="logo waterschap Hollandse Delta" />,
    logoPosition: 'start',
    document: <NldocPage />,
    author: 'Waterschap Hollandse Delta',
  },
};
