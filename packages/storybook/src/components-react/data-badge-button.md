<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Data Badge Button component

De `DataBadgeButton` is een interactieve variant van de `DataBadge` die gebruikt wordt voor het selecteren en filteren van data.

Het **doel** van de component is het mogelijk maken om data-elementen te markeren en tegelijkertijd als klikbare filter te gebruiken. In tegenstelling tot de standaard Data Badge die alleen informatief is, kan de Data Badge Button worden geselecteerd om filtering toe te passen.

Je kunt deze bijvoorbeeld gebruiken als je:

- Filteropties wilt aanbieden die visueel duidelijk zijn
- Selecteerbare labels nodig hebt binnen een interface
- Interactieve badges wilt implementeren voor data-filtering

Je kunt deze bijvoorbeeld toepassen binnen:

- Card components voor het filteren van gerelateerde content
- Data-overzichten waar filtering per label gewenst is

Meerdere Data Badge Buttons kun je binnen een Badge List component plaatsen. (Wanneer je Badge List binnen Card as Link gebruikt is het nodig om de z-index te verhogen zodat de Data Badge Buttons klikbaar worden)

## States

Data Badge Button bevat verschillende states:

- Default: de normale, niet-geselecteerde staat waarin de Data Badge Button beschikbaar is voor interactie
- Default Hover: de state die zichtbaar wordt wanneer gebruikers over de button hoveren
- Pressed: de geselecteerde staat die toont dat de filter actief is
- Pressed Hover: de state die zichtbaar wordt wanneer gebruikers over de button hoveren tijdens actieve filter

Deze twee states zijn nog niet geïmplementeerd:

- Disabled: De inactieve staat wanneer de button tijdelijk niet beschikbaar is (TO DO)
- Active: Wanneer de gebruiker de Data Badge Button inklikt maar nog niet losgelaten heeft en deze nog niet de pressed state krijgt. (TO DO?)
