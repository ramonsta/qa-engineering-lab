const { BasePage } = require('./BasePage');

class GooglePage extends BasePage {
  async open() {
    await this.navigate('https://www.google.com/');
  }

  async search(term) {
    await this.page.locator('textarea[name="q"]').fill(term);
    await this.page.keyboard.press('Enter');
  }
}

module.exports = { GooglePage };
