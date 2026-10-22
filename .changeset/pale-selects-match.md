---
'@rijkshuisstijl-community/components-css': patch
---

Een uitgeschakelde Form Field Select ziet er nu hetzelfde uit als een uitgeschakelde Text Input. Chromium gaf `select:disabled` standaard `opacity: 0.7`, waardoor de select bleker was en het contrast onder WCAG AA zakte.
