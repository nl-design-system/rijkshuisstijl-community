import {
  LanguageNavigationContent,
  LanguageNavigationItem,
  LanguageNavigationRoot,
  LanguageNavigationRootProps,
  LanguageNavigationTrigger,
} from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import { Meta, StoryObj } from '@storybook/react-vite';
import { useCallback, useState } from 'react';
import readme from './language-navigation.md?raw';

const meta = {
  title: 'Language Navigation',
  id: 'rhc-language-navigation',
  component: LanguageNavigationRoot,
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
} satisfies Meta<typeof LanguageNavigationRoot>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {
  render: (props) => (
    <LanguageNavigationRoot defaultSelectedLanguage="Nederlands" {...props}>
      <LanguageNavigationTrigger />
      <LanguageNavigationContent>
        <LanguageNavigationItem href="#" lang="nl" languageName="Nederlands" />
        <LanguageNavigationItem href="#" lang="en" languageName="English" localLanguageName="Engels" />
        <LanguageNavigationItem href="#" lang="de" languageName="Deutsch" localLanguageName="Duits" />
      </LanguageNavigationContent>
    </LanguageNavigationRoot>
  ),
};

export const DefaultOpen: Story = {
  render: (props) => (
    <LanguageNavigationRoot defaultOpen defaultSelectedLanguage="Nederlands" {...props}>
      <LanguageNavigationTrigger />
      <LanguageNavigationContent>
        <LanguageNavigationItem href="#" lang="nl" languageName="Nederlands" />
        <LanguageNavigationItem href="#" lang="en" languageName="English" localLanguageName="Engels" />
        <LanguageNavigationItem href="#" lang="de" languageName="Deutsch" localLanguageName="Duits" />
      </LanguageNavigationContent>
    </LanguageNavigationRoot>
  ),
};

export const ManyLanguages: Story = {
  render: (props) => (
    <LanguageNavigationRoot defaultSelectedLanguage="Nederlands" {...props}>
      <LanguageNavigationTrigger />
      <LanguageNavigationContent>
        <LanguageNavigationItem href="#" lang="nl" languageName="Nederlands" />
        <LanguageNavigationItem href="#" lang="en" languageName="English" localLanguageName="Engels" />
        <LanguageNavigationItem href="#" lang="de" languageName="Deutsch" localLanguageName="Duits" />
        <LanguageNavigationItem href="#" lang="fr" languageName="Français" localLanguageName="Frans" />
        <LanguageNavigationItem href="#" lang="es" languageName="Español" localLanguageName="Spaans" />
        <LanguageNavigationItem href="#" lang="it" languageName="Italiano" localLanguageName="Italiaans" />
        <LanguageNavigationItem href="#" lang="pt" languageName="Português" localLanguageName="Portugees" />
        <LanguageNavigationItem href="#" lang="pl" languageName="Polski" localLanguageName="Pools" />
      </LanguageNavigationContent>
    </LanguageNavigationRoot>
  ),
};

export const WithoutIcon: Story = {
  render: (props) => (
    <LanguageNavigationRoot defaultSelectedLanguage="Nederlands" {...props}>
      <LanguageNavigationTrigger showIcon={false} />
      <LanguageNavigationContent>
        <LanguageNavigationItem href="#" lang="nl" languageName="Nederlands" />
        <LanguageNavigationItem href="#" lang="en" languageName="English" localLanguageName="Engels" />
        <LanguageNavigationItem href="#" lang="de" languageName="Deutsch" localLanguageName="Duits" />
      </LanguageNavigationContent>
    </LanguageNavigationRoot>
  ),
};

export const KeepOpenOnSelect: Story = {
  render: (props) => (
    <LanguageNavigationRoot defaultOpen defaultSelectedLanguage="Nederlands" {...props}>
      <LanguageNavigationTrigger />
      <LanguageNavigationContent>
        <LanguageNavigationItem closeOnSelect={false} href="#" lang="nl" languageName="Nederlands" />
        <LanguageNavigationItem
          closeOnSelect={false}
          href="#"
          lang="en"
          languageName="English"
          localLanguageName="Engels"
        />
        <LanguageNavigationItem
          closeOnSelect={false}
          href="#"
          lang="de"
          languageName="Deutsch"
          localLanguageName="Duits"
        />
      </LanguageNavigationContent>
    </LanguageNavigationRoot>
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
      <LanguageNavigationRoot
        open={open}
        selectedLanguage={selectedLanguage}
        onLanguageChange={handleLanguageChange}
        onOpenChange={setOpen}
        {...props}
      >
        <LanguageNavigationTrigger />
        <LanguageNavigationContent>
          <LanguageNavigationItem href="#" lang="nl" languageName="Nederlands" />
          <LanguageNavigationItem href="#" lang="en" languageName="English" localLanguageName="Engels" />
          <LanguageNavigationItem href="#" lang="de" languageName="Deutsch" localLanguageName="Duits" />
        </LanguageNavigationContent>
      </LanguageNavigationRoot>
    </div>
  );
};

export const Controlled: Story = {
  render: (props) => <ControlledTemplate {...props} />,
};

export const EnglishDefault: Story = {
  render: (props) => (
    <LanguageNavigationRoot defaultSelectedLanguage="English" {...props}>
      <LanguageNavigationTrigger />
      <LanguageNavigationContent>
        <LanguageNavigationItem href="#" lang="nl" languageName="Nederlands" localLanguageName="Dutch" />
        <LanguageNavigationItem href="#" lang="en" languageName="English" />
        <LanguageNavigationItem href="#" lang="de" languageName="Deutsch" localLanguageName="German" />
      </LanguageNavigationContent>
    </LanguageNavigationRoot>
  ),
};

export const RTLExample: Story = {
  render: (props) => (
    <div dir="rtl">
      <LanguageNavigationRoot defaultSelectedLanguage="العربية" {...props}>
        <LanguageNavigationTrigger />
        <LanguageNavigationContent>
          <LanguageNavigationItem href="#" lang="ar" languageName="العربية" />
          <LanguageNavigationItem href="#" lang="en" languageName="English" localLanguageName="الإنجليزية" />
          <LanguageNavigationItem href="#" lang="nl" languageName="Nederlands" localLanguageName="الهولندية" />
        </LanguageNavigationContent>
      </LanguageNavigationRoot>
    </div>
  ),
};

export const ButtonNavigation: Story = {
  render: (props) => (
    <LanguageNavigationRoot defaultSelectedLanguage="Nederlands" {...props}>
      <LanguageNavigationTrigger />
      <LanguageNavigationContent>
        <LanguageNavigationItem lang="nl" languageName="Nederlands" onClick={() => console.log('Switched to Dutch')} />
        <LanguageNavigationItem
          lang="en"
          languageName="English"
          localLanguageName="Engels"
          onClick={() => console.log('Switched to English')}
        />
        <LanguageNavigationItem
          lang="de"
          languageName="Deutsch"
          localLanguageName="Duits"
          onClick={() => console.log('Switched to German')}
        />
      </LanguageNavigationContent>
    </LanguageNavigationRoot>
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
      <LanguageNavigationRoot
        open={open}
        selectedLanguage={selectedLanguage}
        onLanguageChange={handleLanguageChange}
        onOpenChange={setOpen}
        {...props}
      >
        <LanguageNavigationTrigger />
        <LanguageNavigationContent>
          <LanguageNavigationItem
            lang="nl"
            languageName="Nederlands"
            onClick={() => console.log('Switched to Dutch')}
          />
          <LanguageNavigationItem
            lang="en"
            languageName="English"
            localLanguageName="Engels"
            onClick={() => console.log('Switched to English')}
          />
          <LanguageNavigationItem
            lang="de"
            languageName="Deutsch"
            localLanguageName="Duits"
            onClick={() => console.log('Switched to German')}
          />
        </LanguageNavigationContent>
      </LanguageNavigationRoot>
    </div>
  );
};

export const ControlledButtonNavigation: Story = {
  render: (props) => <ControlledButtonNavigationTemplate {...props} />,
};
