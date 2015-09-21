define(function (require) {
    var THREE           = require('three'),
        camera          = require('camera'),
        light           = require('light'),
        objectManager   = require('objectManager'),
        textureManager  = require('textureManager'),
        scene           = require('scene'),// TODO: переделать для использования scene manager'ом
        player,
        TextSprite      = require('ui/textSprite'),
        GroundGenerator = require('objects/ground'),
        keyboard        = require('keyControls'),
        s,
        human;

    var raycaster = new THREE.Raycaster(), ts, bb;


    /**
     * Update scene objects
     * @param d
     */
    scene.update = function (d) {

        if (player) player.update(d);

        //raycaster.set(camera.getWorldPosition(), camera.getWorldDirection());
        //raycaster.far  = 3;
        //raycaster.near = 1;
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
        for (i = 0; i < 5; i++) {
            var geometry = [
                new THREE.BoxGeometry(0.5, 0.5, 0.5),
                new THREE.SphereGeometry(0.25, 16, 16)
            ];
            var box      = new Physijs.ConvexMesh(
                geometry[~~(Math.random() * geometry.length)],
                new THREE.MeshLambertMaterial({color: 0x888888}), 1
            );

            box.position.y = Math.random() * 10 + 5;
            box.position.x = Math.random() * 10 - 5;
            box.position.z = Math.random() * 10 - 5;

            box.castShadow    = true;
            box.receiveShadow = true;

            scene.add(box);
        }
        ts = TextSprite.create('Test');
        scene.add(ts);

        player = require('player');
        //human  = require('entity/player/human');

        //human.add(axisHelper);

        //human.castShadow    = true;
        //human.receiveShadow = true;

        textureManager.t.wrapS = THREE.RepeatWrapping;
        textureManager.t.wrapT = THREE.RepeatWrapping;
        textureManager.t.repeat.set(10, 10);

        textureManager.sand.wrapS = THREE.RepeatWrapping;
        textureManager.sand.wrapT = THREE.RepeatWrapping;
        textureManager.sand.repeat.set(10, 10);

        var grid        = new THREE.GridHelper(10, 1),
            axis_helper = new THREE.AxisHelper(5);


        player.position.y = 0;
        player.position.z = -4;
        player.rotation.y = -Math.PI;

        player.children[0].rotation.x = -Math.PI / 18;


        grid.position.y        = 0.00001;
        axis_helper.position.y = 0.00002;

        scene.add(player);

        //scene.add(human);
        scene.add(GroundGenerator.getGround(0,0));

        scene.add(grid);
        scene.add(axis_helper);

        camera.lookAt(scene.position);

    };

    return scene;
});