define([
    'three',
    'camera',
    'textureManager',
    'scene',
    'materials/lambert',
    'perlin'
], function (THREE, camera, textureManager, scene, lambert_material, perlin) {
    scene.update = function (d) {
        "use strict";

    };
    scene.init   = function () {
        console.info('Init scene');
        textureManager.t.wrapS = THREE.RepeatWrapping;
        textureManager.t.wrapT = THREE.RepeatWrapping;
        textureManager.t.repeat.set(10, 10);
        lambert_material.map   = textureManager.t;

        var plane_geometry = new THREE.PlaneGeometry(10, 10, 100, 100),
            plane          = new THREE.Mesh(plane_geometry, lambert_material);

        plane.rotation.x = -Math.PI / 2;
        plane.name         = 'Ground';

        var quality = 100, height;

        perlin.seed(333);

        for (var i = 0, l = plane_geometry.vertices.length; i < l; i++) {
            var x                        = i % quality, y = Math.floor(i / quality);
            height                       = Math.abs(perlin.perlin3((x + 100) / 100, (y + 100) / 100, i / 10000)) / 2;
            plane_geometry.vertices[i].z = height;

        }


        var sphere_geometry = new THREE.SphereGeometry(0.5, 32, 32),
            sphere          = new THREE.Mesh(
                sphere_geometry,
                new THREE.MeshLambertMaterial({color: 0x444444})
            );

        sphere.position.y = 0;
        sphere.name       = 'Sphere';

        plane.receiveShadow  = true;
        sphere.receiveShadow = true;
        sphere.castShadow    = true;

        scene.add(plane);
        scene.add(sphere);

        camera.lookAt(scene.position);

    };

    return scene;
});