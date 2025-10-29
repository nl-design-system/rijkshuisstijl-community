# @rijkshuisstijl-community/storybook-angular

## 1.2.1

### Patch Changes

- 10ec55a: Release package with npm provenance.

## 1.2.0

### Minor Changes

- 03a4cd2: Link list link story now uses correct content projection slot for the icon

## 1.1.0

### Minor Changes

- 81ec8d4: Added Default story for Icon

### Patch Changes

- 3d9999c: Update patch & minor dependencies
- 834dbde: Reverted breaking changes to angular storybook and add controls to stories

## 1.0.0

### Major Changes

- 923d857: Alleen NL link gebruiken
  - Zorgen dat RHC link alleen NL link gebruikt
    - NL link's `disabled` prop niet toestaan (altijd op `false` zetten) (angular versie ondersteunde dit toch al niet)
  - Documentatie aan Angular readme.md toegevoegd
  - Prop `inline` toegevoegd, die de standaard `display: inline-flex` terugzet naar `display: inline`
    - Storybookvoorbeeld toegevoegd
  - Ongebruike classname `.nl-link--visted` gefixt naar `.nl-link--visited`

### Minor Changes

- 101881c: Added error messages to the "boete zoeken" page. Also implemented the `inputRequired` input for `<rhc-form-field-text-input>` and `<rhc-text-input>`.

### Patch Changes

- ff1a1c0: Re added previously broken icons.
- d3d4062: Removed the `icon` arg from the `icon` stories.

## 0.1.0

### Minor Changes

- 2937d46: Add the FormFieldTextInput Angular component
- 2ca2a07: Add UnorderedList and UnorderedListItem components in Angular
- d974ed7: Add the Navbar and NavbarItem Angular components

### Patch Changes

- 99dd213: Package Updates
- e82c853: Fix: angular-components & angular-storybook downgrade
