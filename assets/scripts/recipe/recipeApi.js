'use strict'

const config = require('../config')
const store = require('../config')

const createRecipe = function (data) {
  return $.ajax({
    url: config.apiUrl + '/recipe/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createRecipe
}
