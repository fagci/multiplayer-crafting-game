define(['three', 'settings'], function (THREE, settings) {
    var renderer = new THREE.WebGLRenderer({
        antialias: !!settings.antialiasing
    });

    renderer.shadowMapEnabled = !!settings.shadows;
    renderer.shadowMapType    = THREE.PCFSoftShadowMap;
    document.body.appendChild(renderer.domElement);


    function updateSize() {
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio || 1);
    }

    window.addEventListener('resize', updateSize, false);
    updateSize();

    return renderer;
});