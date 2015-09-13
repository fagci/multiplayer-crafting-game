define(['camera', 'pointer_lock_controls'],
    function (camera, PointerLockControls) {

        var document = window.document;
        var controls = new THREE.PointerLockControls(camera, document);
        return controls;
    }
);