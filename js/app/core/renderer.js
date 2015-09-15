define(['three', '../settings'], function (THREE, settings) {
    var renderer = new THREE.WebGLRenderer({
        antialias: settings.antialiasing == 1,
        precision: settings.shader_detail
    });

    renderer.shadowMapEnabled = settings.shadows != 0;
    renderer.shadowMapType    = {
        1: THREE.BasicShadowMap,
        2: THREE.PCFShadowMap,
        3: THREE.PCFSoftShadowMap
    }[settings.shadows];

    renderer.autoClear = false;

    function updateSize() {
        renderer.setSize(
            window.innerWidth - window.innerWidth % 2, // FIX for canvas
            window.innerHeight - window.innerHeight % 2
        );
        renderer.setPixelRatio(window.devicePixelRatio || 1);
    }

    window.addEventListener('resize', updateSize, false);
    document.body.appendChild(renderer.domElement);
    updateSize();

    return renderer;
});