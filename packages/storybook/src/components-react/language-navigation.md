<!-- @license CC0-1.0 -->

# Language Navigation

The Language Navigation component allows users to switch between different language versions of a page. It's built using a compound component pattern, giving you full control over the structure and styling while maintaining proper accessibility.

## Usage

```jsx
import { LanguageNavigation } from '@rijkshuisstijl-community/components-react';

<LanguageNavigation.Root aria-label="Taalkeuze" defaultSelectedLanguage="Nederlands">
  <LanguageNavigation.Trigger />
  <LanguageNavigation.Content>
    <LanguageNavigation.Item lang="nl" languageName="Nederlands" />
    <LanguageNavigation.Item lang="en" languageName="English" localLanguageName="Engels" />
    <LanguageNavigation.Item lang="de" languageName="Deutsch" localLanguageName="Duits" />
  </LanguageNavigation.Content>
</LanguageNavigation.Root>;
```

## Compound Components

The Language Navigation uses a compound component pattern consisting of four parts:

| Component                    | Description                                                               |
| ---------------------------- | ------------------------------------------------------------------------- |
| `LanguageNavigation.Root`    | The container that manages state and provides context to child components |
| `LanguageNavigation.Trigger` | The button that opens/closes the language list                            |
| `LanguageNavigation.Content` | The dropdown container for language options                               |
| `LanguageNavigation.Item`    | Individual language option                                                |

## Controlled vs Uncontrolled

The component supports both controlled and uncontrolled modes:

**Uncontrolled** (default): Use `defaultOpen` and `defaultSelectedLanguage` to set initial values. The component manages its own state internally.

**Controlled**: Use `open`, `onOpenChange`, `selectedLanguage`, and `onLanguageChange` to fully control the state from outside the component.

---

## API Reference

### LanguageNavigation.Root

The root container that manages state and provides context to all child components.

| Prop                      | Type                            | Default               | Description                                                                       |
| ------------------------- | ------------------------------- | --------------------- | --------------------------------------------------------------------------------- |
| `open`                    | `boolean`                       | -                     | Controlled open state. When provided, the component becomes controlled.           |
| `defaultOpen`             | `boolean`                       | `false`               | Default open state for uncontrolled usage.                                        |
| `onOpenChange`            | `(newOpen: boolean) => void`    | -                     | Callback fired when the open state changes.                                       |
| `selectedLanguage`        | `string`                        | -                     | Controlled selected language. When provided, the selection becomes controlled.    |
| `defaultSelectedLanguage` | `string`                        | -                     | Default selected language for uncontrolled usage.                                 |
| `onLanguageChange`        | `(newLanguage: string) => void` | -                     | Callback fired when the selected language changes.                                |
| `className`               | `string`                        | -                     | Additional CSS class names.                                                       |
| `aria-label`              | `string`                        | `Language Navigation` | Nav element aria-label to announce the language navigation in the local language. |
| `ref`                     | `Ref<HTMLDivElement>`           | -                     | Ref to the root element.                                                          |

---

### LanguageNavigation.Trigger

The button that toggles the visibility of the language options. By default, it displays the currently selected language.

| Prop        | Type                     | Default | Description                                                      |
| ----------- | ------------------------ | ------- | ---------------------------------------------------------------- |
| `showIcon`  | `boolean`                | `true`  | Whether to show a chevron icon indicating the open/closed state. |
| `children`  | `ReactNode`              | -       | Custom content to display instead of the selected language.      |
| `className` | `string`                 | -       | Additional CSS class names.                                      |
| `ref`       | `Ref<HTMLButtonElement>` | -       | Ref to the trigger button element.                               |

---

### LanguageNavigation.Content

The dropdown container that holds the language options. Only renders when the navigation is open.

| Prop                  | Type                  | Default | Description                                               |
| --------------------- | --------------------- | ------- | --------------------------------------------------------- |
| `closeOnOutsideClick` | `boolean`             | `true`  | Whether to close the content when clicking outside of it. |
| `className`           | `string`              | -       | Additional CSS class names.                               |
| `ref`                 | `Ref<HTMLDivElement>` | -       | Ref to the content container element.                     |

**Keyboard behavior:**

- Pressing `Escape` closes the dropdown and returns focus to the trigger.

---

### LanguageNavigation.Item

An individual language option within the dropdown. The component uses a discriminated union to render either as a **link** (for URL-based navigation) or a **button** (for programmatic navigation), depending on which prop is provided.

| Prop                | Type                                             | Default      | Description                                                                                                                            |
| ------------------- | ------------------------------------------------ | ------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| `lang`              | `string`                                         | **required** | The language code (e.g., `'nl'`, `'en'`, `'de'`). Used for the `lang` attribute on the language name.                                  |
| `languageName`      | `string`                                         | **required** | The language name displayed in that language (e.g., `'Nederlands'`, `'English'`). Also used to match against the selected language.    |
| `localLanguageName` | `string`                                         | -            | The language name in the currently selected language (e.g., `'Engels'` when Dutch is selected). Only shown for non-selected languages. |
| `href`              | `string`                                         | -            | The URL to navigate to when selecting this language. **Renders as a link.** Cannot be used together with `onClick`.                    |
| `onClick`           | `(event: MouseEvent<HTMLButtonElement>) => void` | -            | Click handler for programmatic navigation. **Renders as a button.** Cannot be used together with `href`.                               |
| `closeOnSelect`     | `boolean`                                        | `true`       | Whether to close the dropdown after selecting this option.                                                                             |
| `children`          | `ReactNode`                                      | -            | Custom content to render instead of the default language display.                                                                      |
| `className`         | `string`                                         | -            | Additional CSS class names.                                                                                                            |
| `ref`               | `Ref<HTMLLIElement>`                             | -            | Ref to the option element.                                                                                                             |

> **Note:** You must provide either `href` or `onClick`, but not both. This ensures the correct semantic element is rendered for accessibility. The preference goes to href as language navigation as translations are generally provided through alternative URL's.

---

## Accessibility

The Language Navigation component follows accessibility best practices:

- The component is wrapped in a `nav` element with localized `aria-label="Language Navigation"`
- The trigger button has `aria-expanded` to indicate the open state
- The trigger button has `aria-controls` pointing to the content's ID
- Use `aria-current="page"` to indicate the current language
- Pressing `Escape` closes the dropdown and returns focus to the trigger
- Click outside detection closes the dropdown

The component automatically uses the correct semantic element (`<a>` or `<button>`) based on whether `href` or `onClick` is provided, ensuring proper accessibility for both navigation patterns.

## Examples

### With navigation links (URL-based, preferred)

Use `href` when language switching is handled via URL navigation (e.g., `/nl`, `/en`).

```jsx
<LanguageNavigation.Root aria-label="Taalkeuze" defaultSelectedLanguage="Nederlands">
  <LanguageNavigation.Trigger />
  <LanguageNavigation.Content>
    <LanguageNavigation.Item lang="nl" languageName="Nederlands" href="/nl" />
    <LanguageNavigation.Item lang="en" languageName="English" localLanguageName="Engels" href="/en" />
    <LanguageNavigation.Item lang="de" languageName="Deutsch" localLanguageName="Duits" href="/de" />
  </LanguageNavigation.Content>
</LanguageNavigation.Root>
```

### With click handlers (programmatic)

Use `onClick` when language switching is handled programmatically (e.g., i18n library, state management).

```jsx
const { setLocale } = useI18n();

<LanguageNavigation.Root aria-label="Taalkeuze" defaultSelectedLanguage="Nederlands">
  <LanguageNavigation.Trigger />
  <LanguageNavigation.Content>
    <LanguageNavigation.Item lang="nl" languageName="Nederlands" onClick={() => setLocale('nl')} />
    <LanguageNavigation.Item
      lang="en"
      languageName="English"
      localLanguageName="Engels"
      onClick={() => setLocale('en')}
    />
    <LanguageNavigation.Item
      lang="de"
      languageName="Deutsch"
      localLanguageName="Duits"
      onClick={() => setLocale('de')}
    />
  </LanguageNavigation.Content>
</LanguageNavigation.Root>;
```

### Controlled usage

```jsx
const [selectedLanguage, setSelectedLanguage] = useState('Nederlands');

<LanguageNavigation.Root
  aria-label="Taalkeuze"
  selectedLanguage={selectedLanguage}
  onLanguageChange={setSelectedLanguage}
>
  <LanguageNavigation.Trigger />
  <LanguageNavigation.Content>
    <LanguageNavigation.Item lang="nl" languageName="Nederlands" href="/nl" />
    <LanguageNavigation.Item lang="en" languageName="English" localLanguageName="Engels" href="/en" />
  </LanguageNavigation.Content>
</LanguageNavigation.Root>;
```
