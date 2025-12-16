import { LanguageNavigation } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react-vite';

const LanguageNav = () => {
  return (
    <LanguageNavigation.Root defaultSelectedLanguage="Nederlands">
      <LanguageNavigation.Trigger />
      <LanguageNavigation.Content>
        <LanguageNavigation.Option lang="nl" languageName="Nederlands" />
        <LanguageNavigation.Option lang="en" languageName="English" localLanguageName="Engels" />
        <LanguageNavigation.Option lang="de" languageName="Deutsch" localLanguageName="Duits" />
      </LanguageNavigation.Content>
    </LanguageNavigation.Root>
  );
};

const meta = {
  title: 'Language Navigator',
  id: 'rhc-language-navigator',
  component: LanguageNav,
  tags: ['autodocs'],
} as Meta<typeof LanguageNav>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {};
