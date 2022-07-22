import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor';
import PricingCaclucatorPage from '../../support/pageobjects/pricingCalculator.page';

Given('I go to the savings calculator page', () => {
	PricingCaclucatorPage.open('');
	PricingCaclucatorPage.closeCookies();
});

When('I choose the product', () => {
	PricingCaclucatorPage.productButtonClick(0);
});

And('I click on the Continue button', () => {
	PricingCaclucatorPage.continueButtonClick();
	PricingCaclucatorPage.continueButtonClick();
});

Then('I see that the savings price is visible', () => {
	PricingCaclucatorPage.getElement(PricingCaclucatorPage.price);
});
