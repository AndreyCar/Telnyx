import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../support/pageobjects/home.page';

Given('I go to the home page', () => {
	HomePage.open('');
	HomePage.closeCookies();
});

When('I click on the Call Us button', () => {
	HomePage.callUsButtonClick();
});

Then('I see the call sales button is visible', () => {
	HomePage.getElement(HomePage.callSalesButton).should('to.be.visible');
});
