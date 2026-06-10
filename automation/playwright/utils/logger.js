const { getTimestamp } = require('./date.util');

function logInfo(message) {
  console.log(`[INFO] [${getTimestamp()}] ${message}`);
}

function logWarning(message) {
  console.warn(`[WARNING] [${getTimestamp()}] ${message}`);
}

function logError(message) {
  console.error(`[ERROR] [${getTimestamp()}] ${message}`);
}

module.exports = {
  logInfo,
  logWarning,
  logError
};