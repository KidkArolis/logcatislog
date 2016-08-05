var imgcat = require('imgcat')
var xml = require('xml-parser')
var axios = require('axios')

module.exports = function logcatislog () {
  return axios.get('http://thecatapi.com/api/images/get?format=xml&results_per_page=1')
    .then(function (response) {
      var url = xml(response.data).root.children[0].children[0].children[0].children[0].content
      return imgcat(url, {log: true})
    })
}
