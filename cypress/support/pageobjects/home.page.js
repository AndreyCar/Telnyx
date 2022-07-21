const Page = require('./page');

class HomePage extends Page {
	emailInput = 'input[type="email"]';
	tryforFreeButton = 'button[type="submit"]';

	emailInputType(email) {
		this.getElement(this.emailInput).type(email);
	}

	emailInputClick() {
		this.getElement(this.emailInput).click();
	}

	tryforFreeButtonClick() {
		this.getElement(this.tryforFreeButton).click();
	}
}

module.exports = new HomePage();
