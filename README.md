# Cypress träningsprogram för Tech Evolution

Detta repo innehåller ett Cypress-projekt som är inställt att utgå från https://www.automationexercise.com/ som är en hemsida byggd för att "testa att testa".
Uppdraget ni nu har är att gå till ["Test Cases"](https://www.automationexercise.com/test_cases) och välja något som ni tycker ser bra ut, för att sedan implementera stegen med Cypress.

Dokumentation för Cypress finns här: https://docs.cypress.io/api/table-of-contents, och ett tips om ni kör fast är att fråga Copilot / ChatGPT för hjälp med syntax då detta kanske är nytt för många av er.

Det finns ett förifyllt testfall under `examples/user-flows.cy.js` som testar det första testfallet på hemsidan; att registrera och ta bort en ny användare. Använd detta som inspiration på hur ni kan gå tillväga om ni kör fast!

---

## Steg-för-steg

- Klona repot
- Navigera till projektets rot i terminalen och skriv följande kommandon:
  - `npm install` (kräver att Node är installerat)
  - Efter installation är färdig; `npm run cy:open`
- Cypress öppnas nu som ett eget fönster, klicka där på `e2e testing`
- Välj webbläsare och klicka på `Start e2e testing in {browswer}`
- Klicka på `user-flows` spec-filen för att starta testet som ligger under `e2e/user-flows.cy.js`
- Börja skriva kod för dessa testfall, eller döp om/skapa en ny fil om ni vill testa något annat i listan
- Viktigast av allt är ju då förhoppningsvis att **ha kul** =)

**VID PROBLEM**: Bara att rycka tag i någon av oss som är instruktörer så löser vi det tillsammans!
