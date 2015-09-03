define(['three', /*'net/network',*/ 'player', 'objectManager'],
    function (THREE, /*socket,*/ player, objectManager) {
        "use strict";
        return new THREE.Object3D(); //TODO: fix loader
        var playerData,
            human_head = objectManager.scoutHead,
            human_body = objectManager.scout;

        human_body.position.y = 0;
        human_head.position.y = 1.8;
        human_body.add(human_head);

        //socket.on('message', function (msg) {
        //    /** @prop id */
        //    playerData = msg.text;
        //    if (!playerData || playerData.id == player.netId) return;
        //    human_body.position.x = playerData.pos.x;
        //    human_body.position.y = playerData.pos.y;
        //    human_body.position.z = playerData.pos.z;
        //    human_body.rotation.y = playerData.rot.y;
        //    human_head.rotation.x = playerData.rot.x;
        //});

        return human_body;
    }
);