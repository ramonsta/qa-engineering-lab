async function screenshot(page,name){

    await page.screenshot({

        path:`automation/playwright/reports/${name}.png`,

        fullPage:true

    });

}

module.exports = screenshot;