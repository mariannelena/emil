input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(1000)
    basic.showString("Hej allihopa ")
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Ghost)
    music.playMelody("C5 B G C C A B C5 ", 120)
    basic.clearScreen()
})
