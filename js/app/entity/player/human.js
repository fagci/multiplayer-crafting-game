define(['three', 'net/network', 'player'], function (THREE, socket, player) {
    "use strict";

    var cone       = new THREE.CylinderGeometry(0, 0.25, 0.5, 16, 1),
        block    = new THREE.BoxGeometry(0.5, 1.25, 0.25, 1, 1, 1),
        material = new THREE.MeshLambertMaterial({color: 0xccffcc}),
        human_head = new THREE.Mesh(cone, material),
        human_body = new THREE.Mesh(block, material);

    cone.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI / 2));
    block.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0.625, 0));

    human_body.position.y = 0;
    human_head.position.y = 1.5;
    human_body.add(human_head);

    var playerData;

    socket.on('message', function (msg) {
        /** @prop id */
        playerData            = msg.text;
        if (!playerData || playerData.id == player.netId) return;
        console.log('RECV: ', playerData.id);
        human_body.position.x = playerData.pos.x;
        human_body.position.y = playerData.pos.y;
        human_body.position.z = playerData.pos.z;
        human_body.rotation.y = playerData.rot.y;
        human_head.rotation.x = playerData.rot.x;
    });

    return human_body;
});