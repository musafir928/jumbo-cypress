const { defineConfig } = require('cypress')
require('dotenv').config()

module.exports = defineConfig({
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
    },

    setupNodeEvents(on, config) {
      return config
    },
  },
})