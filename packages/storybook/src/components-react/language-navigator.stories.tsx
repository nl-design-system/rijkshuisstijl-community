import { Icon, Link, LinkButton, Listbox, ListboxOption } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const Languages = [
  { languageName: 'English', localLanguageName: 'Engels', lang: 'en' },
  { languageName: 'Español', localLanguageName: 'Spaans', lang: 'es' },
  { languageName: 'Frysk', localLanguageName: 'Fries', lang: 'fy' },
  { languageName: 'Nederlands', localLanguageName: 'Nederlands', lang: 'nl' },
  { languageName: 'Papiamento', localLanguageName: 'Arubaans', lang: 'pap' },
  { languageName: 'Papiamentu', localLanguageName: 'Curaçaos', lang: 'pap' },
];

const LanguageNavigator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Nederlands');
  return (
    <>
      <LinkButton onClick={() => setIsOpen(!isOpen)}>
        {selectedLanguage} <Icon icon={isOpen ? 'chevron-up' : 'chevron-down'} />
      </LinkButton>
      {isOpen && (
        <Listbox className="rhc-language-navigation--listbox" role="list">
          {Languages.map(({ languageName, localLanguageName, lang }) => (
            <ListboxOption
              aria-selected={undefined}
              className="rhc-language-navigation--list-item"
              key={lang}
              role={undefined}
              selected={languageName === selectedLanguage}
              onClick={() => {
                setSelectedLanguage(languageName);
                setIsOpen(false);
              }}
            >
              <Link className="rhc-language-navigation--link" href="#">
                <span lang={lang}>{languageName}</span>
                {languageName !== selectedLanguage && (
                  <span className="rhc-language-navigation--local-language"> ({localLanguageName})</span>
                )}
              </Link>
            </ListboxOption>
          ))}
        </Listbox>
      )}
    </>
  );
};

const meta = {
  title: 'Language Navigator',
  id: 'rhc-language-navigator',
  component: LanguageNavigator,
  tags: ['autodocs'],
} as Meta<typeof LanguageNavigator>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {};
