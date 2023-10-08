import { defineConfig } from 'cypress';

export default defineConfig({

  e2e: {
    'baseUrl': 'http://localhost:4200',
    'supportFile': 'e2e-cypress/support/e2e.ts',
    'downloadsFolder': 'e2e-cypress/downloads',
    'fixturesFolder': 'e2e-cypress/fixtures',
    'screenshotsFolder': 'e2e-cypress/screenshots',
    'videosFolder': 'e2e-cypress/videos',
    'specPattern': 'e2e-cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
  }


});
