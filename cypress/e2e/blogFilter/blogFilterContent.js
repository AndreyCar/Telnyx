import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import BlogPage from '../../support/pageobjects/blog.page';

Given('I go again to the blog page', () => {
	BlogPage.open();

});

When('I click on the first filter by content', () => {
	BlogPage.contentFilterButtonClick(0);
});

Then('I see that the filter by content shows the correct results', () => {
	BlogPage.getElement(BlogPage.contentFilterButton)
		.eq(0)
		.invoke('text')
		.then((text) => {
			BlogPage.getElement(BlogPage.topicLabel).eq(0).contains(text, { matchCase: false });
		});
});
