# Rijkshuisstijl Community FormField component

De `FormField` component is een wrapper voor invoervelden in formulieren. Het zorgt voor een consistente structuur met labels, beschrijvingen, foutmeldingen en statusberichten. Deze component is gebaseerd op de Utrecht component library

## Voorbeeld met verkeerde implementatie

- Het `input` element, evenals `description` en `errorMessage`, moeten als props worden meegegeven en niet als children.

```jsx
// Fout: input wordt direct als child geplaatst
<FormField>
    <input />
</FormField>

// Correct: input wordt als prop meegegeven
<FormField input={<input />} />
```
