define(['three'], function (THREE) {
    console.info('Init camera...');
    var camera = new THREE.PerspectiveCamera(45, 1, 1, 2000);

    camera.position.y = 1.5;
    camera.position.x = 2;
    camera.position.z = -2;

    function updateSize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }

    window.addEventListener('resize', updateSize, false);
    updateSize();

    return camera;
});