define(['three'], function (THREE) {
    var camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);

    function updateSize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }

    window.addEventListener('resize', updateSize, false);
    updateSize();

    return camera;
});