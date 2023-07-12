const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'kn4kbx',
  defaultCommandTimeout: 8000, //Time, in milliseconds, to wait until most DOM based commands are considered timed out.
  pageLoadTimeout: 30000, //Time, in milliseconds, to wait for page transition events or cy.visit(), cy.go(), cy.reload() commands to fire their page load events. Network requests are limited by the underlying operating system, and may still time out if this value is increased.
  "env": {//thats how we created environmental variables
    "url": "https://rahulshettyacademy.com"
  },
  "retries": {
    "runMode": 1 //it let me rerun for a second time
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/*.cy.js',
    video: true,
    screenshotOnRunFailure: true,
    videoUploadOnPasses: true
    //specPattern: 'cypress/e2e/integration/examples/*.cy.js'

  },
});
