# @rijkshuisstijl-community/components-angular

## 2.0.1

### Patch Changes

- 3d9999c: Update patch & minor dependencies
- 834dbde: Reverted breaking changes to angular storybook and add controls to stories

## 2.0.0

### Major Changes

- d3d4062: Removed the `icon` input from `<rhc-icon/>` component. The `icon` component no longer comes bundled with tabler icons, meaning you will have to supply your own icons.
- 101881c: `<rhc-form-field-text-input>` and `<rhc-text-input>` Components' required input has been changed to inputRequired. The required input now sets `aria-required` on the native HTML input. If you wish to put `required` on the native HTML input you should now use `inputRequired`.
- 923d857: Alleen NL link gebruiken
  - Zorgen dat RHC link alleen NL link gebruikt
    - NL link's `disabled` prop niet toestaan (altijd op `false` zetten) (angular versie ondersteunde dit toch al niet)
  - Documentatie aan Angular readme.md toegevoegd
  - Prop `inline` toegevoegd, die de standaard `display: inline-flex` terugzet naar `display: inline`
    - Storybookvoorbeeld toegevoegd
  - Ongebruike classname `.nl-link--visted` gefixt naar `.nl-link--visited`

### Patch Changes

- ff1a1c0: Re added accidentally removed icons from `<rhc-footer>` and `rhc-form-field-error-message`.

## 1.2.1

### Patch Changes

- 9e83410: Added "how to switch theme" instructions in the README.
- dbb8167: The `rhc-data-summary` action is now wrapped in a `<dd>` tag

## 1.2.0

### Minor Changes

- 1a44957: Added Angular Footer component
- fdb336f: Changed Angular dependencies to version: ~19.2.0
- 3b66ded: Fix invalid markup in Data Summary component by using an attribute selector instead of a component selector.
- c7034fd: Add Data Summary Angular component.

### Patch Changes

- 280d76c: Gebruik `display: contents` voor de host van de Icon Angular component, zodat de Angular wrapper geen conflict veroorzaakt tussen de component en zijn parent.

## 1.1.0

### Minor Changes

- 2937d46: Add the FormFieldTextInput Angular component
- f771acf: Create the ColumnLayout-component in Angular
- 53c9e49: Refactor the rhc-button component so it now uses an attribute selector which allows the component to support native <button> attributes
- 2ca2a07: Add UnorderedList and UnorderedListItem components in Angular
- 093b285: Added LinkList and LinkListLink components in Angular
- d974ed7: Add the Navbar and NavbarItem Angular components

### Patch Changes

- 122039f: Fixed bug: removed dutch map icon from the tabler icons mapper
- 99dd213: Package Updates
- e82c853: Fix: angular-components & angular-storybook downgrade

## 1.0.0

### Major Changes

- 6deb00e: Initial release

### Minor Changes

- 5d9ff09: Added paragraph component
- d6ef9eb: Added Link component
- ffb7e8e: Added Angular Button component and installed the icons package
- a961845: Added action-group Angular component
- d369cf5: Added icon components in Angular
