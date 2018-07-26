'Use Strict'

const store = require('../store.js')

const onCreateRecipeSuccess = function (data) {
  $('#message').text('Example successfully created')
  $('#message').css('background-color', 'green')
  store.recipe = data.recipe
  console.log('onCreateSuccess ran. Data is :', data)
}

const onCreateRecipeFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').css('background-color', 'red')
  console.log('signInFailure ran. Error is :', error)
}

const onUpdateRecipeSuccess = function (data) {
  $('#message').text('Example successfully created')
  $('#message').css('background-color', 'green')
  store.proposal = data.recipe
  console.log('onUpdateSuccess ran. Data is :', data)
}

const onUpdateRecipeFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').css('background-color', 'red')
  console.log('signInFailure ran. Error is :', error)
}

module.exports = {
  onCreateRecipeSuccess,
  onCreateRecipeFailure,
  onUpdateRecipeSuccess,
  onUpdateRecipeFailure
}
