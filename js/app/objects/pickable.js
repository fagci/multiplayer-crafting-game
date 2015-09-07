define(['three'], function (THREE) {
    "use strict";
    var Pickable = function () {
        var o  = new THREE.Object3D();
        o.pick = function () {
            o.parent.remove(o);
        };
        return o;
    };
    return Pickable;
});