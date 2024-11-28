input.onButtonPressed(Button.A, function () {
    Horas = Horas + 1
})
input.onButtonPressed(Button.B, function () {
    Minutos = Minutos + 1
})
let Minutos = 0
let Horas = 0
basic.showString("" + (Horas))
