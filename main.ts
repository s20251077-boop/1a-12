input.onButtonPressed(Button.A, function () {
    basic.showString("Shao")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Man Yiu")
})
basic.showIcon(IconNames.Happy)
basic.showLeds(`
    # . . . #
    # # . # #
    . . . . .
    # . . . #
    . # # # .
    `)
