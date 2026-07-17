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

const languages = {
  nl: { href: '#', lang: 'nl', languageName: 'Nederlands' },
  en: { href: '#', lang: 'en', languageName: 'English' },
  de: { href: '#', lang: 'de', languageName: 'Deutsch' },
  fr: { href: '#', lang: 'fr', languageName: 'Français' },
  es: { href: '#', lang: 'es', languageName: 'Español' },
  it: { href: '#', lang: 'it', languageName: 'Italiano' },
  pt: { href: '#', lang: 'pt', languageName: 'Português' },
  pl: { href: '#', lang: 'pl', languageName: 'Polski' },
  ar: { href: '#', lang: 'ar', languageName: 'العربية' },
};

export const Default: Story = {
  render: (props) => (
    <LanguageNavigation defaultSelectedLanguage="Nederlands" {...props}>
      <LanguageNavigation.Trigger />
      <LanguageNavigation.Content>
        {[languages.nl, languages.en, languages.de].map((language) => (
          <LanguageNavigation.Item key={language.lang} {...language} />
        ))}
        ,
      </LanguageNavigation.Content>
    </LanguageNavigation>
  ),
};

export const DefaultOpen: Story = {
  render: (props) => (
    <LanguageNavigation defaultOpen defaultSelectedLanguage="Nederlands" {...props}>
      <LanguageNavigation.Trigger />
      <LanguageNavigation.Content>
        {[languages.nl, languages.en, languages.de].map((language) => (
          <LanguageNavigation.Item key={language.lang} {...language} />
        ))}
        ,
      </LanguageNavigation.Content>
    </LanguageNavigation>
  ),
};

export const ManyLanguages: Story = {
  render: (props) => (
    <LanguageNavigation defaultSelectedLanguage="Nederlands" {...props}>
      <LanguageNavigation.Trigger />
      <LanguageNavigation.Content>
        {[
          languages.nl,
          languages.en,
          languages.de,
          languages.fr,
          languages.es,
          languages.it,
          languages.pt,
          languages.pl,
        ].map((language) => (
          <LanguageNavigation.Item key={language.lang} {...language} />
        ))}
      </LanguageNavigation.Content>
    </LanguageNavigation>
  ),
};

export const WithoutIcon: Story = {
  render: (props) => (
    <LanguageNavigation defaultSelectedLanguage="Nederlands" {...props}>
      <LanguageNavigation.Trigger showIcon={false} />
      <LanguageNavigation.Content>
        {[languages.nl, languages.en, languages.de].map((language) => (
          <LanguageNavigation.Item key={language.lang} {...language} />
        ))}
      </LanguageNavigation.Content>
    </LanguageNavigation>
  ),
};

export const KeepOpenOnSelect: Story = {
  render: (props) => (
    <LanguageNavigation defaultOpen defaultSelectedLanguage="Nederlands" {...props}>
      <LanguageNavigation.Trigger />
      <LanguageNavigation.Content>
        <LanguageNavigation.Item closeOnSelect={false} {...languages.nl} />
        <LanguageNavigation.Item closeOnSelect={false} {...languages.en} localLanguageName="Engels" />
        <LanguageNavigation.Item closeOnSelect={false} {...languages.de} localLanguageName="Duits" />
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
          {[languages.nl, languages.en, languages.de].map((language) => (
            <LanguageNavigation.Item key={language.lang} {...language} />
          ))}
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
        <LanguageNavigation.Item {...languages.nl} localLanguageName="Dutch" />
        <LanguageNavigation.Item {...languages.en} />
        <LanguageNavigation.Item {...languages.de} localLanguageName="German" />
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
          <LanguageNavigation.Item {...languages.ar} />
          <LanguageNavigation.Item {...languages.en} localLanguageName="الإنجليزية" />
          <LanguageNavigation.Item {...languages.en} localLanguageName="الهولندية" />
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
          {...languages.en}
          href={undefined}
          localLanguageName="Engels"
          onClick={() => console.log('Switched to English')}
        />
        <LanguageNavigation.Item
          {...languages.de}
          href={undefined}
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
            {...languages.nl}
            href={undefined}
            onClick={() => console.log('Switched to Dutch')}
          />
          <LanguageNavigation.Item
            {...languages.en}
            href={undefined}
            localLanguageName="Engels"
            onClick={() => console.log('Switched to English')}
          />
          <LanguageNavigation.Item
            {...languages.de}
            href={undefined}
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
