const axios = require('axios');

class ApiClient {

  static async get(url) {
    return axios.get(url);
  }

}

module.exports = ApiClient;
