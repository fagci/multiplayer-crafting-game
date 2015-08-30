define([
    'three',
    'camera',
    'textureManager',
    'scene',
    'materials/lambert',
    'perlin',
    'player',
    'entity/player/human',
    'conzole'
], function (THREE, camera, textureManager, scene, lambert_material, perlin, player, human) {
    /**
     * Update scene objects
     * @param d
     */
    scene.update = function (d) {
        "use strict";
        player.update(d);
    };

    /**
     * Init scene
     */
    scene.init = function () {
        console.info('Init scene');
        textureManager.t.wrapS = THREE.RepeatWrapping;
        textureManager.t.wrapT = THREE.RepeatWrapping;
        textureManager.t.repeat.set(10, 10);
        lambert_material.map   = textureManager.t;

        var pws = 100, phs = 100;

        var plane_geometry = new THREE.PlaneGeometry(10, 10, pws, phs),
            plane          = new THREE.Mesh(plane_geometry, lambert_material);

        plane.rotation.x = -Math.PI / 2;
        plane.name       = 'Ground';

        var height, level;

        perlin.seed(3333);

        for (var i = 0, l = plane_geometry.vertices.length; i < l; i++) {
            var x = i % pws,
                y = Math.floor(i / phs);

            height = 0;
            level  = 8;

            height += (perlin.simplex2(x / level, y / level) / 2 + 0.5) * 0.125;
            level *= 3;
            height += (perlin.simplex2(x / level, y / level) / 2 + 0.5) * 0.25;
            level *= 2;
            height += (perlin.simplex2(x / level, y / level) / 2 + 0.5) * 0.5;
            level *= 2;
            height += (perlin.simplex2(x / level, y / level) / 2 + 0.5);
            height /= 1 + 0.5 + 0.25 + 0.125;

            plane_geometry.vertices[i].z = (height - 0.5) * 2;

            //plane_geometry.vertices[i].z = height;
        }

        plane_geometry.verticesNeedUpdate = true;
        plane_geometry.computeFaceNormals();
        plane_geometry.computeVertexNormals();
        plane_geometry.normalsNeedUpdate  = true;

        var sphere_geometry = new THREE.SphereGeometry(0.25, 32, 32),
            sphere          = new THREE.Mesh(
                sphere_geometry,
                new THREE.MeshLambertMaterial({color: 0x444444})
            );

        sphere.position.y = 0.5;
        sphere.name       = 'Sphere';

        plane.receiveShadow  = true;
        plane.castShadow = true;
        sphere.receiveShadow = true;
        sphere.castShadow    = true;

        player.position.y = 2;

        scene.add(plane);
        scene.add(sphere);
        scene.add(player);
        scene.add(human);

        camera.lookAt(scene.position);

    };

    return scene;
});