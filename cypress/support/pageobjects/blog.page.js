const Page = require('./page');

class BlogPage extends Page {
	productFilterButton = '#filter-by-product+ul button';
	contentFilterButton = '#filter-by-content+ul button';
	topicLabel = '.Text-sc-5o8owa-0.sc-a6f05a8b-0>span';
	titleLabel = '.Text-sc-5o8owa-0.sc-b43e299b-1.knOJT.jSrPQp';
	emailInput = '#Email';
	subscribeButton = '[type="submit"]';
	confirmLabel = '[class="Text-sc-5o8owa-0 sc-348be244-3 ijJVSH eWygFt"]';

	open() {
		super.open('resources/');
	}

	productFilterButtonClick(index) {
		this.getElement(this.productFilterButton).eq(index).click();
	}

	contentFilterButtonClick(index) {
		this.getElement(this.contentFilterButton).eq(index).click();
	}

	emailInputType(email) {
		this.getElement(this.emailInput).click().type(email);
	}

	subscribeButtonClick() {
		this.getElement(this.subscribeButton).click();
	}
}

module.exports = new BlogPage();
