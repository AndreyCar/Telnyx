const Page = require('./page');

class ResendEmailPage extends Page {
	emailInput = '.ui-reactv2-input';
	sendEmailButton = '.Button__StyledDefaultButton-bvSDhd';
	successMessage = '.Message__MessageContainer-dAUGde';

	open() {
		cy.visit('https://portal.telnyx.com/#/login/resend-email');
	}

	emailInputType(email) {
		this.getElement(this.emailInput).click().type(email);
	}

	sendEmailButtonClick() {
		this.getElement(this.sendEmailButton).click();
	}
}

module.exports = new ResendEmailPage();
