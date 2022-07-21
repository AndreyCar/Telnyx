import { Given, When, And, Then } from '@badeball/cypress-cucumber-preprocessor';
import PasswordResetPage from '../../support/pageobjects/passwordReset.page';

Given('I go to the password reset page', () => {
	PasswordResetPage.open();
});

When('I enter an email in the field', () => {
	PasswordResetPage.emailInputType('email');
});

And('I click on the reset password button', () => {
	PasswordResetPage.resetPasswordButtonClick();
});

Then('I see that the success message is displayed', () => {
	PasswordResetPage.getElement(PasswordResetPage.successMessage);
});
