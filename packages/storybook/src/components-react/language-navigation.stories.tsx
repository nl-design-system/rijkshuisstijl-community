import { LanguageNavigation, type LanguageNavigationRootProps } from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import { Meta, StoryObj } from '@storybook/react-vite';
import { useCallback, useState } from 'react';
import readme from './language-navigation.md?raw';

const meta = {
  title: 'Language Navigation',
  id: 'rhc-language-navigation',
  component: LanguageNavigation,
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
} satisfies Meta<typeof LanguageNavigation>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {
  render: (props) => (
    <LanguageNavigation defaultSelectedLanguage="Nederlands" {...props}>
      <LanguageNavigation.Trigger />
      <LanguageNavigation.Content>
        <LanguageNavigation.Item href="#" lang="nl" languageName="Nederlands" />
        <LanguageNavigation.Item href="#" lang="en" languageName="English" localLanguageName="Engels" />
        <LanguageNavigation.Item href="#" lang="de" languageName="Deutsch" localLanguageName="Duits" />
      </LanguageNavigation.Content>
    </LanguageNavigation>
  ),
};

export const DefaultOpen: Story = {
  render: (props) => (
    <LanguageNavigation defaultOpen defaultSelectedLanguage="Nederlands" {...props}>
      <LanguageNavigation.Trigger />
      <LanguageNavigation.Content>
        <LanguageNavigation.Item href="#" lang="nl" languageName="Nederlands" />
        <LanguageNavigation.Item href="#" lang="en" languageName="English" localLanguageName="Engels" />
        <LanguageNavigation.Item href="#" lang="de" languageName="Deutsch" localLanguageName="Duits" />
      </LanguageNavigation.Content>
    </LanguageNavigation>
  ),
};

export const ManyLanguages: Story = {
  render: (props) => (
    <LanguageNavigation defaultSelectedLanguage="Nederlands" {...props}>
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
    </LanguageNavigation>
  ),
};

export const WithoutIcon: Story = {
  render: (props) => (
    <LanguageNavigation defaultSelectedLanguage="Nederlands" {...props}>
      <LanguageNavigation.Trigger showIcon={false} />
      <LanguageNavigation.Content>
        <LanguageNavigation.Item href="#" lang="nl" languageName="Nederlands" />
        <LanguageNavigation.Item href="#" lang="en" languageName="English" localLanguageName="Engels" />
        <LanguageNavigation.Item href="#" lang="de" languageName="Deutsch" localLanguageName="Duits" />
      </LanguageNavigation.Content>
    </LanguageNavigation>
  ),
};

export const KeepOpenOnSelect: Story = {
  render: (props) => (
    <LanguageNavigation defaultOpen defaultSelectedLanguage="Nederlands" {...props}>
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
    </LanguageNavigation>
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
      <LanguageNavigation
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
      </LanguageNavigation>
    </div>
  );
};

export const Controlled: Story = {
  render: (props) => <ControlledTemplate {...props} />,
};

export const EnglishDefault: Story = {
  render: (props) => (
    <LanguageNavigation defaultSelectedLanguage="English" {...props}>
      <LanguageNavigation.Trigger />
      <LanguageNavigation.Content>
        <LanguageNavigation.Item href="#" lang="nl" languageName="Nederlands" localLanguageName="Dutch" />
        <LanguageNavigation.Item href="#" lang="en" languageName="English" />
        <LanguageNavigation.Item href="#" lang="de" languageName="Deutsch" localLanguageName="German" />
      </LanguageNavigation.Content>
    </LanguageNavigation>
  ),
};

export const RTLExample: Story = {
  render: (props) => (
    <div dir="rtl">
      <LanguageNavigation defaultSelectedLanguage="العربية" {...props}>
        <LanguageNavigation.Trigger />
        <LanguageNavigation.Content>
          <LanguageNavigation.Item href="#" lang="ar" languageName="العربية" />
          <LanguageNavigation.Item href="#" lang="en" languageName="English" localLanguageName="الإنجليزية" />
          <LanguageNavigation.Item href="#" lang="nl" languageName="Nederlands" localLanguageName="الهولندية" />
        </LanguageNavigation.Content>
      </LanguageNavigation>
    </div>
  ),
};

export const ButtonNavigation: Story = {
  render: (props) => (
    <LanguageNavigation defaultSelectedLanguage="Nederlands" {...props}>
      <LanguageNavigation.Trigger />
      <LanguageNavigation.Content>
        <LanguageNavigation.Item lang="nl" languageName="Nederlands" onClick={() => console.log('Switched to Dutch')} />
        <LanguageNavigation.Item
          lang="en"
          languageName="English"
          localLanguageName="Engels"
          onClick={() => console.log('Switched to English')}
        />
        <LanguageNavigation.Item
          lang="de"
          languageName="Deutsch"
          localLanguageName="Duits"
          onClick={() => console.log('Switched to German')}
        />
      </LanguageNavigation.Content>
    </LanguageNavigation>
  ),
};

const ControlledButtonNavigationTemplate = (props: LanguageNavigationRootProps) => {
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
      <LanguageNavigation
        open={open}
        selectedLanguage={selectedLanguage}
        onLanguageChange={handleLanguageChange}
        onOpenChange={setOpen}
        {...props}
      >
        <LanguageNavigation.Trigger />
        <LanguageNavigation.Content>
          <LanguageNavigation.Item
            lang="nl"
            languageName="Nederlands"
            onClick={() => console.log('Switched to Dutch')}
          />
          <LanguageNavigation.Item
            lang="en"
            languageName="English"
            localLanguageName="Engels"
            onClick={() => console.log('Switched to English')}
          />
          <LanguageNavigation.Item
            lang="de"
            languageName="Deutsch"
            localLanguageName="Duits"
            onClick={() => console.log('Switched to German')}
          />
        </LanguageNavigation.Content>
      </LanguageNavigation>
    </div>
  );
};

export const ControlledButtonNavigation: Story = {
  render: (props) => <ControlledButtonNavigationTemplate {...props} />,
};
