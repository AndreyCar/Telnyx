import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LogInPage from '../../support/pageobjects/logIn.page';

Given('I go to the log in page', () => {
	LogInPage.open();
});

When('I click on the Log in button', () => {
	LogInPage.submitButtonClick();
	LogInPage.submitButtonClick();
});

Then('I should see that email error is displayed', () => {
	LogInPage.getElement(LogInPage.emailErrorLabel);
});
