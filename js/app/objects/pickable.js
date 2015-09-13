define(['three'], function (THREE) {

    var Pickable = function () {
        var o  = new THREE.Object3D();
        o.pick = function () {
            o.parent.remove(o);
        };
        return o;
    };
    return Pickable;
});