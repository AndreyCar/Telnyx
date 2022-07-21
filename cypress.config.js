const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');

async function setupNodeEvents(on, config) {
	await preprocessor.addCucumberPreprocessorPlugin(on, config);

	on(
		'file:preprocessor',
		createBundler({
			plugins: [createEsbuildPlugin.default(config)],
		})
	);
	return config;
}

module.exports = defineConfig({
	
	e2e: {
		specPattern: '**/*.feature',
		supportFile: false,
		video: false,
		screenshotOnRunFailure: false,
		viewportHeight: 780,
		viewportWidth: 1440,
		pageLoadTimeout: 60000,
		reporter: 'json',
		reporterOptions: {
			toConsole: false,
			outputFolder: 'cypress/results',
			overwrite: true,
			
		},
		setupNodeEvents,
		
	},
});
