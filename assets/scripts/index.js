'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
const authEvents = require('./auth/events.js')
const recipeEvents = require('./recipe/recipeEvents.js')

$(() => {
  authEvents.addHandlers1()
  recipeEvents.addHandlers()


//this is how you invoke a function which in this case is a handler
})
