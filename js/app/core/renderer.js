define(['three', '../settings'], function (THREE, settings) {
    var renderer = new THREE.WebGLRenderer({
        antialias: false
    });

    renderer.shadowMapEnabled = true;
    renderer.shadowMapType    = THREE.PCFSoftShadowMap;

    function updateSize() {
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio || 1);
    }

    window.addEventListener('resize', updateSize, false);
    document.body.appendChild(renderer.domElement);
    updateSize();

    return renderer;
});