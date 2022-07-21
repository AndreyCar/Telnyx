import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import PricingElasticSipPage from '../../support/pageobjects/pricingElasticSip.page';

Given('I go to the elastic-sip pricing page', () => {
	PricingElasticSipPage.open();
	PricingElasticSipPage.closeCookies();
});

When('I choose the first contry', () => {
	PricingElasticSipPage.contryDropDownMenuClick();
	PricingElasticSipPage.contryButtonArrayClick(0);
});

Then('I should see that the title contains the country', () => {
	PricingElasticSipPage.getElement(PricingElasticSipPage.contryButtonArray)
		.first()
		.invoke('text')
		.then((country) => {
			PricingElasticSipPage.getElement(PricingElasticSipPage.title).should('include.text', country);
		});
});
