import { LanguageNavigation } from '@rijkshuisstijl-community/components-react';

const languages = {
  nl: { href: '#', lang: 'nl', languageName: 'Nederlands' },
  en: { href: '#', lang: 'en', languageName: 'English' },
  de: { href: '#', lang: 'de', languageName: 'Deutsch' },
};

const LanguageNavigationExample = () => (
  <LanguageNavigation defaultSelectedLanguage="Nederlands">
    <LanguageNavigation.Trigger />
    <LanguageNavigation.Content>
      {[languages.nl, languages.en, languages.de].map((language) => (
        <LanguageNavigation.Item key={language.lang} {...language} />
      ))}
    </LanguageNavigation.Content>
  </LanguageNavigation>
);

export default LanguageNavigationExample;
