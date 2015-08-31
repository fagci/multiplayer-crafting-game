define(['three', 'loadingManager', 'textureManager'],
    function (THREE, loading_manager, texture_manager) {
        "use strict";
        /*var loader  = new THREE.OBJLoader(loading_manager),
         objects = {};
         loader.load('resources/scout.json', function (obj) {
         objects.scout = obj;
         obj.traverse(function (child) {
         if (child instanceof THREE.Mesh) {
         child.material.map = texture_manager.sand;
         }
         });
         });*/

        var loader  = new THREE.JSONLoader();
        var objects = {};
        loader.load(
            'resources/player.json',
            function (geometry, materials) {
                geometry.verticesNeedUpdate = true;
                geometry.computeFaceNormals();
                geometry.computeVertexNormals();
                geometry.normalsNeedUpdate  = true;
                //var material  = new THREE.MeshFaceMaterial(materials);
                var material                = new THREE.MeshLambertMaterial();
                objects.scout               = new THREE.Mesh(geometry, material);
                objects.scout.scale.set(0.5, 0.5, 0.5);
                objects.scout.receiveShadow = true;
                objects.scout.castShadow    = true;
            }
        );

        loader.load(
            'resources/scoutHead.json',
            function (geometry, materials) {
                geometry.verticesNeedUpdate = true;
                geometry.computeFaceNormals();
                geometry.computeVertexNormals();
                geometry.normalsNeedUpdate  = true;
                geometry.applyMatrix(
                    new THREE.Matrix4().makeScale(0.5, 0.5, 0.5)
                );
                //var material  = new THREE.MeshFaceMaterial(materials);
                var material      = new THREE.MeshLambertMaterial();
                objects.scoutHead = new THREE.Mesh(geometry, material);
            }
        );

        return objects;
    });