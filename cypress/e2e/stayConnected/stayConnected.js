import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor';
import BlogPage from '../../support/pageobjects/blog.page';

Given('I go to the blog page', () => {
	BlogPage.open('');
	BlogPage.closeCookies();
});

When('I type email in field', () => {
	BlogPage.emailInputType('asdasd@gmail.com');
});

And('I click Subscribe button', () => {
	BlogPage.subscribeButtonClick();
});

Then('I see that the confirmation is displayed', () => {
	BlogPage.getElement(BlogPage.confirmLabel);
});
