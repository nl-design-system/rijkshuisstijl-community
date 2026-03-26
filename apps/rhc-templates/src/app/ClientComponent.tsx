import * as LanguageNavigation from '@rijkshuisstijl-community/components-react/languagenavigation';

export default function ClientComponent() {
  if (globalThis.window === undefined) {
    console.log('LanguageNavigation is on server side');
  } else {
    console.log('LanguageNavigation is on client side');
  }
  return (
    <LanguageNavigation.Root
      defaultSelectedLanguage="Nederlands"
      // onLanguageChange={(newLanguage) => console.log('Language changed to:', newLanguage)}
    >
      <LanguageNavigation.Trigger />
      <LanguageNavigation.Content>
        <LanguageNavigation.Item href="#" lang="nl" languageName="Nederlands" />
        <LanguageNavigation.Item href="#" lang="en" languageName="English" localLanguageName="Engels" />
        <LanguageNavigation.Item href="#" lang="de" languageName="Deutsch" localLanguageName="Duits" />
      </LanguageNavigation.Content>
    </LanguageNavigation.Root>
  );
}
