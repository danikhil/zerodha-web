const axios = require('axios')

const baseUrl = "https://dry-retreat-36402.herokuapp.com/bhavcopy"

export default class API {
   static searchName(query) {
      return axios.get(`${baseUrl}/search-name?query=${query}`)
   }

   static searchEquity(name) {
      return axios.get(`${baseUrl}/search?query=${name}`)
   }
}