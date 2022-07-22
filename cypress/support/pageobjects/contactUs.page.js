const Page = require('./page');

class ContactUsPage extends Page {
	callingFromOverseasTitle = '.sc-31400ea3-2.loBCGO h2';

	open() {
		super.open('contact-us');
	}
}

module.exports = new ContactUsPage();
