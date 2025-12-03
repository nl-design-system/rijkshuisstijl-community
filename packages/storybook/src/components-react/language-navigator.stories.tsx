import { Icon, LinkButton, Listbox, ListboxOption } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const Talen = [
  'English (Engels)',
  'Español (Spaans)',
  'Frysk (Fries)',
  'Nederlands',
  'Papiamento (Arubaans)',
  'Papiamentu (Curaçaos)',
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
          {Talen.map((taal) => (
            <ListboxOption
              key={taal}
              selected={taal === selectedLanguage}
              onClick={() => {
                setSelectedLanguage(taal);
                setIsOpen(false);
              }}
            >
              {taal}
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
  parameters: {
    status: {
      type: 'STABLE',
    },
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Listbox.tsx',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht met styling van de Rijkshuisstijl Community.',
  },
} as Meta<typeof LanguageNavigator>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {};
