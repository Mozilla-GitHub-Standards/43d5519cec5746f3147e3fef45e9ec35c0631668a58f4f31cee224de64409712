/* eslint-env node */

const defaultConfig = {
  // Global options:
  sourceDir: "./src/",
  artifactsDir: "./dist/",
  ignoreFiles: [".DS_Store"],
  // Command options:
  build: {
    overwriteDest: true,
  },
  run: {
    firefox: process.env.FIREFOX_BINARY || "firefox",
    browserConsole: false,
    startUrl: ["about:debugging"],
    pref: ["extensions.fxmonitor.enabled=true",
           "extensions.fxmonitor.breachListURL=https://haveibeenpwned.com/api/v2/breaches"],
  },
};

module.exports = defaultConfig;
