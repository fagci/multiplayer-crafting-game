define(function (require) {
    var THREE            = require('three'),
        camera           = require('camera'),
        light          = require('light'),
        objectManager    = require('objectManager'),
        textureManager = require('textureManager'),
        scene            = require('scene'),// TODO: переделать для использования scene manager'ом
        lambert_material = require('materials/lambert'),
        perlin           = require('perlin'),
        player,
        TextSprite     = require('ui/textSprite'),
        keyboard       = require('keyControls'),
        human;

    var raycaster = new THREE.Raycaster(), ts, bb;


    /**
     * Update scene objects
     * @param d
     */
    scene.update = function (d) {

        player.update(d);

        raycaster.set(camera.getWorldPosition(), camera.getWorldDirection());
        raycaster.far = 3;
        raycaster.near = 1;
        /*var is         = raycaster.intersectObjects([human]);
         if (is.length > 0) {
         is[0].face.scale.set(0.1,0.1,0.1);
         is[0].object.geometry.colorsNeedUpdate = true;
         ts.position.set(0, 1, 0);
         //ts.position.x = is[0].object.position.x;
         //ts.position.y = is[0].object.position.y;
         //ts.position.z = is[0].object.position.z;
         //console.log(is[0]);
         }*/
    };

    var axisHelper = new THREE.AxisHelper(5);

    scene.init = function () {
        ts = TextSprite.create('Test');
        scene.add(ts);

        player = require('player');
        human  = require('entity/player/human');

        human.add(axisHelper);

        human.castShadow    = true;
        human.receiveShadow = true;

        textureManager.t.wrapS = THREE.RepeatWrapping;
        textureManager.t.wrapT = THREE.RepeatWrapping;
        textureManager.t.repeat.set(10, 10);
        //lambert_material.map   = textureManager.t;

        var pws = 10, phs = 10;

        var plane_geometry = new THREE.PlaneGeometry(10, 10, pws, phs),
            plane         = new THREE.Mesh(plane_geometry, lambert_material),
            grid          = new THREE.GridHelper(10, 1),
            axis_helper   = new THREE.AxisHelper(5);

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
        player.position.z = -4;
        player.rotation.z = -Math.PI;

        player.children[0].rotation.x = -Math.PI / 18;


        grid.position.y        = 0.00001;
        axis_helper.position.y = 0.00002;

        scene.add(plane);
        scene.add(player);

        scene.add(human);
        scene.add(grid);
        scene.add(axis_helper);

        //camera.lookAt(scene.position);

    };

    return scene;
});