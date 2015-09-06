define(function (require) {
    var THREE           = require('three'),
        cameraOrtho     = require('cameraOrtho'),
        player          = require('player'),
        texture_manager = require('textureManager'),
        keyboard        = require('keyControls');

    var scene    = new THREE.Scene();
    /**
     * Update scene objects
     * @param d
     */
    scene.update = function (d) {
        "use strict";
    };

    scene.init = function () {
        scene.add(cameraOrtho);
        texture_manager.crosshair.minFilter = THREE.LinearFilter;
        var ch                              = new THREE.Sprite(new THREE.SpriteMaterial({
            map: texture_manager.crosshair
        }));
        ch.scale.set(32, 32, 1);
        ch.position.set(0, 0, 1);
        scene.add(ch);
    };

    return scene;
});