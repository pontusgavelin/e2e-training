const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.automationexercise.com/",
    supportFile: false,
    specPattern: "**/e2e/*.cy.js",
  },
});
