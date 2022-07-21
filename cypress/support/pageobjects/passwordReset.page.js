const Page = require('./page');

class PasswordResetPage extends Page {
	emailInput = '.ui-reactv2-input';
	resetPasswordButton = '.Button__StyledDefaultButton-bvSDhd';
	successMessage = '.Message__MessageContainer-dAUGde';

	open() {
		cy.visit('https://portal.telnyx.com/#/login/password-reset');
	}

	emailInputType(email) {
		this.getElement(this.emailInput).click().type(email);
	}

	resetPasswordButtonClick() {
		this.getElement(this.resetPasswordButton).click();
	}
}

module.exports = new PasswordResetPage();
