'Use strict'

const getFormFields = require('../../../lib/get-form-fields')

const recipeApi = require('./recipeApi')
const recipeUi = require('./recipeUi')

const onCreateRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  recipeApi.createRecipe(data)
    .then(recipeUi.onCreateRecipeSuccess)
    .catch(recipeUi.onCreateRecipeFailure)
    $("#build_recipe")[0].reset()
}

const onShowRecipe = function (event) {
  event.preventDefault()
  console.log('got on show recipes')
  recipeApi.showRecipe()
    .then(recipeUi.onShowRecipeSuccess)
    .catch(recipeUi.onShowRecipeFailure)
}

const onUpdateRecipe = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data is ' + data)
  recipeApi.updateRecipe(data)
    .then(recipeUi.onUpdateRecipeSuccess)
    .catch(recipeUi.onUpdateRecipefailure)
}
const onDeleteRecipe = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const recipe = data.recipe
  recipeApi.deleteRecipe(recipe.id)
    .then(recipeUi.onDeleteRecipeSuccess)
    .catch(recipeUi.onDeleteRecipeFailure)
}

const addHandlers =() => {
  $('#build_recipe').on('submit', onCreateRecipe)
  $('#recipe-search').on('submit', onShowRecipe)
  $('#recipe-update').on('submit', onUpdateRecipe)
  $('#recipe-delete').on('submit', onDeleteRecipe)
}

module.exports = {
  addHandlers
}
