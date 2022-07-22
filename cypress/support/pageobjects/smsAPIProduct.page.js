const Page = require('./page');

class SmsAPIProductPage extends Page {
	getStartedButton = '.sc-2508c730-0.kKfHUq [href="/sign-up"]';

	open() {
		super.open('products/sms-api');
	}

	getStartedButtonClick() {
		this.getElement(this.getStartedButton).first().click();
	}
}

module.exports = new SmsAPIProductPage();
