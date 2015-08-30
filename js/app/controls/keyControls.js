define(['threex', 'player'], function (THREEx, player) {
    "use strict";

    console.log('Init key controls:', THREEx);
    var keyboard = new THREEx.KeyboardState();
    keyboard.domElement.addEventListener('keydown', function (event) {
        if (keyboard.eventMatches(event, 'w'))    player.move.forward = true;
        if (keyboard.eventMatches(event, 's'))    player.move.backward = true;
        if (keyboard.eventMatches(event, 'a'))    player.move.left = true;
        if (keyboard.eventMatches(event, 'd'))    player.move.right = true;
    });
    keyboard.domElement.addEventListener('keyup', function (event) {
        if (keyboard.eventMatches(event, 'w'))    player.move.forward = false;
        if (keyboard.eventMatches(event, 's'))    player.move.backward = false;
        if (keyboard.eventMatches(event, 'a'))    player.move.left = false;
        if (keyboard.eventMatches(event, 'd'))    player.move.right = false;
    });
    return keyboard;
});