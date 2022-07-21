import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SignUpPage from '../../support/pageobjects/signUp.page';

Given('I go to the sign up page', () => {
	SignUpPage.open();
	SignUpPage.closeCookies();
});

When('I click on the Create Account button', () => {
	SignUpPage.submitButtonClick();
});

Then('I should see the error is displayed', () => {
	SignUpPage.getElement(SignUpPage.emailErrorLabel);
	SignUpPage.getElement(SignUpPage.fullNameErrorLabel);
});
