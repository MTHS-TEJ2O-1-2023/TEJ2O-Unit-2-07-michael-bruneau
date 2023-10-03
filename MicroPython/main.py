"""
Created by: Michael B
Created on: Oct 2023
This module is a Micro:bit MicroPython program
"""

from microbit import *

display.clear()
display.show(Image.HAPPY)

number_of_cookies_clicked = 0

while True:
    if button_a.is_pressed():
        number_of_cookies_clicked = number_of_cookies_clicked + 1
        display.show(number_of_cookies_clicked)

    if button_b.is_pressed():
        number_of_cookies_clicked = 0
        display.show(number_of_cookies_clicked)
