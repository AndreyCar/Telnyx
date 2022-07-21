const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'hierarchy',
  jsonDir: 'cypress/results',
  output: 'cypress/reports/cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true, 
  ignoreBadJsonFile: true,
  scenarioTimestamp: true,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "DEV",
    "Browser": "Chrome"
  }
};

reporter.generate(options);