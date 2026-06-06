class GooglePage {

  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://www.google.com');
  }

  async getTitle() {
    return await this.page.title();
  }

}

module.exports = { GooglePage };