define(function (require) {
        console.info('[Entrypoint]');
        var THREE           = require('three'),
            camera          = require('camera'),
            light           = require('light'),
            renderer        = require('renderer'),
            menu            = require('menu'),
            settings        = require('settings'),
            stats           = require('fpsStats'),
            key_controls    = require('keyControls'),
            loading_manager = require('loadingManager'),
            object_manager = require('objectManager'),
            network = require('net/network'),
            scene_manager   = require('sceneManager');

        var app = {
            clock: false,
            update: function (delta) {
                scene_manager.updateCurrent(delta);
            },

            init: function () {
                console.warn('Init');
                settings.onchange = app.onSettingsChange;
                app.clock         = new THREE.Clock();

                require(['scenes/main'], function (s) {
                    "use strict";
                    scene_manager.setCurrent(s);
                });
                app.animate();
            },

            onSettingsChange: function (s) {
                console.warn('Settings change', s);
                var i, item;
                for (i in s) {
                    if (!s.hasOwnProperty(i)) continue;
                    item                = s[i];
                    settings[item.name] = item.value;
                }
            },

            animate: function () {
                app.update(app.clock.getDelta());
                renderer.render(scene_manager.currentScene, camera);

                stats('FPS').frame();
                requestAnimationFrame(app.animate);
                stats().update();
            }
        };
        return app;
    }
);