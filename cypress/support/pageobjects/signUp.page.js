const Page = require('./page');

class SignUpPage extends Page {
	emailInput = '#email';
	passwordInput = '#password';
	emailErrorLabel = '#email_error';
	fullNameErrorLabel = '#full_name_error';
	showPaswordButton = '.sc-e03f9b04-2.cYdohw';
	submitButton = '[type="submit"]';

	open() {
		super.open('sign-up');
	}

	showPaswordButtonClick() {
		this.getElement(this.showPaswordButton).click();
	}

	submitButtonClick() {
		this.getElement(this.submitButton).click();
	}
}

module.exports = new SignUpPage();
