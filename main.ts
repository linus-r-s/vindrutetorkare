basic.forever(function () {
    servos.P0.setAngle(15)
    basic.pause(1000)
    servos.P0.setAngle(165)
    basic.pause(1000)
})
