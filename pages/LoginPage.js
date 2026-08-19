const { expect } = require('@playwright/test');

class LoginPage{

    constructor(page){

        this.page = page;

        this.username = '#username';

        this.password = '#password';

        this.loginButton = '#submit';

    }

    async acessar(){

        await this.page.goto('/practice-test-login/');

    }

    async login(user,password){

        await this.page.fill(this.username,user);

        await this.page.fill(this.password,password);

        await this.page.click(this.loginButton);

    }

}

module.exports = LoginPage;