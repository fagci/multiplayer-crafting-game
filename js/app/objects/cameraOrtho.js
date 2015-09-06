define(['three'], function (THREE) {
    var width              = window.innerWidth;
    var height             = window.innerHeight;
    var cameraOrtho        = new THREE.OrthographicCamera(-width / 2, width / 2, height / 2, -height / 2, 1, 10);
    cameraOrtho.position.z = 10;

    function updateSize() {
        var width  = window.innerWidth;
        var height = window.innerHeight;

        cameraOrtho.left   = -width / 2;
        cameraOrtho.right  = width / 2;
        cameraOrtho.top    = height / 2;
        cameraOrtho.bottom = -height / 2;
        cameraOrtho.updateProjectionMatrix();

    }

    window.addEventListener('resize', updateSize, false);
    updateSize();

    return cameraOrtho;
});