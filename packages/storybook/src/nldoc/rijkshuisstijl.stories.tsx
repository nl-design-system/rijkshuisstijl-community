/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import { IconInfoSquare, IconMenu2 } from '@tabler/icons-react';
import { BreadcrumbNav, BreadcrumbNavLink, BreadcrumbNavSeparator, LinkButton } from '@utrecht/component-library-react';
import {
  Article,
  Document,
  Logo,
  NavBar,
  Page,
  PageHeader,
  Surface,
} from '@utrecht/component-library-react/dist/css-module';
import { ReactNode } from 'react';
import { IconEnd, IconStart } from './icon';
import './index.scss';

interface NldocLayoutProps {
  logoImage?: ReactNode;
  logoPosition?: 'start' | 'center';
  document?: ReactNode;
  theme?: string;
  documentFontFamily?: string;
  decorationBackgroundColor?: string;
  decorationColor?: string;
}

const NldocLayout = ({ logoImage, document, theme }: NldocLayoutProps) => {
  return (
    <div className="rhc-theme">
      <Surface>
        <Document className={`nldoc-basis-theme ${theme || ''}`}>
          <Page>
            <PageHeader>
              <div className="nldoc-header">
                <Logo>{logoImage}</Logo>
              </div>
              <NavBar>
                <LinkButton aria-expanded="false" aria-haspopup="true">
                  <IconStart>
                    <IconMenu2 />
                  </IconStart>
                  Inhoudsopgave
                </LinkButton>
                <span>Rijksoverheid</span>
                <LinkButton aria-expanded="false" aria-haspopup="true">
                  Informatie
                  <IconEnd>
                    <IconInfoSquare />
                  </IconEnd>
                </LinkButton>
              </NavBar>
            </PageHeader>
            <PageHeader>
              <Logo>{logoImage}</Logo>
              <NavBar>
                <BreadcrumbNav>
                  <BreadcrumbNavLink href="#">Home</BreadcrumbNavLink>
                  <BreadcrumbNavSeparator>›</BreadcrumbNavSeparator>
                  <BreadcrumbNavLink href="#">Onderwerpen</BreadcrumbNavLink>
                  <BreadcrumbNavSeparator>›</BreadcrumbNavSeparator>
                  <BreadcrumbNavLink href="#">Waardering onroerende zaken (WOZ)</BreadcrumbNavLink>
                  <BreadcrumbNavSeparator>›</BreadcrumbNavSeparator>
                  <BreadcrumbNavLink href="#">Vraag en antwoord</BreadcrumbNavLink>
                </BreadcrumbNav>
              </NavBar>
            </PageHeader>
            <div className="nldoc-content">
              <Article>{document}</Article>
            </div>
          </Page>
        </Document>
      </Surface>
    </div>
  );
};

const meta = {
  title: 'NLdoc/Rijkshuisstijl tests',
  id: 'nldoc-rijkshuisstijl',
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
  },
  render: NldocLayout,
} as Meta<typeof NldocLayout>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    logoImage: (
      //       <RijkshuisstijlLogo
      //         organisation="Rijksinstituut voor Volksgezondheid
      // en Milieu"
      //         subtitle="Ministerie van Volksgezondheid,
      // Welzijn en Sport"
      //       ></RijkshuisstijlLogo>
      <></>
    ),
    logoPosition: 'center',
  },
};
