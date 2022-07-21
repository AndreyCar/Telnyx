import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor';
import SearchPage from '../../support/pageobjects/search.page';

const search = 'Voice';

Given('I go to the search page', () => {
	SearchPage.open();
});

When('I enter the search query to search field', () => {
	SearchPage.searchInputType(search);
});

Then('I see that the search query is in the search results', () => {
	SearchPage.getElement(SearchPage.searchResults).first().should('include.text', search);
});

And('I see that url contains the search query', () => {
	cy.url().should('include', search);
});
