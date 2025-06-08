const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   // baseUrl: 'https://automationexercise.com',
   pageLoadTimeout: 30000,
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
