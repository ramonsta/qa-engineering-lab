const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

    testDir: './automation/playwright/tests',

    timeout:30000,

    retries:2,

    workers:4,

    use:{

        baseURL:process.env.BASE_URL || "https://practicetestautomation.com",

        headless:true,

        screenshot:"only-on-failure",

        video:"retain-on-failure",

        trace:"retain-on-failure"

    },

    reporter:[
        ['html',{
            outputFolder:'automation/playwright/reports'
        }]
    ]

});