/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Michael B
 * Created on: Oct 2023
 * This program runs cookie clicker on microbit
*/

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// variables
let numberOfCookiesClicked: number
numberOfCookiesClicked = 0

input.onButtonPressed(Button.A, function () {
  // process
  numberOfCookiesClicked = numberOfCookiesClicked + 1

  // output
  basic.showNumber(numberOfCookiesClicked)
})

input.onButtonPressed(Button.B, function () {
  // process
  numberOfCookiesClicked = 0
  
  // output
  basic.showNumber(numberOfCookiesClicked)
})
