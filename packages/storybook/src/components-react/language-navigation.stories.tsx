import { LanguageNavigation } from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import { Meta, StoryObj } from '@storybook/react-vite';
import { useCallback, useState } from 'react';
import readme from './language-navigation.md?raw';

const meta = {
  title: 'Language Navigator',
  id: 'rhc-language-navigator',
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
  render: () => (
    <LanguageNavigation.Root defaultSelectedLanguage="Nederlands">
      <LanguageNavigation.Trigger />
      <LanguageNavigation.Content>
        <LanguageNavigation.Option href="#" lang="nl" languageName="Nederlands" />
        <LanguageNavigation.Option href="#" lang="en" languageName="English" localLanguageName="Engels" />
        <LanguageNavigation.Option href="#" lang="de" languageName="Deutsch" localLanguageName="Duits" />
      </LanguageNavigation.Content>
    </LanguageNavigation.Root>
  ),
};

export const DefaultOpen: Story = {
  render: () => (
    <LanguageNavigation.Root defaultOpen defaultSelectedLanguage="Nederlands">
      <LanguageNavigation.Trigger />
      <LanguageNavigation.Content>
        <LanguageNavigation.Option href="#" lang="nl" languageName="Nederlands" />
        <LanguageNavigation.Option href="#" lang="en" languageName="English" localLanguageName="Engels" />
        <LanguageNavigation.Option href="#" lang="de" languageName="Deutsch" localLanguageName="Duits" />
      </LanguageNavigation.Content>
    </LanguageNavigation.Root>
  ),
};

export const ManyLanguages: Story = {
  render: () => (
    <LanguageNavigation.Root defaultSelectedLanguage="Nederlands">
      <LanguageNavigation.Trigger />
      <LanguageNavigation.Content>
        <LanguageNavigation.Option href="#" lang="nl" languageName="Nederlands" />
        <LanguageNavigation.Option href="#" lang="en" languageName="English" localLanguageName="Engels" />
        <LanguageNavigation.Option href="#" lang="de" languageName="Deutsch" localLanguageName="Duits" />
        <LanguageNavigation.Option href="#" lang="fr" languageName="Français" localLanguageName="Frans" />
        <LanguageNavigation.Option href="#" lang="es" languageName="Español" localLanguageName="Spaans" />
        <LanguageNavigation.Option href="#" lang="it" languageName="Italiano" localLanguageName="Italiaans" />
        <LanguageNavigation.Option href="#" lang="pt" languageName="Português" localLanguageName="Portugees" />
        <LanguageNavigation.Option href="#" lang="pl" languageName="Polski" localLanguageName="Pools" />
      </LanguageNavigation.Content>
    </LanguageNavigation.Root>
  ),
};

export const WithoutIcon: Story = {
  render: () => (
    <LanguageNavigation.Root defaultSelectedLanguage="Nederlands">
      <LanguageNavigation.Trigger showIcon={false} />
      <LanguageNavigation.Content>
        <LanguageNavigation.Option href="#" lang="nl" languageName="Nederlands" />
        <LanguageNavigation.Option href="#" lang="en" languageName="English" localLanguageName="Engels" />
        <LanguageNavigation.Option href="#" lang="de" languageName="Deutsch" localLanguageName="Duits" />
      </LanguageNavigation.Content>
    </LanguageNavigation.Root>
  ),
};

export const KeepOpenOnSelect: Story = {
  render: () => (
    <LanguageNavigation.Root defaultOpen defaultSelectedLanguage="Nederlands">
      <LanguageNavigation.Trigger />
      <LanguageNavigation.Content>
        <LanguageNavigation.Option closeOnSelect={false} href="#" lang="nl" languageName="Nederlands" />
        <LanguageNavigation.Option
          closeOnSelect={false}
          href="#"
          lang="en"
          languageName="English"
          localLanguageName="Engels"
        />
        <LanguageNavigation.Option
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

export const Controlled: Story = {
  render: function ControlledStory() {
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
        >
          <LanguageNavigation.Trigger />
          <LanguageNavigation.Content>
            <LanguageNavigation.Option href="#" lang="nl" languageName="Nederlands" />
            <LanguageNavigation.Option href="#" lang="en" languageName="English" localLanguageName="Engels" />
            <LanguageNavigation.Option href="#" lang="de" languageName="Deutsch" localLanguageName="Duits" />
          </LanguageNavigation.Content>
        </LanguageNavigation.Root>
      </div>
    );
  },
};

export const EnglishDefault: Story = {
  render: () => (
    <LanguageNavigation.Root defaultSelectedLanguage="English">
      <LanguageNavigation.Trigger />
      <LanguageNavigation.Content>
        <LanguageNavigation.Option href="#" lang="nl" languageName="Nederlands" localLanguageName="Dutch" />
        <LanguageNavigation.Option href="#" lang="en" languageName="English" />
        <LanguageNavigation.Option href="#" lang="de" languageName="Deutsch" localLanguageName="German" />
      </LanguageNavigation.Content>
    </LanguageNavigation.Root>
  ),
};

// leesrichting

// Taal kiezen vs nederlands -> nederlands word herkend als taal
export const RTLExample: Story = {
  render: () => (
    <div dir="rtl">
      <LanguageNavigation.Root defaultSelectedLanguage="العربية">
        <LanguageNavigation.Trigger />
        <LanguageNavigation.Content>
          <LanguageNavigation.Option href="#" lang="ar" languageName="العربية" />
          <LanguageNavigation.Option href="#" lang="en" languageName="English" localLanguageName="الإنجليزية" />
          <LanguageNavigation.Option href="#" lang="nl" languageName="Nederlands" localLanguageName="الهولندية" />
        </LanguageNavigation.Content>
      </LanguageNavigation.Root>
    </div>
  ),
};
