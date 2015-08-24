define([
    'three',
    'camera',
    'texture',
    'scene',
    'materials/lambert'
], function (THREE, camera, texture, scene, lambert_material) {
    console.log('Init main scene', texture);

    var plane_geometry, sphere_geometry, plane, sphere, rain;

    scene.init = function () {
        lambert_material.map = texture.sand;

        plane_geometry   = new THREE.PlaneBufferGeometry(1200, 1200, 1, 1);
        plane            = new THREE.Mesh(plane_geometry, lambert_material);
        plane.rotation.x = -Math.PI / 2;

        sphere_geometry   = new THREE.SphereGeometry(20, 32, 32);
        sphere            = new THREE.Mesh(sphere_geometry, lambert_material);
        sphere.position.y = 20;

        plane.receiveShadow  = true;
        sphere.receiveShadow = true;
        sphere.castShadow    = true;

        rain = require('meshes/rain');

        scene.add(plane);
        scene.add(sphere);
        scene.add(rain);

        camera.lookAt(scene.position);
    };
    return scene;
});