import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor';
import SearchPage from '../../support/pageobjects/search.page';

Given('I go to the search page', () => {
	SearchPage.open();
});

When('I click on the Go to Telnyx button', () => {
	SearchPage.backToHomeButtonClick();
});

Then("I see I'm back on the home page", () => {
	cy.url().should('include', 'https://telnyx.com/');
});
