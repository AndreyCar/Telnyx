const Page = require('./page');

class SearchPage extends Page {
	searchResults = '.search-results__row h2 span';
	searchInput = 'input.search__input';

	open() {
		cy.visit('https://support.telnyx.com/en/');
	}

	searchInputType(search) {
		this.getElement(this.searchInput).click().type(search + '{enter}');
	}
}

module.exports = new SearchPage();
