import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../support/pageobjects/home.page';

Given('I go to the home page', () => {
	HomePage.open('');
	HomePage.closeCookies();
});

When('I click on the Talk to an expert button', () => {
	HomePage.expertTalkButtonClick();
});

Then('I see that the contact us page is loaded', () => {
	cy.url().should('include', 'https://telnyx.com/contact-us');
});
