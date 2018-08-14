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
  console.log('Show my GET')
  return $.ajax({
    url: config.apiUrl + '/recipes/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateRecipe = function (data) {
  console.log('hi')
  console.log('data after hi ', data)
  return $.ajax({
    // url: config.apiOrigin + '/recipes/' + data.recipe.id,
    url: config.apiUrl + '/recipes/' + data.recipe.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteRecipe = function (id) {
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
