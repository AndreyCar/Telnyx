import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import BlogPage from '../../support/pageobjects/blog.page';

Given('I go to the blog page', () => {
	BlogPage.open();
	BlogPage.closeCookies();
});

When('I click on the first filter by product', () => {
	BlogPage.productFilterButtonClick(0);
});

Then('I see that the filter by product shows the correct results', () => {
	BlogPage.getElement(BlogPage.productFilterButton)
		.eq(0)
		.invoke('text')
		.then((text) => {
			BlogPage.getElement(BlogPage.titleLabel).eq(0).contains(text, {matchCase: false});
		});
});
