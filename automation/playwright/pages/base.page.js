class GooglePage {

  constructor(page) {
    this.page = page;
  }

async search(term) {
  await this.page.locator('textarea[name="q"]').fill(term);
  await this.page.keyboard.press('Enter');
}

  async navigate() {
    await this.page.goto('https://www.google.com');
  }

  async getTitle() {
    return await this.page.title();
  }

}

module.exports = { GooglePage };

async search(term) {
  await this.page.locator('textarea[name="q"]').fill(term);
  await this.page.keyboard.press('Enter');
}