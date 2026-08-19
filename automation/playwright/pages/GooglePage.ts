import { BasePage } from './BasePage';

export class GooglePage extends BasePage {

    async open() {
        await this.navigate('/');
    }

    async search(term: string) {
        await this.page.locator('textarea[name="q"]').fill(term);
        await this.page.keyboard.press('Enter');
    }
}