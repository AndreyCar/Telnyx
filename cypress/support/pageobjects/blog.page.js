const Page = require('./page');

class BlogPage extends Page {
	productFilterButton = '#filter-by-product+ul button';
	contentFilterButton = '#filter-by-content+ul button';
	topicLabel = '.Text-sc-5o8owa-0.sc-a6f05a8b-0>span';
	titleLabel = '.Text-sc-5o8owa-0.sc-b43e299b-1.knOJT.jSrPQp';

	open() {
		super.open('resources/');
	}

	productFilterButtonClick(index) {
		this.getElement(this.productFilterButton).eq(index).click();
	}

	contentFilterButtonClick(index) {
		this.getElement(this.contentFilterButton).eq(index).click();
	}
}

module.exports = new BlogPage();
