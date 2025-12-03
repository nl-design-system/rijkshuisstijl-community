import { Icon, Link, LinkButton, Listbox, ListboxOption } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const Talen = [
  { name: 'English (Engels)', lang: 'en' },
  { name: 'Español (Spaans)', lang: 'es' },
  { name: 'Frysk (Fries)', lang: 'fy' },
  { name: 'Nederlands', lang: 'nl' },
  { name: 'Papiamento (Arubaans)', lang: 'pap' },
  { name: 'Papiamentu (Curaçaos)', lang: 'pap' },
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
        <Listbox>
          {Talen.map(({ name, lang }) => (
            <ListboxOption
              key={lang}
              selected={name === selectedLanguage}
              onClick={() => {
                setSelectedLanguage(name);
                setIsOpen(false);
              }}
            >
              <Link className="rhc-language-navigation--link" href="#">
                <span lang={lang}>{name}</span>
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
