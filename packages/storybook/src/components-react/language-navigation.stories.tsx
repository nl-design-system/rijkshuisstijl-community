import { LanguageNavigation, LanguageNavigationRootProps } from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import { Meta, StoryObj } from '@storybook/react-vite';
import { useCallback, useState } from 'react';
import readme from './language-navigation.md?raw';

const meta = {
  title: 'Language Navigation',
  id: 'rhc-language-navigation',
  component: LanguageNavigation.Root,
  parameters: {
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/LanguageNavigation.tsx',
  },
} satisfies Meta<typeof LanguageNavigation.Root>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {
  render: (props) => (
    <LanguageNavigation.Root defaultSelectedLanguage="Nederlands" {...props}>
      <LanguageNavigation.Trigger />
      <LanguageNavigation.Content>
        <LanguageNavigation.Item href="#" lang="nl" languageName="Nederlands" />
        <LanguageNavigation.Item href="#" lang="en" languageName="English" localLanguageName="Engels" />
        <LanguageNavigation.Item href="#" lang="de" languageName="Deutsch" localLanguageName="Duits" />
      </LanguageNavigation.Content>
    </LanguageNavigation.Root>
  ),
};

export const DefaultOpen: Story = {
  render: (props) => (
    <LanguageNavigation.Root defaultOpen defaultSelectedLanguage="Nederlands" {...props}>
      <LanguageNavigation.Trigger />
      <LanguageNavigation.Content>
        <LanguageNavigation.Item href="#" lang="nl" languageName="Nederlands" />
        <LanguageNavigation.Item href="#" lang="en" languageName="English" localLanguageName="Engels" />
        <LanguageNavigation.Item href="#" lang="de" languageName="Deutsch" localLanguageName="Duits" />
      </LanguageNavigation.Content>
    </LanguageNavigation.Root>
  ),
};

export const ManyLanguages: Story = {
  render: (props) => (
    <LanguageNavigation.Root defaultSelectedLanguage="Nederlands" {...props}>
      <LanguageNavigation.Trigger />
      <LanguageNavigation.Content>
        <LanguageNavigation.Item href="#" lang="nl" languageName="Nederlands" />
        <LanguageNavigation.Item href="#" lang="en" languageName="English" localLanguageName="Engels" />
        <LanguageNavigation.Item href="#" lang="de" languageName="Deutsch" localLanguageName="Duits" />
        <LanguageNavigation.Item href="#" lang="fr" languageName="Français" localLanguageName="Frans" />
        <LanguageNavigation.Item href="#" lang="es" languageName="Español" localLanguageName="Spaans" />
        <LanguageNavigation.Item href="#" lang="it" languageName="Italiano" localLanguageName="Italiaans" />
        <LanguageNavigation.Item href="#" lang="pt" languageName="Português" localLanguageName="Portugees" />
        <LanguageNavigation.Item href="#" lang="pl" languageName="Polski" localLanguageName="Pools" />
      </LanguageNavigation.Content>
    </LanguageNavigation.Root>
  ),
};

export const WithoutIcon: Story = {
  render: (props) => (
    <LanguageNavigation.Root defaultSelectedLanguage="Nederlands" {...props}>
      <LanguageNavigation.Trigger showIcon={false} />
      <LanguageNavigation.Content>
        <LanguageNavigation.Item href="#" lang="nl" languageName="Nederlands" />
        <LanguageNavigation.Item href="#" lang="en" languageName="English" localLanguageName="Engels" />
        <LanguageNavigation.Item href="#" lang="de" languageName="Deutsch" localLanguageName="Duits" />
      </LanguageNavigation.Content>
    </LanguageNavigation.Root>
  ),
};

export const KeepOpenOnSelect: Story = {
  render: (props) => (
    <LanguageNavigation.Root defaultOpen defaultSelectedLanguage="Nederlands" {...props}>
      <LanguageNavigation.Trigger />
      <LanguageNavigation.Content>
        <LanguageNavigation.Item closeOnSelect={false} href="#" lang="nl" languageName="Nederlands" />
        <LanguageNavigation.Item
          closeOnSelect={false}
          href="#"
          lang="en"
          languageName="English"
          localLanguageName="Engels"
        />
        <LanguageNavigation.Item
          closeOnSelect={false}
          href="#"
          lang="de"
          languageName="Deutsch"
          localLanguageName="Duits"
        />
      </LanguageNavigation.Content>
    </LanguageNavigation.Root>
  ),
};

const ControlledTemplate = (props: LanguageNavigationRootProps) => {
  const [open, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Nederlands');

  const handleLanguageChange = useCallback((newLanguage: string) => {
    setSelectedLanguage(newLanguage);
    console.log(`Language changed to: ${newLanguage}`);
  }, []);

  return (
    <div>
      <p style={{ marginBottom: '1rem' }}>
        Selected language: <strong>{selectedLanguage}</strong>
      </p>
      <LanguageNavigation.Root
        open={open}
        selectedLanguage={selectedLanguage}
        onLanguageChange={handleLanguageChange}
        onOpenChange={setOpen}
        {...props}
      >
        <LanguageNavigation.Trigger />
        <LanguageNavigation.Content>
          <LanguageNavigation.Item href="#" lang="nl" languageName="Nederlands" />
          <LanguageNavigation.Item href="#" lang="en" languageName="English" localLanguageName="Engels" />
          <LanguageNavigation.Item href="#" lang="de" languageName="Deutsch" localLanguageName="Duits" />
        </LanguageNavigation.Content>
      </LanguageNavigation.Root>
    </div>
  );
};

export const Controlled: Story = {
  render: (props) => <ControlledTemplate {...props} />,
};

export const EnglishDefault: Story = {
  render: (props) => (
    <LanguageNavigation.Root defaultSelectedLanguage="English" {...props}>
      <LanguageNavigation.Trigger />
      <LanguageNavigation.Content>
        <LanguageNavigation.Item href="#" lang="nl" languageName="Nederlands" localLanguageName="Dutch" />
        <LanguageNavigation.Item href="#" lang="en" languageName="English" />
        <LanguageNavigation.Item href="#" lang="de" languageName="Deutsch" localLanguageName="German" />
      </LanguageNavigation.Content>
    </LanguageNavigation.Root>
  ),
};

export const RTLExample: Story = {
  render: (props) => (
    <div dir="rtl">
      <LanguageNavigation.Root defaultSelectedLanguage="العربية" {...props}>
        <LanguageNavigation.Trigger />
        <LanguageNavigation.Content>
          <LanguageNavigation.Item href="#" lang="ar" languageName="العربية" />
          <LanguageNavigation.Item href="#" lang="en" languageName="English" localLanguageName="الإنجليزية" />
          <LanguageNavigation.Item href="#" lang="nl" languageName="Nederlands" localLanguageName="الهولندية" />
        </LanguageNavigation.Content>
      </LanguageNavigation.Root>
    </div>
  ),
};
