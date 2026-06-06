function getCurrentDate() {
  return new Date().toLocaleDateString('pt-BR');
}

function getCurrentTime() {
  return new Date().toLocaleTimeString('pt-BR');
}

function getTimestamp() {
  return new Date().toISOString();
}

function getCurrentYear() {
  return new Date().getFullYear();
}

module.exports = {
  getCurrentDate,
  getCurrentTime,
  getTimestamp,
  getCurrentYear
};