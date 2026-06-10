class BasePage {

  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async getTitle() {
    return await this.page.title();
  }

  async getCurrentUrl() {
    return this.page.url();
  }

  async wait(milliseconds) {
    await this.page.waitForTimeout(milliseconds);
  }

}

module.exports = { BasePage };