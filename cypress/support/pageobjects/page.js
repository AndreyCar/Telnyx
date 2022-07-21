module.exports = class Page {
	closeCookiesButton = '.sc-df34c536-5.jRrWoh';

	open(url) {
		cy.visit(`https://telnyx.com/${url}`);
	}

	getElement(selector) {
		return cy.get(selector);
	}

	closeCookies() {
		this.getElement(this.closeCookiesButton).click();
	}
};
