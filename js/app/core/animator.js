define([
    'three',
    'renderer',
    'sceneManager',
    'camera',
    'cameraOrtho',
    'fpsStats'
], function (THREE, renderer, scene_manager, camera, camera_ortho, stats) {

    var clock = new THREE.Clock();

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = (function () {
            return window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (cb) {
                    window.setTimeout(cb, 1000 / 60);
                };

        })();
    }

    function animate() {
        scene_manager.updateCurrent(clock.getDelta());
        renderer.clear();
        //if (scene_manager.currentScene) {
            scene_manager.currentScene.simulate();
            renderer.render(scene_manager.currentScene, camera);
        //}
        renderer.clearDepth();
        renderer.render(scene_manager.hudScene, camera_ortho);

        stats('FPS').frame();
        requestAnimationFrame(animate);
        stats().update();
    }

    animate();
});