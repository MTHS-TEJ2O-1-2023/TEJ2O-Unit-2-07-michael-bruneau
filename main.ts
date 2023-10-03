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
  numberOfCookiesClicked = numberOfCookiesClicked + 1
  basic.showNumber(numberOfCookiesClicked)
})
