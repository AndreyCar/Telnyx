const Page = require('./page');

class WaitlistPage extends Page {
	title = 'h1 span';

	open() {
		super.open('products/storage-waitlist');
	}
}

module.exports = new WaitlistPage();
