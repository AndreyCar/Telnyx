const Page = require('./page');

class LogInPage extends Page {
	emailErrorLabel = '.TextField__ErrorMessage-wqPfx.fjBYhj';
	submitButton = '.LoginForm__LoginButton-fhXOmx';

	open() {
		cy.visit('https://portal.telnyx.com/#/login');
	}

	submitButtonClick() {
		this.getElement(this.submitButton).click();
	}
}

module.exports = new LogInPage();
