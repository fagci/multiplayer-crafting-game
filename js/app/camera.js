define(['three'], function (THREE) {
    console.info('Init camera...');
    var camera = new THREE.PerspectiveCamera(45, 1, 1, 2000);

    camera.position.y = 100;
    camera.position.x = 200;
    camera.position.z = -200;

    function updateSize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }

    window.addEventListener('resize', updateSize, false);
    updateSize();

    return camera;
});