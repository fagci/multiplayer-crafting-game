/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.PointerLockControls = function (camera, document) {

    var scope = this;
    var mx                = 0, my = 0;
    var mouse_sensitivity = 0.1;

    camera.rotation.set(0, 0, 0);
    camera.updateProjectionMatrix();

    var pitchObject = new THREE.Object3D();
    pitchObject.add(camera);

    var yawObject        = new THREE.Object3D();
    yawObject.position.y = 10;
    yawObject.add(pitchObject);

    var PI_2 = Math.PI / 2;

    var onMouseMove = function (event) {
        if (scope.enabled === false) return;

        if (event.changedTouches) {
            mx += event.changedTouches[0].pageX;
            my += event.changedTouches[0].pageY;
        } else {
            mx += event.movementX;
            my += event.movementY;
        }


    };

    document.addEventListener('mousemove', onMouseMove, false);
    document.addEventListener('touchmove', onMouseMove);

    this.enabled = false;

    this.update = function (d) {

        yawObject.rotation.y -= mx * mouse_sensitivity * d;
        pitchObject.rotation.x -= my * mouse_sensitivity * d;
        mx                     = 0;
        my                     = 0;
        pitchObject.rotation.x = Math.max(-PI_2, Math.min(PI_2, pitchObject.rotation.x));
    };

    this.getObject = function () {

        return yawObject;

    };

    this.getDirection = function () {

        // assumes the camera itself is not rotated

        var direction = new THREE.Vector3(0, 0, -1);
        var rotation  = new THREE.Euler(0, 0, 0, "YXZ");

        return function (v) {

            rotation.set(pitchObject.rotation.x, yawObject.rotation.y, 0);

            v.copy(direction).applyEuler(rotation);

            return v;

        }

    }();

};
