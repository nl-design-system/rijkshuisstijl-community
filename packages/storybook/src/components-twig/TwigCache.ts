/* eslint-disable import/order */
/**
 * TwigCache imports, registers and caches Twig macros and templates used
 * within other templates. This is needed in Storybook as, for example,
 * the story for the OrderedList component would need to import and register
 * the OrderedListItem component. Without this global cache file, each Twig
 * story would need to manually import and register related templates before use.
 */
import Twig from 'twig';
// Macros
import attributesMacro from '@rijkshuisstijl-community/components-twig/src/utils/attributes.twig?raw';
// Register any templates that are depended on by other templates,
// or register all templates to be exhaustive
import OrderedListItem from '@rijkshuisstijl-community/components-twig/src/OrderedListItem.twig?raw';

export const registerAllTwigTemplates = () => {
  Twig.twig({ id: 'attributes.twig', data: attributesMacro });
  Twig.twig({ id: 'OrderedListItem.twig', data: OrderedListItem });
};
