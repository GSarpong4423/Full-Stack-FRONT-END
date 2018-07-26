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

const onShowRecipe = function (event) {
  event.preventDefault()
  recipeApi.showRecipe()
    .then(recipeUi.showGamesSucess)
    .catch(recipeUi.showGamesFailure)
}

const onUpdateRecipe = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  proposalApi.updateProposal(data)
    .then(proposalUi.updateProposalSuccess)
    .catch(proposalUi.failure)
}

const addHandlers =() => {
  $('#build_recipe').on('submit', onCreateRecipe)
  $('#recipe-search').on('submit', onShowRecipe)
  $('#update_recipe').on('submit', onShowRecipe)

}

module.exports = {
  addHandlers
}
