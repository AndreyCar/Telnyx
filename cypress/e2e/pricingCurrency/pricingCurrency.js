import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import PricingElasticSipPage from '../../support/pageobjects/pricingElasticSip.page';

Given('I go to the elastic-sip pricing page', () => {
	PricingElasticSipPage.open();
	PricingElasticSipPage.closeCookies();
});

When('I choose the first currency', () => {
	PricingElasticSipPage.currencyDropDownMenuClick();
	PricingElasticSipPage.currencyButtonArrayClick(0);
});

Then('I should see that the url contains the currency', () => {
	PricingElasticSipPage.getElement(PricingElasticSipPage.currencyButtonArray)
		.first()
		.invoke('text')
		.then((currency) => {
			cy.url().should('include', currency);
		});
});
