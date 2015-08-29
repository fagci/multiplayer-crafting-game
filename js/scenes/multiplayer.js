define([
    'three',
    'camera',
    'textureManager',
    'scene',
    'materials/lambert',
], function (THREE, camera, textureManager, scene, lambert_material) {

    scene.init = function () {
        console.info('Init MP scene');
        lambert_material.map = textureManager.testHex;

        var plane_geometry = new THREE.PlaneBufferGeometry(1200, 1200, 1, 1),
            plane          = new THREE.Mesh(plane_geometry, lambert_material);

        plane.rotation.x = -Math.PI / 2;

        var sphere_geometry = new THREE.SphereGeometry(10, 32, 32),
            sphere          = new THREE.Mesh(sphere_geometry, lambert_material);

        sphere.position.y = 20;

        plane.receiveShadow  = true;
        sphere.receiveShadow = true;
        sphere.castShadow    = true;

        scene.add(plane);
        scene.add(sphere);

        camera.lookAt(scene.position);

    };

    return scene;
});