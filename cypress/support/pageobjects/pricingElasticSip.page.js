const Page = require('./page');

class PricingElasticSipPage extends Page {
	contryDropDownMenu = '.sc-ecffda1a-4.dCDohY:nth-child(1) button';
	contryButtonArray = 'li:nth-child(2) .sc-e64845a7-0 a';

	currencyDropDownMenu = '.sc-ecffda1a-4.dCDohY:nth-child(2) button';
	currencyButtonArray = '.sc-e64845a7-1.dQoFtc';

	title = 'h1 span';

	open() {
		super.open('pricing/elastic-sip');
	}

	contryDropDownMenuClick() {
		this.getElement(this.contryDropDownMenu).click();
	}

	contryButtonArrayClick(index) {
		this.getElement(this.contryButtonArray).eq(index).click();
	}

	currencyDropDownMenuClick() {
		this.getElement(this.currencyDropDownMenu).click();
	}

	currencyButtonArrayClick(index) {
		this.getElement(this.currencyButtonArray).eq(index).click();
	}
}

module.exports = new PricingElasticSipPage();
