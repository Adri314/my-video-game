sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    mySprite2.setPosition(randint(8, 152), randint(8, 112))
    info.changeScoreBy(1)
})
let mySprite2: Sprite = null
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    e e e . . . . e e e . . . . 
    c 8 8 c . . c 8 8 c . . . . 
    c b 8 8 f f 8 8 b c . . . . 
    c 3 b 8 8 b 8 b 3 c . . . . 
    f b 3 8 8 8 8 3 b f . . . . 
    e 8 8 8 8 8 8 8 8 e . . . . 
    e 8 f 8 8 8 8 f 8 e . b f b 
    f 8 8 f 8 8 f 8 8 f . f 8 f 
    f b 8 8 b b 8 8 2 f . f 8 f 
    . f 2 2 2 2 2 2 b b f f 8 f 
    . f b 8 8 8 8 8 8 b b 8 b f 
    . f 8 8 8 8 8 b 8 8 f f f . 
    . f 8 f f f 8 f f 8 f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.setScore(0)
mySprite2 = sprites.create(img`
    . . . . . . . e c 7 . . . . . . 
    . . . . e e e c 7 7 e e . . . . 
    . . c e e e e c 7 e 2 2 e e . . 
    . c e e e e e c 6 e e 2 2 2 e . 
    . c e e e 2 e c c 2 4 5 4 2 e . 
    c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
    . e e e 2 2 2 2 2 2 2 2 2 4 e . 
    . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
    . . 2 e e 2 2 2 2 2 4 4 2 e . . 
    . . . 2 2 e e 4 4 4 2 e e . . . 
    . . . . . 2 2 e e e e . . . . . 
    `, SpriteKind.Food)
mySprite2.setPosition(randint(8, 152), randint(8, 112))
