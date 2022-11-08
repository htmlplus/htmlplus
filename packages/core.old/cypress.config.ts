import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:5173',
    specPattern: 'cypress/e2e/**/*.e2e.ts'
  }
});
