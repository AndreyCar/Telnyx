const Page = require('./page');

class StoragePage extends Page {
	firstNameInput = '#FirstName';
	lastNameInput = '#LastName';
	emailInput = '#Email';
	apllyNowButton = 'button[type="submit"]';
	joinTheWaitlistButton = '[href="#form"]';

	open(){
		super.open('products/storage')
	}

	firstNameInputType(firstName) {
		this.getElement(this.firstNameInput).click().type(firstName);
	}

	lastNameInputType(lastName) {
		this.getElement(this.lastNameInput).click().type(lastName);
	}

	emailInputType(email) {
		this.getElement(this.emailInput).click().type(email);
	}

	apllyNowButtonClick() {
		this.getElement(this.apllyNowButton).click();
	}

	joinTheWaitlistButtonClick() {
		this.getElement(this.joinTheWaitlistButton).first().click();
	}
}

module.exports = new StoragePage();
