const getFormFields = require('../../../lib/get-form-fields')

const recipeApi = require('./recipeApi')
const recipeUi = require('./recipeUi')

const onCreateRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  recipeApi.createRecipe(data)
    .then(recipeUi.signUpSuccess)
    .catch(recipeUi.signUpFailure)
}

const addHandlers =() => {
  $('#build_recipe').on('submit', onCreateRecipe)
}

module.exports = {
  onCreateRecipe,
  addHandlers
}
