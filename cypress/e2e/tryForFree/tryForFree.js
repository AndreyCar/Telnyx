import { Given, When, And, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../support/pageobjects/home.page';
import SignUpPage from '../../support/pageobjects/signUp.page';

const email = 'email@email.com';

Given('I go to the home page', () => {
	HomePage.open('');
	HomePage.closeCookies();
});

When('I enter an email in the field', () => {
	HomePage.emailInputClick();
	HomePage.emailInputType(email);
});

And('I click on the Try fo free button', () => {
	HomePage.tryforFreeButtonClick();
});

Then('I see an email address entered in the email field', () => {
	SignUpPage.getElement(SignUpPage.emailInput).should('have.prop', 'value', email);
});
