import '@rijkshuisstijl-community/footer-css/dist/index.css';
import '@rijkshuisstijl-community/section-css/dist/index.css';
import '@rijkshuisstijl-community/grid-css/dist/index.css';
import { Footer, Heading, Icon, Link, LinkList, LinkListLink } from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from './footer.md?raw';

const linkList1 = ['Contact', 'Veelgestelde vragen', 'Over deze site', 'Werken bij'];

const linkList2 = ['Wetten', 'Verdragen', 'Lokale regelgeving', 'Officiële bekendmakingen', 'Tuchtrecht'];

const linkList3 = ['MijnOverheid', 'Rijksoverheid.nl', 'Ondernemersplein', 'NederlandWereldwijd'];

const LinkListMaker = ({ list }: { list: Array<string> }) => (
  <LinkList>
    {list.map((entry) => (
      <LinkListLink href="#" icon={<Icon icon="chevron-right" />} key={entry}>
        {entry}
      </LinkListLink>
    ))}
  </LinkList>
);

const headerLikeStyles = {
  fontSize: 'var(--rhc-text-font-size-xl)',
  lineHeight: 'var(--rhc-text-line-height-md)',
  marginTop: 0,
  marginBottom: '8px',
};

const FooterLinks = () => (
  <>
    <div className="rhc-page-footer__tagline">De Rijksoverheid. Voor Nederland</div>
    <div className="rhc-grid">
      <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
        <Heading appearanceLevel={5} level={2}>
          Rijksoverheid.nl
        </Heading>
        <LinkListMaker list={linkList1} />
      </div>
      <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
        <Heading appearanceLevel={5} level={2}>
          Officiële overheidsinformatie
        </Heading>
        <LinkListMaker list={linkList2} />
      </div>
      <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
        <Heading appearanceLevel={5} level={2}>
          Andere overheidssites
        </Heading>
        <LinkListMaker list={linkList3} />
      </div>
      <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
        <Heading appearanceLevel={5} level={2}>
          Officiële overheidsinformatie
        </Heading>
        <LinkListMaker list={linkList2} />
      </div>
    </div>
  </>
);

const FooterLinks3 = () => (
  <div className="rhc-grid">
    <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
      <p style={headerLikeStyles}>Overheid.nl</p>
      <p style={{ marginTop: 0 }}>
        <i>
          Ingang naar informatie en
          <br />
          diensten van alle overheden
        </i>
      </p>
    </div>
    <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
      <Heading appearanceLevel={5} level={2}>
        Overheid.nl
      </Heading>
      <LinkListMaker list={linkList1} />
    </div>
    <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
      <Heading appearanceLevel={5} level={2}>
        Officiële overheidsinformatie
      </Heading>
      <LinkListMaker list={linkList2} />
    </div>
    <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
      <Heading appearanceLevel={5} level={2}>
        Andere overheidssites
      </Heading>
      <LinkListMaker list={linkList3} />
    </div>
  </div>
);

const FooterFooterLinks = () => (
  <div className="rhc-page-footer__navigation">
    <Link href="#">Privacy</Link>
    <Link href="#">Cookies en anti-spam</Link>
    <Link href="#">Toegankelijkheid</Link>
    <Link href="#">Proclaimer</Link>
  </div>
);

const meta = {
  title: 'Footer',
  id: 'rhc-react-footer',
  component: Footer,
  args: {
    secondary: <FooterFooterLinks />,
  },
  parameters: {
    //!VOEG HIER FIGMA LINK TOE
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/tree/main/packages/components-react/footer-react',
    layout: 'fullscreen',
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const primary = <FooterLinks />;
    const secondary = <FooterFooterLinks />;
    return <Footer primary={primary} secondary={secondary} />;
  },
};

export const TaglineInColumn: Story = {
  render: () => {
    const primary = <FooterLinks3 />;
    const secondary = <FooterFooterLinks />;
    return <Footer primary={primary} secondary={secondary} />;
  },
};

export const Compact: Story = {
  render: () => {
    const secondary = (
      <>
        <div className="rhc-page-footer__tagline rhc-page-footer--compact__tagline">Overheid.nl</div>
        <FooterFooterLinks />
      </>
    );
    return <Footer secondary={secondary} />;
  },
};
