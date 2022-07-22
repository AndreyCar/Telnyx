import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SmsAPIProductPage from '../../support/pageobjects/smsAPIProduct.page';

Given('I go to the sms api product page', () => {
	SmsAPIProductPage.open();
	SmsAPIProductPage.closeCookies();
});

When('I click on the Get Started Now button', () => {
	SmsAPIProductPage.getStartedButtonClick();
});

Then('I see that the sign up page is loaded', () => {
	cy.url().should('include', 'https://telnyx.com/sign-up')
});
