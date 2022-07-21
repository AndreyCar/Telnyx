import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import PasswordResetPage from '../../support/pageobjects/passwordReset.page';

Given('I go to password reset page', () => {
	PasswordResetPage.open();
});

Then('I see that the button is disabled', () => {
	PasswordResetPage.getElement(PasswordResetPage.resetPasswordButton).should('have.prop', 'disabled', true);
});
