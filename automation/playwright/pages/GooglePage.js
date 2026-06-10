const { BasePage } = require('./BasePage');
const urls = require('../data/urls.json');

class GooglePage extends BasePage {

  constructor(page) {
    super(page);
  }

  async open() {
    await this.navigate(urls.google);
  }

}

module.exports = { GooglePage };