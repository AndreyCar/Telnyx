import { Given, When, And, Then } from '@badeball/cypress-cucumber-preprocessor';
import ResendEmailPage from '../../support/pageobjects/resendEmail.page';

Given('I go to the resend email page', () => {
	ResendEmailPage.open();
});

When('I enter an email in the field', () => {
	ResendEmailPage.emailInputType('email');
});

And('I click on the resend email button', () => {
	ResendEmailPage.sendEmailButtonClick();
});

Then('I see that the success message is displayed', () => {
	ResendEmailPage.getElement(ResendEmailPage.successMessage);
});
