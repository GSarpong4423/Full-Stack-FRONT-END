'use strict'

const store = require('../store.js')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', 'green')
  $('#get_all').modal('hide')
  $('#update_recipe').modal('hide')
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  $('#message').css('background-color', 'red')
  console.log('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').css('background-color', 'green')
  $('#signOut').removeClass('hidden')
  $('#changePassword').removeClass('hidden')
  $('#signIn').addClass('hidden')
  $('#sign-in-modal').modal('hide')
  $('#build_recipe').removeClass('hidden')
  $('#signUp').addClass('hidden')
  $('#recipe-update').removeClass('hidden')
  $('#recipe-delete').removeClass('hidden')
  $('#get_all').removeClass('hidden')
  $('#get_all').removeClass('hidden')
  $('#recipe_delete').removeClass('hidden')
  $('#recipe_update').removeClass('hidden')
  $('#all_content').css('display', 'inline-block')
  $('#recipe-update').show()
  $('#recipe-delete').show()

  console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').css('background-color', 'red')
  console.log('signInFailure ran. Error is :', error)
}

const changePasswordSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').css('background-color', 'green')
  $('#change-password-modal').modal('hide')
  console.log('changePasswordSuccess ran. Data is :', data)
  store.user = data.user
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').css('background-color', 'red')
  console.log('changePasswordFailure ran. Error is :', error)
}
const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', 'green')
  console.log('signOutSuccess ran and nothing was returned!')
  $('#signOut').addClass('hidden')
  $('#changePassword').addClass('hidden')
  $('#build_recipe').addClass('hidden')
  $('#signUp').removeClass('hidden')
  $('#recipe-update').addClass('hidden')
  $('#recipe-delete').addClass('hidden')
  $('#get_all').addClass('hidden')
  $('#signIn').removeClass('hidden')
  $('#sign-out-modal').modal('hide')
  $('#get_all').modal('hide')
  $('#delete_recipe').modal('hide')
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign Out')
  $('#message').css('background-color', 'red')
  console.log('signOutFailure ran. Error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
