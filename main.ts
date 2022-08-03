function MARIO () {
    controller.moveSprite(cursor, 100, 0)
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
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
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
    tiles.setTileAt(cursor.tilemapLocation(), assets.tile`myTile0`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    story.startCutscene(function () {
        story.showPlayerChoices("Save", "Load", "Delete Save Data")
        if (story.getLastAnswer() == "Save") {
            Save()
        } else if (story.getLastAnswer() == "Load") {
            Load()
        } else if (story.getLastAnswer() == "Delete Save Data") {
            if (blockSettings.exists("level")) {
                blockSettings.remove("level")
            }
        }
    })
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
let cursor: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundColor(9)
color.setColor(4, color.rgb(255, 90, 0))
color.setColor(3, color.rgb(0, 150, 0))
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
