define(['../core/scene', '../scenes/hud'], function (scene, hud) {
        "use strict";
        var manager          = {};
        manager.currentScene = scene;
        manager.hudScene = hud;

        manager.clearCurrent = function () {
            var i, ch,
                ids      = [],
                children = manager.currentScene.children;

            for (i in children) {
                ch = children[i];
                if (ch instanceof THREE.Mesh) {
                    ids.push(ch.id);
                }
            }

            for (i in ids) {
                ch = scene.getObjectById(ids[i]);
                console.log('Remove', ch.name);
                manager.currentScene.remove(ch);
                ch = null;
            }
        };

        manager.setCurrent = function (scene) {
            manager.clearCurrent();
            manager.currentScene = scene;
            manager.currentScene.init();
            manager.hudScene.init();
        };

        manager.updateCurrent = function (d) {
            manager.hudScene.update(d);
            if (manager.currentScene.update) {
                manager.currentScene.update(d);
            }
        };

        return manager;
    }
)
;