define([
    'three',
    'renderer',
    'sceneManager',
    'camera',
    'fpsStats'
], function (THREE, renderer, scene_manager, camera, stats) {
    "use strict";
    var clock = new THREE.Clock();

    function animate() {
        scene_manager.updateCurrent(clock.getDelta());
        renderer.render(scene_manager.currentScene, camera);

        stats('FPS').frame();
        requestAnimationFrame(animate);
        stats().update();
    }

    animate();
});