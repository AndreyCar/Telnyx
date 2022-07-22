const Page = require('./page');

class PricingCaclucatorPage extends Page {
	productButton = '[class="Text-sc-5o8owa-0 sc-a87e7459-3 ijJVSH qAMLn"]';
	continueButton = '.sc-5d3a275a-0.eKznVb button';
	price = '.sc-c7d3cfaa-6.NYGAb>span:first-child';

	open() {
		super.open('twilio-pricing-calculator');
	}

	continueButtonClick() {
		this.getElement(this.continueButton).click();
	}

	productButtonClick(index) {
		this.getElement(this.productButton).eq(index).click();
	}
}

module.exports = new PricingCaclucatorPage();
