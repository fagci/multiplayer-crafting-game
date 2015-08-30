define(['../objects/camera', 'pointer_lock_controls', 'scene'],
    function (camera, PointerLockControls, scene) {
        "use strict";
        var document      = window.document;
        var controls      = new THREE.PointerLockControls(camera, document);
        var player        = controls.getObject();
        player.position.y = 2;
        scene.add(player);
        return controls;
    }
);