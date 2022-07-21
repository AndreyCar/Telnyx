import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SignUpPage from '../../support/pageobjects/signUp.page';

Given('I go to the sign up page', () => {
	SignUpPage.open();
	SignUpPage.closeCookies();
});

When('I click on the show password button', () => {
	SignUpPage.showPaswordButtonClick();
});

Then(/^Password input type should be (\w+)$/, (text) => {
	SignUpPage.getElement(SignUpPage.passwordInput).should('have.prop', 'type', text);
});
