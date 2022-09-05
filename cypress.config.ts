import { defineConfig } from "cypress";
import * as webpack from "@cypress/webpack-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.ts$/,
              exclude: [/node_modules/],
              use: [
                {
                  loader: "ts-loader",
                },
              ],
            },
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}


export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:4200",
    viewportHeight: 760,
    viewportWidth: 1080,
    trashAssetsBeforeRuns: true,
    screenshotOnRunFailure: false,
    supportFile: false,
    videosFolder: "cypress/videos",
    screenshotsFolder: "cypress/screenshots",
    fixturesFolder: "cypress/fixtures",
    downloadsFolder: "dist/cypress/downloads",
    chromeWebSecurity: false,
    reporterOptions: {
      mochaFile: "reporter/cypress-test-results.[hash].xml",
      toConsole: false
    },
    video: false,
   /* defaultCommandTimeout: 10000,*/
   /* blockHosts: ["*google-analytics.com", "*googletagmanager.com"],*/
    specPattern: ["cypress/e2e/**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
    setupNodeEvents,
    retries: {
    // Default is 0
      "runMode": 2,
      // Default is 0
      "openMode": 0
    },
    env: {
      base_url: "http://localhost:4200",
      login_url: '/login',
      products_url: '/products'
    }
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
