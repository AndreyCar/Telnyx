import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import PricingVerifyAPIPage from '../../support/pageobjects/pricingVerifyAPI.page';

Given('I go to the verify api pricing page', () => {
	PricingVerifyAPIPage.open('');
	PricingVerifyAPIPage.closeCookies();
});

When('I hover mouse on explanation button', () => {
	PricingVerifyAPIPage.explanationButtonHover();
});

Then('I see that the information is displayed', () => {
	PricingVerifyAPIPage.getElement(PricingVerifyAPIPage.explanationLabel).should('have.attr', 'aria-hidden', 'false');
});
