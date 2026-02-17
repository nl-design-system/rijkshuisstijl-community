const flagIconIDs = [
  'bg-flag',
  'de-flag',
  'es-flag',
  'fr-flag',
  'gr-flag',
  'hu-flag',
  'it-flag',
  'lv-flag',
  'nl-flag',
  'pl-flag',
  'pt-flag',
  'ro-flag',
  'sk-flag',
  'uk-flag',
] as const;

export type FlagIconIDs = (typeof flagIconIDs)[number];
