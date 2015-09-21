define(['three', 'loadingManager'],
    function (THREE, loader) {
        var jLoader = new THREE.JSONLoader(loader),
            objects = {};

        //jLoader.load(
        //    'resources/obj/scout/body.json',
        //    function (geometry, materials) {
        //        geometry.mergeVertices();
        //        geometry.computeFaceNormals();
        //        geometry.computeVertexNormals();
        //
        //        var material = new THREE.MeshFaceMaterial(materials),
        //            player   = new THREE.Mesh(geometry, material);
        //
        //        player.scale.set(0.5, 0.5, 0.5);
        //        player.updateMatrix();
        //
        //        player.receiveShadow = true;
        //        player.castShadow    = true;
        //        objects.scout        = player;
        //    }
        //);
        //
        //jLoader.load(
        //    'resources/obj/scout/head.json',
        //    function (geometry, materials) {
        //        geometry.verticesNeedUpdate = true;
        //        geometry.computeFaceNormals();
        //        geometry.computeVertexNormals();
        //        geometry.normalsNeedUpdate  = true;
        //        var material      = new THREE.MeshFaceMaterial(materials);
        //        objects.scoutHead = new THREE.Mesh(geometry, material);
        //    }
        //);

        return objects;
    });
