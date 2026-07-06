export type ComponentInput = Partial<{
  angular: string;
  'code = Figma qua design tokens': string;
  'component implementatie discussie URL': string;
  content: {
    body: string;
    id: string;
    title: string;
    type: string;
  };
  'estafette stappen': string;
  figma: string;
  'figma URL': string;
  'nL Status': string;
  oorsprong: string;
  'openstaande issues URL': string;
  react: string;
  'rijkshuisstijl interpretatie discussie URL': string;
  title: string;
  twig: string;
  'visuele regressietest': string;
  'web component': string;
}> & {
  id: string;
};

type Input = {
  items: ComponentInput[];
  totalCount: number;
};

// generate by running:
// gh project item-list 83 --owner nl-design-system -L 200 --format json
import componentsData from './componenten-data.json';
export default componentsData satisfies Input;
