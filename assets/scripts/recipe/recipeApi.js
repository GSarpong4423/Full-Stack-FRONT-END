'use strict'

const config = require('../config')
const store = require('../store')

const createRecipe = function (data) {
  return $.ajax({
    url: config.apiUrl + '/recipes/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showRecipe = function () {
  return $.ajax({
    url: config.apiUrl + '/recipes/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateRecipe = function () {
  return $.ajax({
    url: config.apiUrl + '/recipes/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteRecipe = function () {
  return $.ajax({
    url: config.apiUrl + '/recipes/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createRecipe,
  showRecipe,
  updateRecipe,
  deleteRecipe
}
