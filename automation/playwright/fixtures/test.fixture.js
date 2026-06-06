const { test: base } = require('@playwright/test');

exports.test = base.extend({

});
const { logInfo } = require('../utils/logger');

logInfo('Opening Google page');

const { getTimestamp } = require('../utils/date.util');

console.log(getTimestamp());