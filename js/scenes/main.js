define(function (require) {
    var THREE            = require('three'),
        camera           = require('camera'),
        light    = require('light'),
        textureManager   = require('textureManager'),
        objectManager    = require('objectManager'),
        scene            = require('scene'),// TODO: переделать для использования scene manager'ом
        lambert_material = require('materials/lambert'),
        perlin           = require('perlin'),
        player           = require('player'),
        keyboard = require('keyControls'),
        human            = require('entity/player/human');

    var raycaster = new THREE.Raycaster();

    /**
     * Update scene objects
     * @param d
     */
    scene.update = function (d) {
        "use strict";
        player.update(d);

        raycaster.set(camera.position, camera.getWorldDirection());
        raycaster.far  = 2;
        raycaster.near = 1;
        var is         = raycaster.intersectObjects([human]);
        if (is.length > 0) console.log(is);
    };

    scene.init = function () {
        textureManager.t.wrapS = THREE.RepeatWrapping;
        textureManager.t.wrapT = THREE.RepeatWrapping;
        textureManager.t.repeat.set(10, 10);
        //lambert_material.map   = textureManager.t;

        var pws = 10, phs = 10;

        var plane_geometry = new THREE.PlaneGeometry(10, 10, pws, phs),
            plane       = new THREE.Mesh(plane_geometry, lambert_material),
            grid        = new THREE.GridHelper(10, 1),
            axis_helper = new THREE.AxisHelper(5);

        plane.rotation.x = -Math.PI / 2;
        plane.name       = 'Ground';
        /*
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
         }

         plane_geometry.verticesNeedUpdate = true;
         plane_geometry.computeFaceNormals();
         plane_geometry.computeVertexNormals();
         plane_geometry.normalsNeedUpdate  = true;
         */

        plane.receiveShadow = true;
        plane.castShadow    = true;

        player.position.y = 0;
        player.position.z             = 4;
        player.children[0].rotation.x = -Math.PI / 18;

        human.castShadow    = true;
        human.receiveShadow = true;

        grid.position.y        = 0.00001;
        axis_helper.position.y = 0.00002;

        scene.add(plane);
        scene.add(player);

        scene.add(human);
        scene.add(grid);
        scene.add(axis_helper);

        camera.lookAt(scene.position);

    };

    return scene;
});