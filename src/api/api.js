const axios = require('axios')

const baseUrl = "http://127.0.0.1:7000/bhavcopy"

export default class API {
   static searchName(query) {
      return axios.get(`${baseUrl}/search-name?query=${query}`)
   }

   static searchEquity(name) {
      return axios.get(`${baseUrl}/search?query=${name}`)
   }
}