input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
input.onButtonPressed(Button.B, function () {
    moistureReading = Math.map(pins.analogReadPin(AnalogPin.P0), 0, 750, 0, 100)
    basic.showNumber(Math.round(moistureReading))
})
let moistureReading = 0
pins.digitalWritePin(DigitalPin.P1, 0)
/**
 * Soil Moisture Sensor: P0
 * 
 * Relay module: P1
 */
basic.forever(function () {
    moistureReading = Math.map(pins.analogReadPin(AnalogPin.P0), 0, 750, 0, 3)
    if (moistureReading < 1) {
        basic.showLeds(`
            # . . . #
            # # . # #
            . # . # .
            . # . # .
            . # # # .
            `)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else if (moistureReading >= 1 && moistureReading < 2) {
        basic.showLeds(`
            # . . . #
            # # . # #
            . # # # .
            . # # # .
            . # # # .
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            . # # # .
            . # # # .
            . # # # .
            `)
    }
})
