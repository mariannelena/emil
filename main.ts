let P1 = 0
let P2 = 0
let Var = 0
input.onButtonPressed(Button.A, function () {
    P1 += 1
})
input.onButtonPressed(Button.AB, function () {
    P2 = 0
    P1 = 0
})
input.onButtonPressed(Button.B, function () {
    P2 += 1
})
input.onGesture(Gesture.Shake, function () {
    Var = randint(1, 3)
    if (Var == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (Var == 2) {
        basic.showIcon(IconNames.Scissors)
    } else if (Var == 3) {
        basic.showIcon(IconNames.Square)
    } else {
    	
    }
    basic.pause(2000)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("P1")
    basic.showString("" + (P1))
    basic.pause(127)
    basic.showString("P2")
    basic.showString("" + (P2))
    basic.pause(100)
    basic.clearScreen()
})
