define(['three', '../core/scene'], function (THREE, scene) {
    var hemiLight = new THREE.HemisphereLight(0x3388cc, 0xcccc88, 0.6),
        sunLight                    = new THREE.DirectionalLight(),
        shadowLight                 = new THREE.DirectionalLight();

    shadowLight.position.set(25, 70, 25);
    sunLight.position.set(2500, 7000, 2500);
    shadowLight.intensity           = 1;
    shadowLight.castShadow          = true;
    shadowLight.shadowCameraVisible = true;

//    sunlight.shadowMapSoft = true;

    shadowLight.shadowCameraNear = 1;
    shadowLight.shadowCameraFar  = 100;

    shadowLight.shadowMapBias = 0.1;
    shadowLight.shadowMapDarkness = 0.8;
    shadowLight.shadowMapWidth    = 1024;
    shadowLight.shadowMapHeight   = 1024;

    var d = 20;

    shadowLight.shadowCameraLeft = -d; // or whatever value works for the scale of your scene
    shadowLight.shadowCameraRight  = d;
    shadowLight.shadowCameraTop    = d;
    shadowLight.shadowCameraBottom = -d;

    shadowLight.onlyShadow = true;

    scene.add(hemiLight);
    scene.add(sunLight);
    scene.add(shadowLight);
});