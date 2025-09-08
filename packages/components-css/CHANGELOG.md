# @rijkshuisstijl-community/components-css

## 7.0.0

### Major Changes

- 8e189de: Updated Action Group to new version from Utrecht
  - added column-stretch option for direction prop

### Minor Changes

- 884d990: Added Utrecht Drawer and fixed an A11y test bug: "Scrollable region must have keyboard access"

## 6.0.0

### Major Changes

- 8e508f9: Removed the following tokens:
  Used but unnecessary:
  --utrecht-alert-heading-line-height
  --utrecht-alert-message-line-height

  Unused:
  --utrecht-alert-heading-font-family
  --utrecht-alert-heading-font-size
  --utrecht-alert-heading-font-weight

  Reworked the Alert react component to allow users to add content like heading and paragraph in the children instead of duplicating heading props in the alert directly.
  Added icon overwrite support in case you want a different icon on a specific alert type.

- 29bfdd5: Removed deprecated tokens for Accordion
- 965c2a4: Removed deprecated tokens and much custom code for SkipLink
  - Kept only the box-shadow properties and moved those to rhc-\* namespace
  - Removed visibleOnFocus prop and class, assuming this is always the behaviour
  - Also cleaned the storybook, with just a default, rtl, and focused state
  - Added links in storybook

## 5.1.0

### Minor Changes

- 35dcda9: Add PageNumberNavigation component in rhc storybook

## 5.0.0

### Major Changes

- cd3758e: Cleaned up deprecated tokens for ordered list to be more in line with the base component used in Utrecht.
  Tokens that wont be applied to ordered list anymore:
  --utrecht-ordered-list-color
  --utrecht-ordered-list-font-weight
  --utrecht-ordered-list-margin-inline-start
- 022af85: --utrecht-ordered-list-font-size was used to determine the ordered list line height. This has now been changed to --utrecht-ordered-list-line-height.
- 0057047: chore: remove unused and deprecated Link tokens
  - Use NL link component as cleanly as possible.
  - Do not support NL `disabled` prop/state for Link.
  - Add support for Icon in Link.
  - Replace "utrecht" with "rhc" in markdown documentation for Link.

- f89c576: Removed the following tokens for unordered list as these are inherited from the document:
  --utrecht-unordered-list-color
  --utrecht-unordered-list-marker-border-color
  --utrecht-unordered-list-font-weight
  --utrecht-unordered-list-font-family

  Added the following token to control nested lists
  --rhc-unordered-list-nested-margin-inline-start

  Nested lists now have the same marker as root lists to have less going on

- f24efc1: Clear deprecated tokens for Breadcrumb

### Minor Changes

- 93b9259: Add new Card component for flexible card display

  **WHAT**: Added a new `Card` component alongside the existing `CardAsLink` component
  **WHY**: The existing `CardAsLink` was too restrictive for cases where cards don't need to be clickable links
  **HOW**: Import and use the new `Card` component for non-interactive card displays

### Patch Changes

- bf73b50: Fix hot reloading voor local development.
- 6b3a5aa: Remove fixed width from Card As Link component to delegate sizing to layout
- 39e082e: Added bottom border for nav bar
- 3d9999c: Update patch & minor dependencies
- acca7a7: Removed unused deprecated tokens

## 4.0.0

### Major Changes

- 923d857: Alleen NL link gebruiken
  - Zorgen dat RHC link alleen NL link gebruikt
    - NL link's `disabled` prop niet toestaan (altijd op `false` zetten) (angular versie ondersteunde dit toch al niet)
  - Documentatie aan Angular readme.md toegevoegd
  - Prop `inline` toegevoegd, die de standaard `display: inline-flex` terugzet naar `display: inline`
    - Storybookvoorbeeld toegevoegd
  - Ongebruike classname `.nl-link--visted` gefixt naar `.nl-link--visited`

### Minor Changes

- 08d4354: add expandable checkbox group

## 3.1.0

### Minor Changes

- a1502a5: Update Utrecht dependencies

### Patch Changes

- 9e83410: Added "how to switch theme" instructions in the README.

## 3.0.0

### Major Changes

- f4a37da: Alert text color now follows design

### Minor Changes

- f8f4bab: - Add DataDadgeButton
- 790ead0: Rename "Card" component to "Card as Link" component, to match definition of NL Design System "Card as Link" and in preparation of incoming "Card (not as Link)" component.

### Patch Changes

- 9916255: Improve UX by always reserving space for optional action in Data Summary component.

## 2.0.0

### Major Changes

- c7034fd: Add Data Summary CSS component.

### Minor Changes

- 280d76c: - Update Link dependency @nl-design-system-candidate/link-css van 1.0.1 naar 2.0.0.
  - Fix alignment van Link children middels `align-items: baseline`.

## 1.2.0

### Minor Changes

- 093b285: Added LinkList and LinkListLink components in Angular
- 893b3e3: Consider styling for Paragraph component in Footer.
- 8395a93: Update dependencies.

### Patch Changes

- 99dd213: Package Updates

## 1.1.0

### Minor Changes

- 292ceb3: Adjusted DOM order of `card` component to improve screen reader accessibility per WCAG guidelines, placing headings before images. Visual layout preserved using flex order.

### Patch Changes

- b505c9b: Update README to fix broken relative links to files in the repository.
- 9eeb7b7: Dependency updates (week 12)
- 5cf3cd0: Fixed the alignment of the pre-footer element to the center.

## 1.0.3

### Patch Changes

- 90f6b1d: Dependency updates (week 11)
- 145d80d: The Link React component has been imported from the Candidate repository, upgrading its status from 'community' to 'candidate'.

## 1.0.2

### Patch Changes

- 1dc03fb: Wekelijkse package updates voor Rijkshuisstijl-componenten en design tokens (week 10)
- b9a4945: Added implementation documentation to package README.

## 1.0.1

### Patch Changes

- 723c927: Update the packages and libraries.

## 1.0.0

### Patch Changes

- ed83ac9: First full release
