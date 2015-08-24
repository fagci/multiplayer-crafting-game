define([
    'three',
    'camera',
    'texture',
    'scene',
    'materials/lambert'
], function (THREE, camera, texture, scene, lambert_material) {
    scene.init = function() {
        console.info('Init scene');
        lambert_material.map = texture.sand;

        var plane_geometry = new THREE.PlaneBufferGeometry(1200, 1200, 1, 1),
            plane          = new THREE.Mesh(plane_geometry, lambert_material);

        plane.rotation.x = -Math.PI / 2;

        var sphere_geometry = new THREE.SphereGeometry(20, 32, 32),
            sphere          = new THREE.Mesh(sphere_geometry, lambert_material);

        sphere.position.y = 20;

        plane.receiveShadow  = true;
        sphere.receiveShadow = true;
        sphere.castShadow    = true;

        require(['meshes/rain'], function (rain) {
            scene.add(rain);
        });

        scene.add(plane);
        scene.add(sphere);

        camera.lookAt(scene.position);

    };

    return scene;
});