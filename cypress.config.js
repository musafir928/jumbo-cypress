const { defineConfig } = require('cypress')
require('dotenv').config()

module.exports = defineConfig({

  // reporter
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },

  e2e: {
    baseUrl: process.env.BASE_URL,


    // Evidence
    video: process.env.RECORD_VIDEO === 'true',
    screenshotOnRunFailure: process.env.TAKE_SCREENSHOT_ON_FAIL === 'true',

    // Viewport
    viewportWidth: Number(process.env.VIEWPORT_WIDTH) || 1280,
    viewportHeight: Number(process.env.VIEWPORT_HEIGHT) || 720,

    env: {
      EMAIL: process.env.EMAIL,
      PASSWORD: process.env.PASSWORD,
      FIRST_NAME: process.env.FIRST_NAME,
    },

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      const { plugin: cypressGrepPlugin } = require('@cypress/grep/plugin')
      cypressGrepPlugin(config)

      config.env.username = process.env.USER_NAME,
        config.env.password = process.env.PASSWORD
      return config
    },


    retries: {
      openMode: Number(process.env.OPEN_MODE_RETRY) || 0,
      runMode: Number(process.env.RETRY) || 0
    }
  },
})