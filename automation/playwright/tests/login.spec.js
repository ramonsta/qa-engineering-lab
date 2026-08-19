const { test, expect } = require('../fixtures/testFixture');

const users = require('../data/users.json');

const Logger = require('../../shared/logger/logger');

test('Login com sucesso',async({

    loginPage,

    page

})=>{

    Logger.info("Abrindo aplicação");

    await loginPage.acessar();

    Logger.info("Realizando Login");

    await loginPage.login(

        users.admin.username,

        users.admin.password

    );

    await expect(page).toHaveURL(/logged-in-successfully/);

});