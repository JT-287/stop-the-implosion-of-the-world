namespace SpriteKind {
    export const crack = SpriteKind.create()
    export const creature = SpriteKind.create()
    export const jerry = SpriteKind.create()
    export const ghost = SpriteKind.create()
}
namespace StatusBarKind {
    export const sleep = StatusBarKind.create()
    export const sanity = StatusBarKind.create()
}
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.LT, statusbars.ComparisonType.Percentage, 50, function (status) {
    effects.starField.startScreenEffect(5000)
    music.play(music.melodyPlayable(music.siren), music.PlaybackMode.InBackground)
})
statusbars.onStatusReached(StatusBarKind.Energy, statusbars.StatusComparison.GT, statusbars.ComparisonType.Percentage, 70, function (status) {
    music.play(music.melodyPlayable(music.siren), music.PlaybackMode.InBackground)
})
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 30, function (status) {
    scene.cameraShake(4, 5000)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    color.startFadeFromCurrent(color.White, 100)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    if (controller.A.isPressed()) {
        statusbar.value += 2
        statusbar2.value += 1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.crack, function (sprite, otherSprite) {
    for (let value of sprites.allOfKind(SpriteKind.crack)) {
        sprites.destroy(otherSprite)
    }
})
statusbars.onStatusReached(StatusBarKind.Energy, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 100, function (status) {
    music.play(music.createSoundEffect(WaveShape.Square, 3818, 2491, 147, 0, 554, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    color.startFadeFromCurrent(color.Black, 500)
})
let mySprite2: Sprite = null
let statusbar2: StatusBarSprite = null
let statusbar: StatusBarSprite = null
game.showLongText("welcome to Venus Industries.", DialogLayout.Full)
game.showLongText("as our newest employee, you will be taking care of the reactor.", DialogLayout.Full)
game.showLongText("to do this, you will use the red button to maintain the energy levels.", DialogLayout.Full)
game.showLongText("its that easy!", DialogLayout.Full)
game.showLongText("if the protective glass starts to crack, you can simply repair it by touching the cracks.", DialogLayout.Full)
game.showLongText("our previous employee claimed that someone was there with him, but can ensure you that you are forever alone.", DialogLayout.Full)
game.showLongText("good luck and keep an eye on those levels!", DialogLayout.Full)
scene.setBackgroundImage(img`
    fffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffffffffffffffffffffffbbbbbfffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffbb9bbbffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffbbbbbbbfffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffffffffffffffffffffffbbbbbffbffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffbffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffbffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffbfffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffbffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffbfffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffbffffffffffbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbffffffffffffffffffffbfffffffffffbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffffffffffffffffbfffffffffffbb9bbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffbffffffffffffbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffbfffffffffffffbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffbfffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffbffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffbffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffbffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbffffffffffbfffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbffffffffffbfffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb9bbffffffffffbfffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbffffffffffbfffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666669666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666996666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666669666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666669666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666669666666666669996666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666966666666696696666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666696666666666696666666966669666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666669666666666966666669666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666669666666669666666669666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666669666666999999999999966666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666669666699999999999999999666669996666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666969999999999999999999996696696666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666699999999999999999999999966696666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666999999999999999999999999966696666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66699999999999999999999999999999996666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666699999999999999999999999999999666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666999999999999999999999999999999966666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666999999999991111111119999999999966666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66669999999999111111111111199999999996666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66669999999991111111111111119999999996666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66699999999911111111111111111999999999666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66699999999911111111111111111999999999666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66699999999111111111111111111199999999666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66699999999111111111111111111199999999666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66699999999111111111111111111199999999666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66699999999111111111111111111199999999666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66699999999111111111111111111199999999666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66699999999111111111111111111199999999666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66699999999111111111111111111199999999666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66699999999111111111111111111199999999666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66699999999111111111111111111199999999666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66699999999911111111111111111999999999666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66699999999911111111111111111999999999666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66669999999991111111111111119999999996666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66669999999999111111111111199999999996666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666999999999991111111119999999999966666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66669999999999999999999999999999999966666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66669699999999999999999999999999999696666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66669669999999999999999999999999996696666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66996666999999999999999999999999966696666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666999999999999999999999999666669666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666969999999999999999999996666669666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666966699999999999999999666666669666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666696666999999999999969966666669666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666696666666966666666666696666669666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666669666666966666666669966666699666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666669996666666696666666666996666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666696666666666669666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666669666666666666966666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666669666666666666696666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666666966666666666669666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666699666666666666996666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffbbbbbffffffffffffffffffff66666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffbbbbbfffffbbbbbbbffffffff66666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffbb9bbfbbbbfffffffbfffffff66666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffbbbbbbbffffffffffffbffffff66666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffbbfbbbbbffffffffffffffbfffff66666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffbbfffffffffffffffffffffffbffff66666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffbfffffffffffffffffffffffffbffff66666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffbfffffffffffffffffffffffffffbfff66666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffbbbbbffffffffffff
    ffffffffffffffffffffffffffffbffffffffffffffffffffffffffffbfff66666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffbbbbbffffffffffff
    fffffffffffffffffffffffffffbffffffffffffffffffffffffffffffbff66666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffbb9bbffffffffffff
    ffffffffffffffffffffffffffbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffbbbbbbbbbbffffffff
    ffffffffffffffffffffffbbbbfffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffbbfbbbbbffffbbbbbfff
    fffffffffffffffbbbbbbbfffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbfffffffffffffffffbbf
    fffffbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffbffffffffffffffffffffff
    fffbbffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffbbbbbffffffffffffffffffbbbbbbfffffffffffffffffffffff
    fbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffbbbbfffffffffffbbbfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffbbbffffbbbbffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffbbbbffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb9bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level4`))
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.setLabel("caution level", 1)
statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
statusbar.positionDirection(CollisionDirection.Bottom)
statusbar.setColor(7, 2)
statusbar2 = statusbars.create(20, 4, StatusBarKind.Energy)
statusbar2.setLabel("overload", 1)
statusbar2.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
statusbar2.positionDirection(CollisionDirection.Top)
statusbar2.setColor(2, 7)
statusbar2.value = 0
let mySprite = sprites.create(img`
    . . . . . . . . . . . 
    f . . . . . . . . . . 
    f f . . . . . . . . . 
    f 1 f . . . . . . . . 
    f 1 1 f . . . . . . . 
    f 1 1 1 f . . . . . . 
    f 1 1 1 1 f . . . . . 
    f 1 1 1 1 1 f . . . . 
    f 1 1 1 1 1 1 f . . . 
    f 1 1 1 1 1 1 1 f . . 
    f 1 1 1 1 1 1 1 1 f . 
    f 1 1 1 1 1 f f f f f 
    f 1 1 f 1 1 f . . . . 
    f 1 f . f 1 1 f . . . 
    f f . . f 1 1 f . . . 
    f . . . . f 1 1 f . . 
    . . . . . f 1 1 f . . 
    . . . . . . f 1 1 f . 
    . . . . . . f 1 1 f . 
    . . . . . . . f f . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
game.onUpdateInterval(2000, function () {
    music.play(music.melodyPlayable(music.sonar), music.PlaybackMode.InBackground)
})
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
})
game.onUpdateInterval(1000, function () {
    statusbar2.value += -1
})
game.onUpdateInterval(randint(10000, 20000), function () {
    music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.InBackground)
})
game.onUpdateInterval(500, function () {
    statusbar.value += -1
})
game.onUpdateInterval(10000, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . c c . . . . . . . . . . . . 
        c c . . c . . . . . . . . . . . 
        . . . . c . . . . . c c . . . . 
        . . . . c c . . . . c . c c c . 
        . . . . . c . . . . c . . c . . 
        . . . . . c . . c c . . . . . . 
        . . . . c . . c . . . . . . . . 
        . . . . . c c c . . . . . . . . 
        . . . . . . c c . . . . . . . . 
        . . . . . c c . c . . . . . . . 
        . . . c c c . . . c c . . . . . 
        . . . . c . . . . . . . . . . . 
        . c c c c c . . . . . . . . . . 
        . c . . . . . . . . . . . . . . 
        . . c . . . . . . . . . . . . . 
        `, SpriteKind.crack)
    tiles.placeOnRandomTile(mySprite2, assets.tile`transparency8`)
    music.play(music.createSoundEffect(WaveShape.Noise, 3900, 3500, 255, 0, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
})
