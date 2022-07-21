import { Given, When, And, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../support/pageobjects/home.page';
import StoragePage from '../../support/pageobjects/storage.page';
import WaitlistPage from '../../support/pageobjects/waitlist.page';

const email = 'email@email.com';

Given('I go to the home page', () => {
	HomePage.open('');
	HomePage.closeCookies();
});

And('I click to the join the waitlist button on home page', () => {
	HomePage.joinTheWaitlistButtonClick();
});

When('I click to the join the waitlist button on storage page', () => {
	StoragePage.joinTheWaitlistButtonClick();
});

And('I enter all data', () => {
	cy.wait(2000);
	StoragePage.firstNameInputType('QA');
	StoragePage.lastNameInputType('QA');
	StoragePage.emailInputType('QA@QA');
});

And('I click to the apply now button', () => {
	StoragePage.apllyNowButtonClick();
});

Then('I see a confirmation title', () => {
	WaitlistPage.getElement(WaitlistPage.title).should('to.be.visible');
});
