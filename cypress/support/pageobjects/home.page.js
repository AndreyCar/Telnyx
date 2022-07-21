const Page = require('./page');

class HomePage extends Page {
	emailInput = 'input[type="email"]';
	tryforFreeButton = 'button[type="submit"]';
	joinTheWaitlistButton = '[href="/products/storage"]';

	emailInputType(email) {
		this.getElement(this.emailInput).click().type(email);
	}

	tryforFreeButtonClick() {
		this.getElement(this.tryforFreeButton).click();
	}

	joinTheWaitlistButtonClick() {
		this.getElement(this.joinTheWaitlistButton).first().click();
	}
}

module.exports = new HomePage();
