define(['../objects/camera', 'pointer_lock_controls'],
    function (camera, PointerLockControls, scene) {
        "use strict";
        var document      = window.document;
        var controls      = new THREE.PointerLockControls(camera, document);
        return controls;
    }
);