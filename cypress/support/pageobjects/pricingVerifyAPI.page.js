const Page = require('./page');

class PricingVerifyAPIPage extends Page {
	explanationButton = '.sc-e03f9b04-2.cYdohw';
	explanationLabel = '#twofa-pay-as-you-go';

	open() {
		super.open('pricing/verify-api');
	}

	explanationButtonHover() {
		this.getElement(this.explanationButton).trigger('mouseover');
	}
}

module.exports = new PricingVerifyAPIPage();
