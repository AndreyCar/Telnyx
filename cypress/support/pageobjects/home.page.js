const Page = require('./page');

class HomePage extends Page {
	emailInput = 'input[type="email"]';
	tryforFreeButton = 'button[type="submit"]';
	joinTheWaitlistButton = '[href="/products/storage"]';
	callUsButton = '[class="Text-sc-5o8owa-0 sc-28d89a84-0 sc-d9b163cf-7 frufKM bJzgmA"]';
	callSalesButton = '.sc-d9b163cf-6.NjVuW';

	emailInputType(email) {
		this.getElement(this.emailInput).click().type(email);
	}

	tryforFreeButtonClick() {
		this.getElement(this.tryforFreeButton).click();
	}

	joinTheWaitlistButtonClick() {
		this.getElement(this.joinTheWaitlistButton).first().click();
	}

	callUsButtonClick() {
		this.getElement(this.callUsButton).click();
	}
}

module.exports = new HomePage();
