<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Modal Dialog component

Een Modal Dialog toont inhoud in een venster boven op de pagina en houdt de focus binnen dat venster totdat de gebruiker het sluit. Gebruik een modal voor korte, gerichte taken die de aandacht van de gebruiker vragen, zoals een bevestiging of een korte invoer. Het component rendert een native `<dialog>` met de dialoog-CSS van de Gemeente Amsterdam (de `--ams-dialog-*` tokens worden door Rijkshuisstijl Community-tokens overschreven) en een eigen Heading en sluitknop.

Open een dialog via de statische methode `ModalDialog.open('#id')`: die gebruikt `showModal()`, zodat de dialog modaal opent met een focus-trap. Sluit via de sluitknop of `ModalDialog.close(event)`.
