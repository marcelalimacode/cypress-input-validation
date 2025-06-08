const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   pageLoadTimeout: 30000,
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
