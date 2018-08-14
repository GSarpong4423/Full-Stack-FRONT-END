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
  console.log('onCreateFailure ran. Error is :', error)
}

const onShowRecipeSuccess = function (data) {
  $('#message').text('Example successfully created')
  $('#message').css('background-color', 'green')
  store.recipe = data.recipe
  console.log('onShowSuccess ran. Data is :', data)
  // const getGamesSuccess = function (data) {
  for (let i = 0; i < data.recipes.length; i++) {
    $('#recipe-list').append('<p><b>ID: </b>' + data.recipes[i].id + '  <b>Title: </b>' + data.recipes[i].recipe_title + '</p>')
    // console.log(data.games[i])
  }
  //  }
  // let recipeHTML = ''
  // data.forEach(recipe => {
  //   recipeHTML
  // })
  // $('#recipe-list').text(data)
}

const onShowRecipeFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').css('background-color', 'red')
  console.log('onShowFailure ran. Error is :', error)
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
  console.log('onUpdateFailure ran. Error is :', error)
}

const onDeleteRecipeSuccess = function (data) {
  $('#message').text('Example successfully created')
  $('#message').css('background-color', 'green')
  store.recipe = data.recipe
}

const onDeleteRecipeFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').css('background-color', 'red')
  console.log('onDeleteFailure ran. Error is :', error)
}

module.exports = {
  onCreateRecipeSuccess,
  onCreateRecipeFailure,
  onShowRecipeSuccess,
  onShowRecipeFailure,
  onUpdateRecipeSuccess,
  onUpdateRecipeFailure,
  onDeleteRecipeSuccess,
  onDeleteRecipeFailure
}
