define([
    'three',
    'renderer',
    'sceneManager',
    'camera',
    'cameraOrtho',
    'fpsStats'
], function (THREE, renderer, scene_manager, camera, camera_ortho, stats) {
    "use strict";
    var clock = new THREE.Clock();

    function animate() {
        scene_manager.updateCurrent(clock.getDelta());
        renderer.clear();
        renderer.render(scene_manager.currentScene, camera);
        renderer.clearDepth();
        renderer.render(scene_manager.hudScene, camera_ortho);

        stats('FPS').frame();
        requestAnimationFrame(animate);
        stats().update();
    }

    animate();
});