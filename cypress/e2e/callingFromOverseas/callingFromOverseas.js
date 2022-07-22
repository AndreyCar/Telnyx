import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../support/pageobjects/home.page';
import ContactUsPage from '../../support/pageobjects/contactUs.page';

Given('I go to the home page', () => {
	HomePage.open('');
	HomePage.closeCookies();
});

When('I click on the Call Us button', () => {
	HomePage.callUsButtonClick();
});

And('I click on the Calling from overseas button', () => {
	cy.wait(5000)
	HomePage.callingFromOverseasButtonClick();
});

Then('I see that the title on the contact-us page is visible', () => {
	ContactUsPage.getElement(ContactUsPage.callingFromOverseasTitle).should('to.be.visible');
});
