function Play () {
    play = 1
    cursor.destroy()
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
    mySprite.ay = 200
    scene.cameraFollowSprite(mySprite)
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . d d d 
        . . . . . . 2 2 2 2 2 . . d d d 
        . . . . . 2 2 2 2 2 2 2 2 2 d d 
        . . . . . e e e d d e d . 2 2 2 
        . . . . e d e d d d e d d 2 2 2 
        . . . . e d e e d d d e d d d 2 
        . . . . e e d d d d e e e e e . 
        . . . . . . d d d d d d d e . . 
        . . e e e e e 2 e e e 2 e . . . 
        . e e e e e e e 2 e e e 2 . . e 
        d d e e e e e e 2 2 2 2 2 . . e 
        d d d . 2 2 e 2 2 d 2 2 d 2 e e 
        . d . e 2 2 2 2 2 2 2 2 2 2 e e 
        . . e e e 2 2 2 2 2 2 2 2 2 e e 
        . e e e 2 2 2 2 2 2 2 . . . . . 
        . e . . 2 2 2 2 . . . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . d d d 
        . . . . . . 2 2 2 2 2 . . d d d 
        . . . . . 2 2 2 2 2 2 2 2 2 d d 
        . . . . . e e e d d e d . 2 2 2 
        . . . . e d e d d d e d d 2 2 2 
        . . . . e d e e d d d e d d d 2 
        . . . . e e d d d d e e e e e . 
        . . . . . . d d d d d d d e . . 
        . . e e e e e 2 e e e 2 e . . . 
        . e e e e e e e 2 e e e 2 . . e 
        d d e e e e e e 2 2 2 2 2 . . e 
        d d d . 2 2 e 2 2 d 2 2 d 2 e e 
        . d . e 2 2 2 2 2 2 2 2 2 2 e e 
        . . e e e 2 2 2 2 2 2 2 2 2 e e 
        . e e e 2 2 2 2 2 2 2 . . . . . 
        . e . . 2 2 2 2 . . . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        d d d . . . . . . . . . . . . . 
        d d d . . 2 2 2 2 2 . . . . . . 
        d d 2 2 2 2 2 2 2 2 2 . . . . . 
        2 2 2 . d e d d e e e . . . . . 
        2 2 2 d d e d d d e d e . . . . 
        2 d d d e d d d e e d e . . . . 
        . e e e e e d d d d e e . . . . 
        . . e d d d d d d d . . . . . . 
        . . . e 2 e e e 2 e e e e e . . 
        e . . 2 e e e 2 e e e e e e e . 
        e . . 2 2 2 2 2 e e e e e e d d 
        e e 2 d 2 2 d 2 2 e 2 2 . d d d 
        e e 2 2 2 2 2 2 2 2 2 2 e . d . 
        e e 2 2 2 2 2 2 2 2 2 e e e . . 
        . . . . . 2 2 2 2 2 2 2 e e e . 
        . . . . . . . . 2 2 2 2 . . e . 
        `],
    100,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        d d d . . . . . . . . . . . . . 
        d d d . . 2 2 2 2 2 . . . . . . 
        d d 2 2 2 2 2 2 2 2 2 . . . . . 
        2 2 2 . d e d d e e e . . . . . 
        2 2 2 d d e d d d e d e . . . . 
        2 d d d e d d d e e d e . . . . 
        . e e e e e d d d d e e . . . . 
        . . e d d d d d d d . . . . . . 
        . . . e 2 e e e 2 e e e e e . . 
        e . . 2 e e e 2 e e e e e e e . 
        e . . 2 2 2 2 2 e e e e e e d d 
        e e 2 d 2 2 d 2 2 e 2 2 . d d d 
        e e 2 2 2 2 2 2 2 2 2 2 e . d . 
        e e 2 2 2 2 2 2 2 2 2 e e e . . 
        . . . . . 2 2 2 2 2 2 2 e e e . 
        . . . . . . . . 2 2 2 2 . . e . 
        `],
    100,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . 2 2 2 2 2 . . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . 
        . . . . e e e d d e d . . . . 
        . . . e d e d d d e d d d . . 
        . . . e d e e d d d e d d d . 
        . . . e e d d d d e e e e . . 
        . . . . . d d d d d d d . . . 
        . . . . e e 2 e e e . . . . . 
        . . . e e e 2 e e 2 e e e . . 
        . . e e e e 2 2 2 2 e e e e . 
        . . d d e 2 d 2 2 d 2 e d d . 
        . . d d d 2 2 2 2 2 2 d d d . 
        . . d d 2 2 2 2 2 2 2 2 d d . 
        . . . . 2 2 2 . . 2 2 2 . . . 
        . . . e e e . . . . e e e . . 
        . . e e e e . . . . e e e e . 
        `],
    100,
    characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . 2 2 2 2 2 . . . . . 
        . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . . . d e d d e e e . . . . 
        . . d d d e d d d e d e . . . 
        . d d d e d d d e e d e . . . 
        . . e e e e d d d d e e . . . 
        . . . d d d d d d d . . . . . 
        . . . . . e e e 2 e e . . . . 
        . . e e e 2 e e 2 e e e . . . 
        . e e e e 2 2 2 2 e e e e . . 
        . d d e 2 d 2 2 d 2 e d d . . 
        . d d d 2 2 2 2 2 2 d d d . . 
        . d d 2 2 2 2 2 2 2 2 d d . . 
        . . . 2 2 2 . . 2 2 2 . . . . 
        . . e e e . . . . e e e . . . 
        . e e e e . . . . e e e e . . 
        `],
    100,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . 2 2 2 2 2 . . . . . 
        . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . . . d e d d e e e . . . . 
        . . d d d e d d d e d e . . . 
        . d d d e d d d e e d e . . . 
        . . e e e e d d d d e e . . . 
        . . . d d d d d d d . . . . . 
        . . . . . e e e 2 e e . . . . 
        . . e e e 2 e e 2 e e e . . . 
        . e e e e 2 2 2 2 e e e e . . 
        . d d e 2 d 2 2 d 2 e d d . . 
        . d d d 2 2 2 2 2 2 d d d . . 
        . d d 2 2 2 2 2 2 2 2 d d . . 
        . . . 2 2 2 . . 2 2 2 . . . . 
        . . e e e . . . . e e e . . . 
        . e e e e . . . . e e e e . . 
        `,img`
        . . . . . 2 2 2 2 2 . . . . . 
        . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . . . d e d d e e e . . . . 
        . . d d d e d d d e d e . . . 
        . d d d e d d d e e d e . . . 
        . . e e e e d d d d e e . . . 
        . . . d d d d d d d . . . . . 
        . . . . . e e 2 2 e e e e . . 
        d d d e e e 2 2 2 e e e e d d 
        d d e e 2 2 2 d 2 e e . d d d 
        . e . . 2 2 2 2 2 2 2 . . d d 
        . e e 2 2 2 2 2 2 2 2 2 . . . 
        . e e 2 2 2 2 2 2 2 2 2 2 . . 
        . e e 2 2 2 . . . 2 2 2 e e . 
        . . . . . . . . . . . e e e . 
        . . . . . . . . . . e e e . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . 
        . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . . . d e d d e e e . . . . 
        . . d d d e d d d e d e . . . 
        . d d d e d d d e e d e . . . 
        . . e e e e d d d d e e . . . 
        . . . d d d d d d d . . . . . 
        . . . d . e 2 e e e e . . . . 
        . . d d d e e e e e e d . . . 
        . . . d d e e e e e 2 d d . . 
        . . . . 2 2 2 2 2 2 2 e e . . 
        . . . . 2 2 2 2 2 2 2 2 e . . 
        . . . . . 2 2 2 . 2 2 2 e e . 
        . . . . . . e e e . . . . e . 
        . . . . . e e e e . . . . . . 
        `,img`
        . . . . . 2 2 2 2 2 . . . . . 
        . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . . . d e d d e e e . . . . 
        . . d d d e d d d e d e . . . 
        . d d d e d d d e e d e . . . 
        . . e e e e d d d d e e . . . 
        . . . d d d d d d d . . . . . 
        . . . . . e e e 2 e e . . . . 
        . . . . e e 2 2 e e e e . . . 
        . . . d 2 2 d 2 2 e e e . . . 
        . . . 2 2 2 2 2 e e e e . . . 
        . . . 2 2 2 d d d e e 2 . . . 
        . . . . 2 2 2 d d e 2 . . . . 
        . . . . e e e 2 2 2 . . . . . 
        . . . e e e e e e e . . . . . 
        . . . . . . e e e e . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft, Predicate.HittingWallDown)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . 2 2 2 2 2 . . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . 
        . . . . e e e d d e d . . . . 
        . . . e d e d d d e d d d . . 
        . . . e d e e d d d e d d d . 
        . . . e e d d d d e e e e . . 
        . . . . . d d d d d d d . . . 
        . . . . e e 2 e e e . . . . . 
        . . . e e e 2 e e 2 e e e . . 
        . . e e e e 2 2 2 2 e e e e . 
        . . d d e 2 d 2 2 d 2 e d d . 
        . . d d d 2 2 2 2 2 2 d d d . 
        . . d d 2 2 2 2 2 2 2 2 d d . 
        . . . . 2 2 2 . . 2 2 2 . . . 
        . . . e e e . . . . e e e . . 
        . . e e e e . . . . e e e e . 
        `,img`
        . . . . . 2 2 2 2 2 . . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . 
        . . . . e e e d d e d . . . . 
        . . . e d e d d d e d d d . . 
        . . . e d e e d d d e d d d . 
        . . . e e d d d d e e e e . . 
        . . . . . d d d d d d d . . . 
        . . e e e e 2 2 e e . . . . . 
        d d e e e e 2 2 2 e e e d d d 
        d d d . e e 2 d 2 2 2 e e d d 
        d d . . 2 2 2 2 2 2 2 . . e . 
        . . . 2 2 2 2 2 2 2 2 2 e e . 
        . . 2 2 2 2 2 2 2 2 2 2 e e . 
        . e e 2 2 2 . . . 2 2 2 e e . 
        . e e e . . . . . . . . . . . 
        . . e e e . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . 
        . . . . e e e d d e d . . . . 
        . . . e d e d d d e d d d . . 
        . . . e d e e d d d e d d d . 
        . . . e e d d d d e e e e . . 
        . . . . . d d d d d d d . . . 
        . . . . e e e e 2 e . d . . . 
        . . . d e e e e e e d d d . . 
        . . d d 2 e e e e e d d . . . 
        . . e e 2 2 2 2 2 2 2 . . . . 
        . . e 2 2 2 2 2 2 2 2 . . . . 
        . e e 2 2 2 . 2 2 2 . . . . . 
        . e . . . . e e e . . . . . . 
        . . . . . . e e e e . . . . . 
        `,img`
        . . . . . 2 2 2 2 2 . . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . 
        . . . . e e e d d e d . . . . 
        . . . e d e d d d e d d d . . 
        . . . e d e e d d d e d d d . 
        . . . e e d d d d e e e e . . 
        . . . . . d d d d d d d . . . 
        . . . . e e 2 e e e . . . . . 
        . . . e e e e 2 2 e e . . . . 
        . . . e e e 2 2 d 2 2 d . . . 
        . . . e e e e 2 2 2 2 2 . . . 
        . . . 2 e e d d d 2 2 2 . . . 
        . . . . 2 e d d 2 2 2 . . . . 
        . . . . . 2 2 2 e e e . . . . 
        . . . . . e e e e e e e . . . 
        . . . . . e e e e . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight, Predicate.HittingWallDown)
    )
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile9`)
    controller.moveSprite(mySprite, 100, 0)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (play == 0) {
        brkslctd += 1
        if (brkslctd == 10) {
            brkslctd = 0
        }
        if (brkslctd == 0) {
            animation.runImageAnimation(
            brick_selected,
            [img`
                4 d d d d d d d d f 4 d d d d 4 
                d 4 4 4 4 4 4 4 4 f d 4 4 4 4 d 
                d 4 4 4 4 4 4 4 4 f d 4 4 4 4 d 
                d 4 4 4 4 4 4 4 4 f d 4 4 4 4 d 
                d 4 4 4 4 4 4 4 4 f d f 4 4 4 d 
                d 4 4 4 4 4 4 4 4 f 4 f f f f 4 
                d 4 4 4 4 4 4 4 4 f d d d d d f 
                d 4 4 4 4 4 4 4 4 f d 4 4 4 4 f 
                d 4 4 4 4 4 4 4 4 f d 4 4 4 4 f 
                d 4 4 4 4 4 4 4 f d 4 4 4 4 4 f 
                f f 4 4 4 4 4 4 f d 4 4 4 4 4 f 
                d d f f 4 4 4 f d 4 4 4 4 4 4 f 
                d 4 d d f f f f d 4 4 4 4 4 4 f 
                d 4 4 4 d d d f d 4 4 4 4 4 4 f 
                d 4 4 4 4 4 4 f d 4 4 4 4 4 f f 
                4 f f f f f f 4 d f f f f f f 4 
                `],
            500,
            false
            )
        } else if (brkslctd == 1) {
            animation.runImageAnimation(
            brick_selected,
            [img`
                f f f f f f f f f f f f f f f f 
                f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                f 4 f 4 4 4 4 4 4 4 4 4 4 f 4 f 
                f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                f 4 f 4 4 4 4 4 4 4 4 4 4 f 4 f 
                f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                f f f f f f f f f f f f f f f f 
                `],
            500,
            false
            )
        } else if (brkslctd == 2) {
            animation.runImageAnimation(
            brick_selected,
            [img`
                4 d d d d d d d d d d d d d d f 
                d 4 d d d d d d d d d d d d f f 
                d d 4 d d d d d d d d d d f f f 
                d d d 4 d d d d d d d d f f f f 
                d d d d 4 4 4 4 4 4 4 4 f f f f 
                d d d d 4 4 4 4 4 4 4 4 f f f f 
                d d d d 4 4 4 4 4 4 4 4 f f f f 
                d d d d 4 4 4 4 4 4 4 4 f f f f 
                d d d d 4 4 4 4 4 4 4 4 f f f f 
                d d d d 4 4 4 4 4 4 4 4 f f f f 
                d d d d 4 4 4 4 4 4 4 4 f f f f 
                d d d d 4 4 4 4 4 4 4 4 f f f f 
                d d d f f f f f f f f f 4 f f f 
                d d f f f f f f f f f f f 4 f f 
                d f f f f f f f f f f f f f 4 f 
                f f f f f f f f f f f f f f f 4 
                `],
            500,
            false
            )
        } else if (brkslctd == 3) {
            animation.runImageAnimation(
            brick_selected,
            [img`
                . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
                4 5 f 5 5 5 5 5 5 5 5 5 5 f 5 f 
                4 5 5 5 5 4 4 4 4 4 5 5 5 5 5 f 
                4 5 5 5 4 4 f f f 4 4 5 5 5 5 f 
                4 5 5 5 4 4 f 5 5 4 4 5 5 5 5 f 
                4 5 5 5 4 4 f 5 5 4 4 f 5 5 5 f 
                4 5 5 5 5 f f 5 4 4 4 f 5 5 5 f 
                4 5 5 5 5 5 5 4 4 f f f 5 5 5 f 
                4 5 5 5 5 5 5 4 4 f 5 5 5 5 5 f 
                4 5 5 5 5 5 5 5 f f 5 5 5 5 5 f 
                4 5 5 5 5 5 5 4 4 5 5 5 5 5 5 f 
                4 5 5 5 5 5 5 4 4 f 5 5 5 5 5 f 
                4 5 f 5 5 5 5 5 f f 5 5 5 f 5 f 
                4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
                f f f f f f f f f f f f f f f f 
                `],
            500,
            false
            )
        } else if (brkslctd == 4) {
            animation.runImageAnimation(
            brick_selected,
            [img`
                4 4 4 4 4 4 4 f 4 4 4 4 4 4 4 f 
                4 4 4 4 4 4 4 f 4 4 4 4 4 4 4 f 
                4 4 4 4 4 4 4 f 4 4 4 4 4 4 4 f 
                f f f f f f f f f f f f f f f f 
                4 4 4 f 4 4 4 4 4 4 4 f 4 4 4 4 
                4 4 4 f 4 4 4 4 4 4 4 f 4 4 4 4 
                4 4 4 f 4 4 4 4 4 4 4 f 4 4 4 4 
                f f f f f f f f f f f f f f f f 
                4 4 4 4 4 4 4 f 4 4 4 4 4 4 4 f 
                4 4 4 4 4 4 4 f 4 4 4 4 4 4 4 f 
                4 4 4 4 4 4 4 f 4 4 4 4 4 4 4 f 
                f f f f f f f f f f f f f f f f 
                4 4 4 f 4 4 4 4 4 4 4 f 4 4 4 4 
                4 4 4 f 4 4 4 4 4 4 4 f 4 4 4 4 
                4 4 4 f 4 4 4 4 4 4 4 f 4 4 4 4 
                f f f f f f f f f f f f f f f f 
                `],
            500,
            false
            )
        } else if (brkslctd == 5) {
            animation.runImageAnimation(
            brick_selected,
            [img`
                . . . . . 5 5 5 5 f f . . . . . 
                . . . . 5 5 5 5 5 5 f f . . . . 
                . . . . 5 5 5 5 5 5 f f . . . . 
                . . . 5 5 5 4 4 5 5 5 f f . . . 
                . . . 5 5 4 5 5 f 5 5 f f . . . 
                . . . 5 5 4 5 5 f 5 5 f f . . . 
                . . . 5 5 4 5 5 f 5 5 f f . . . 
                . . . 5 5 4 5 5 f 5 5 f f . . . 
                . . . 5 5 4 5 5 f 5 5 f f . . . 
                . . . 5 5 4 5 5 f 5 5 f f . . . 
                . . . 5 5 4 5 5 f 5 5 f f . . . 
                . . . 5 5 4 5 5 f 5 5 f f . . . 
                . . . 5 5 5 f f 5 5 5 f f . . . 
                . . . . 5 5 5 5 5 5 f f . . . . 
                . . . . 5 5 5 5 5 5 f f . . . . 
                . . . . . 5 5 5 5 f f . . . . . 
                `],
            500,
            false
            )
        } else if (brkslctd == 6) {
            animation.runImageAnimation(
            brick_selected,
            [img`
                3 3 3 3 3 3 3 3 3 7 3 7 7 7 f . 
                3 3 3 3 3 3 3 3 7 3 7 3 7 7 f . 
                3 3 3 3 3 3 3 3 3 7 3 7 7 7 f . 
                3 3 3 3 3 3 3 3 7 3 7 3 7 7 f . 
                3 3 3 3 3 3 3 3 3 7 3 7 7 7 f . 
                3 3 3 3 3 3 3 3 7 3 7 3 7 7 f . 
                3 3 3 3 3 3 3 3 3 7 3 7 7 7 f . 
                3 3 3 3 3 3 3 3 7 3 7 3 7 7 f . 
                3 3 3 3 3 3 3 3 3 7 3 7 7 7 f . 
                3 3 3 3 3 3 3 3 7 3 7 3 7 7 f . 
                3 3 3 3 3 3 3 3 3 7 3 7 7 7 f . 
                3 3 3 3 3 3 3 3 7 3 7 3 7 7 f . 
                3 3 3 3 3 3 3 3 3 7 3 7 7 7 f . 
                3 3 3 3 3 3 3 3 7 3 7 3 7 7 f . 
                3 3 3 3 3 3 3 3 3 7 3 7 7 7 f . 
                3 3 3 3 3 3 3 3 7 3 7 3 7 7 f . 
                `],
            500,
            false
            )
        } else if (brkslctd == 7) {
            animation.runImageAnimation(
            brick_selected,
            [img`
                . f 7 7 7 3 3 3 7 7 7 7 3 3 7 3 
                . f 7 7 7 3 3 3 7 7 7 7 3 3 7 3 
                . f 7 7 7 3 3 3 7 7 7 7 3 3 7 3 
                . f 7 7 7 3 3 3 7 7 7 7 3 3 7 3 
                . f 7 7 7 3 3 3 7 7 7 7 3 3 7 3 
                . f 7 7 7 3 3 3 7 7 7 7 3 3 7 3 
                . f 7 7 7 3 3 3 7 7 7 7 3 3 7 3 
                . f 7 7 7 3 3 3 7 7 7 7 3 3 7 3 
                . f 7 7 7 3 3 3 7 7 7 7 3 3 7 3 
                . f 7 7 7 3 3 3 7 7 7 7 3 3 7 3 
                . f 7 7 7 3 3 3 7 7 7 7 3 3 7 3 
                . f 7 7 7 3 3 3 7 7 7 7 3 3 7 3 
                . f 7 7 7 3 3 3 7 7 7 7 3 3 7 3 
                . f 7 7 7 3 3 3 7 7 7 7 3 3 7 3 
                . f 7 7 7 3 3 3 7 7 7 7 3 3 7 3 
                . f 7 7 7 3 3 3 7 7 7 7 3 3 7 3 
                `],
            500,
            false
            )
        } else if (brkslctd == 8) {
            animation.runImageAnimation(
            brick_selected,
            [img`
                f f f f f f f f f f f f f f f f 
                f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                f 3 3 3 3 3 7 7 7 7 7 3 3 3 3 3 
                f 7 7 7 3 3 7 7 7 7 7 3 3 7 7 3 
                f 7 7 7 3 3 7 7 7 7 7 3 3 7 7 3 
                f 7 7 7 3 3 7 7 7 7 7 3 3 7 7 3 
                f 7 7 7 3 3 7 7 7 7 7 3 3 7 7 3 
                f 7 7 7 3 3 7 7 7 7 7 3 3 7 7 3 
                f 7 7 7 3 3 7 7 7 7 7 3 3 7 7 3 
                f 7 7 7 3 3 7 7 7 7 7 3 3 7 7 3 
                f 7 7 7 3 3 7 7 7 7 7 3 3 7 7 3 
                f 7 7 7 3 3 7 7 7 7 7 3 3 7 7 3 
                f 7 7 7 3 3 7 7 7 7 7 3 3 7 7 3 
                f 7 7 7 3 3 7 7 7 7 7 3 3 7 7 3 
                f 7 7 7 3 3 7 7 7 7 7 3 3 7 7 3 
                f f f f f f f f f f f f f f f f 
                `],
            500,
            false
            )
        } else if (brkslctd == 9) {
            animation.runImageAnimation(
            brick_selected,
            [img`
                f f f f f f f f f f f f f f f f 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
                3 3 3 3 3 3 3 3 7 3 7 3 7 7 7 f 
                3 3 3 3 3 3 3 3 3 7 3 7 7 7 7 f 
                3 3 3 3 3 3 3 3 7 3 7 3 7 7 7 f 
                3 3 3 3 3 3 3 3 3 7 3 7 7 7 7 f 
                3 3 3 3 3 3 3 3 7 3 7 3 7 7 7 f 
                3 3 3 3 3 3 3 3 3 7 3 7 7 7 7 f 
                3 3 3 3 3 3 3 3 7 3 7 3 7 7 7 f 
                3 3 3 3 3 3 3 3 3 7 3 7 7 7 7 f 
                3 3 3 3 3 3 3 3 7 3 7 3 7 7 7 f 
                3 3 3 3 3 3 3 3 3 7 3 7 7 7 7 f 
                3 3 3 3 3 3 3 3 7 3 7 3 7 7 7 f 
                3 3 3 3 3 3 3 3 3 7 3 7 7 7 7 f 
                3 3 3 3 3 3 3 3 7 3 7 3 7 7 7 f 
                f f f f f f f f f f f f f f f f 
                `],
            500,
            false
            )
        }
    } else {
        controller.moveSprite(mySprite, 125, 0)
    }
})
function Make () {
    play = 0
    cursor = sprites.create(img`
        . f . . f . 
        f f . . f f 
        . . . . . . 
        . . . . . . 
        f f . . f f 
        . f . . f . 
        `, SpriteKind.Player)
    controller.moveSprite(cursor, 100, 100)
    scene.cameraFollowSprite(cursor)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile9`)
}
function Load () {
    tiles.setCurrentTilemap(tilemap`level3`)
    char = 0
    if (blockSettings.exists("level")) {
        x = 0
        y = 0
        level = blockSettings.readString("level")
        for (let index = 0; index < 200; index++) {
            for (let index = 0; index < 16; index++) {
                if (blockSettings.readString("level").charAt(char) == "_") {
                    tiles.setTileAt(tiles.getTileLocation(y, x), assets.tile`transparency16`)
                } else if (blockSettings.readString("level").charAt(char) == "g") {
                    tiles.setTileAt(tiles.getTileLocation(y, x), assets.tile`myTile`)
                } else if (blockSettings.readString("level").charAt(char) == "H") {
                    tiles.setTileAt(tiles.getTileLocation(y, x), assets.tile`myTile0`)
                } else if (blockSettings.readString("level").charAt(char) == "?") {
                    tiles.setTileAt(tiles.getTileLocation(y, x), assets.tile`myTile2`)
                } else if (blockSettings.readString("level").charAt(char) == "b") {
                    tiles.setTileAt(tiles.getTileLocation(y, x), assets.tile`myTile3`)
                } else if (blockSettings.readString("level").charAt(char) == "c") {
                    tiles.setTileAt(tiles.getTileLocation(y, x), assets.tile`myTile4`)
                } else if (blockSettings.readString("level").charAt(char) == "1") {
                    tiles.setTileAt(tiles.getTileLocation(y, x), assets.tile`myTile5`)
                } else if (blockSettings.readString("level").charAt(char) == "2") {
                    tiles.setTileAt(tiles.getTileLocation(y, x), assets.tile`myTile6`)
                } else if (blockSettings.readString("level").charAt(char) == "3") {
                    tiles.setTileAt(tiles.getTileLocation(y, x), assets.tile`myTile7`)
                } else if (blockSettings.readString("level").charAt(char) == "4") {
                    tiles.setTileAt(tiles.getTileLocation(y, x), assets.tile`myTile8`)
                } else if (blockSettings.readString("level").charAt(char) == "K") {
                    tiles.setTileAt(tiles.getTileLocation(y, x), assets.tile`myTile10`)
                }
                x += 1
                char += 1
            }
            x = 0
            y += 1
        }
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (play == 0) {
        if (brkslctd == 0) {
            tiles.setTileAt(cursor.tilemapLocation(), assets.tile`myTile`)
        } else if (brkslctd == 1) {
            tiles.setTileAt(cursor.tilemapLocation(), assets.tile`myTile0`)
        } else if (brkslctd == 2) {
            tiles.setTileAt(cursor.tilemapLocation(), assets.tile`myTile1`)
        } else if (brkslctd == 3) {
            tiles.setTileAt(cursor.tilemapLocation(), assets.tile`myTile2`)
        } else if (brkslctd == 4) {
            tiles.setTileAt(cursor.tilemapLocation(), assets.tile`myTile3`)
        } else if (brkslctd == 5) {
            tiles.setTileAt(cursor.tilemapLocation(), assets.tile`myTile4`)
        } else if (brkslctd == 6) {
            tiles.setTileAt(cursor.tilemapLocation(), assets.tile`myTile5`)
        } else if (brkslctd == 7) {
            tiles.setTileAt(cursor.tilemapLocation(), assets.tile`myTile6`)
        } else if (brkslctd == 8) {
            tiles.setTileAt(cursor.tilemapLocation(), assets.tile`myTile7`)
        } else if (brkslctd == 9) {
            tiles.setTileAt(cursor.tilemapLocation(), assets.tile`myTile8`)
        }
    } else {
        if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
            mySprite.vy = -165
        }
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    story.startCutscene(function () {
        story.showPlayerChoices("Save", "Load", "Create 1-1", "Make/Play", "Reset")
        if (story.getLastAnswer() == "Save") {
            Save()
        } else if (story.getLastAnswer() == "Load") {
            Load()
        } else if (story.getLastAnswer() == "Delete Save Data") {
            if (blockSettings.exists("level")) {
                blockSettings.remove("level")
            }
        } else if (story.getLastAnswer() == "Make/Play") {
            if (play == 0) {
                Play()
            } else {
                Make()
            }
        } else if (story.getLastAnswer() == "Reset") {
            tiles.setCurrentTilemap(tilemap`level4`)
        }
    })
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    if (play == 1) {
        controller.moveSprite(mySprite, 100, 0)
    }
})
function Save () {
    level = ""
    x = 0
    y = 0
    for (let index = 0; index < 200; index++) {
        for (let index = 0; index < 16; index++) {
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(y, x), assets.tile`transparency16`)) {
                level = "" + level + "_"
            } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(y, x), assets.tile`myTile`)) {
                level = "" + level + "g"
            } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(y, x), assets.tile`myTile0`)) {
                level = "" + level + "H"
            } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(y, x), assets.tile`myTile2`)) {
                level = "" + level + "?"
            } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(y, x), assets.tile`myTile3`)) {
                level = "" + level + "b"
            } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(y, x), assets.tile`myTile4`)) {
                level = "" + level + "c"
            } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(y, x), assets.tile`myTile5`)) {
                level = "" + level + "1"
            } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(y, x), assets.tile`myTile6`)) {
                level = "" + level + "2"
            } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(y, x), assets.tile`myTile7`)) {
                level = "" + level + "3"
            } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(y, x), assets.tile`myTile8`)) {
                level = "" + level + "4"
            } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(y, x), assets.tile`myTile10`)) {
                level = "" + level + "K"
            }
            x += 1
        }
        x = 0
        y += 1
    }
    blockSettings.writeString("level", level)
}
let level = ""
let y = 0
let x = 0
let char = 0
let mySprite: Sprite = null
let play = 0
let cursor: Sprite = null
let brkslctd = 0
let brick_selected: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundColor(9)
color.setColor(4, color.rgb(255, 90, 0))
color.setColor(3, color.rgb(0, 150, 0))
Make()
brick_selected = sprites.create(img`
    4 d d d d d d d d f 4 d d d d 4 
    d 4 4 4 4 4 4 4 4 f d 4 4 4 4 d 
    d 4 4 4 4 4 4 4 4 f d 4 4 4 4 d 
    d 4 4 4 4 4 4 4 4 f d 4 4 4 4 d 
    d 4 4 4 4 4 4 4 4 f d f 4 4 4 d 
    d 4 4 4 4 4 4 4 4 f 4 f f f f 4 
    d 4 4 4 4 4 4 4 4 f d d d d d f 
    d 4 4 4 4 4 4 4 4 f d 4 4 4 4 f 
    d 4 4 4 4 4 4 4 4 f d 4 4 4 4 f 
    d 4 4 4 4 4 4 4 f d 4 4 4 4 4 f 
    f f 4 4 4 4 4 4 f d 4 4 4 4 4 f 
    d d f f 4 4 4 f d 4 4 4 4 4 4 f 
    d 4 d d f f f f d 4 4 4 4 4 4 f 
    d 4 4 4 d d d f d 4 4 4 4 4 4 f 
    d 4 4 4 4 4 4 f d 4 4 4 4 4 f f 
    4 f f f f f f 4 d f f f f f f 4 
    `, SpriteKind.Player)
brick_selected.setStayInScreen(true)
brkslctd = 0
cursor.setFlag(SpriteFlag.GhostThroughWalls, true)
forever(function () {
    brick_selected.setPosition(0, 0)
})
