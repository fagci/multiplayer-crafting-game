define(['three', 'loadingManager'],
    function (THREE, loading_manager) {
        "use strict";

        var loader = new THREE.JSONLoader(loading_manager);
        var objects = {};
        loader.load(
            'resources/scout.json',
            function (geometry, materials) {
                geometry.mergeVertices();
                geometry.computeFaceNormals();
                geometry.computeVertexNormals();

                //var material = new THREE.MeshFaceMaterial(materials);
                var material = new THREE.MeshLambertMaterial({color: 0x666666});
                var player           = new THREE.Mesh(geometry, material);

                player.scale.set(0.5, 0.5, 0.5);
                player.updateMatrix();
                player.overdraw      = true;
                player.receiveShadow = true;
                player.castShadow    = true;
                objects.scout        = player;

            }
        );

        loader.load(
            'resources/scoutHead.json',
            function (geometry, materials) {
                geometry.verticesNeedUpdate = true;
                geometry.computeFaceNormals();
                geometry.computeVertexNormals();
                geometry.normalsNeedUpdate  = true;
                //var material  = new THREE.MeshFaceMaterial(materials);
                var material      = new THREE.MeshLambertMaterial({color: 0x666666});
                var head          = new THREE.Mesh(geometry, material);
                head.scale.set(0.5, 0.5, 0.5);
                objects.scoutHead = head;
            }
        );

        return objects;
    });
