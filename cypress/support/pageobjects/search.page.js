const Page = require('./page');

class SearchPage extends Page {
	searchResults = '.search-results__row h2 span';
	searchInput = 'input.search__input';
	backToHomeButton = '.header__home__url';

	open() {
		cy.visit('https://support.telnyx.com/en/');
	}

	searchInputType(search) {
		this.getElement(this.searchInput)
			.click()
			.type(search + '{enter}');
	}
	backToHomeButtonClick() {
		this.getElement(this.backToHomeButton).invoke('removeAttr', 'target').click();
	}
}

module.exports = new SearchPage();
