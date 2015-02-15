var langs = require('languages')
var countries = require('countries-list').countries

module.exports = function (code) {
  var parts = code.split('-')
  var lang = langs.getLanguageInfo(parts[0]).nativeName

  if(parts[1]) {
      var country = countries[parts[1].toUpperCase()]
      if(country) lang += ' (' + country.native + ')'
  }
  return lang
}