<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Page Number Navigation component

Page Number Navigation is een navigatie-element om te bladeren tussen meerdere pagina's van overzichtslijsten, zoals zoekresultaten of een nieuwsoverzicht. Wanneer een overzicht te lang is voor één pagina, verdeelt paginering de inhoud overzichtelijk over meerdere pagina's. De component toont de huidige pagina en laat de gebruiker naar andere pagina's navigeren.

In een smalle container schakelt de component automatisch naar een compacte weergave: de vorige- en volgende-links tonen alleen hun chevron (de toegankelijke naam blijft behouden voor schermlezers), de paginanummers schuiven tegen elkaar en de tekst wordt kleiner. Omdat dit met een container query werkt, reageert de component op de breedte van de eigen container en niet op de viewport. Gebruik de `maxVisiblePages`-prop om te bepalen hoeveel paginanummers zichtbaar blijven in krappe layouts.
