controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -165
    }
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . 2 2 2 2 2 . . . . 
    . . 2 2 2 2 2 2 2 2 2 . 
    . . e e e d d e d . . . 
    . e d e d d d e d d d . 
    . e d e e d d d e d d d 
    . e e d d d d e e e e . 
    . . . d d d d d d d . . 
    . . e e 2 e e e . . . . 
    . e e e 2 e e 2 e e e . 
    e e e e 2 2 2 2 e e e e 
    d d e 2 d 2 2 d 2 e d d 
    d d d 2 2 2 2 2 2 d d d 
    d d 2 2 2 2 2 2 2 2 d d 
    . . 2 2 2 . . 2 2 2 . . 
    . e e e . . . . e e e . 
    e e e e . . . . e e e e 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundColor(9)
color.setColor(4, color.rgb(255, 90, 0))
color.setColor(3, color.rgb(0, 150, 0))
scene.cameraFollowSprite(mySprite)
mySprite.ay = 200
