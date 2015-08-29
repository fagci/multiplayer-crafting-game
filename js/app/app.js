define(function (require) {
        console.info('[Entrypoint]');
        var THREE           = require('three'),
            camera          = require('camera'),
            light           = require('light'),
            renderer        = require('renderer'),
            menu            = require('menu'),
            settings        = require('settings'),
            stats           = require('fpsStats'),
            //fps_controls  = require('fpsControls'),
            loading_manager = require('loadingmanager'),
            scene_manager   = require('sceneManager');

        var app = {
            clock: false,
            update: function (delta) {
                scene_manager.updateCurrent(delta);
                //fps_controls.update(delta);
            },

            init: function () {
                console.warn('Init');
                settings.onchange      = app.onSettingsChange;
                loading_manager.onload = app.initScene;
                app.clock              = new THREE.Clock();


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
                requestAnimationFrame(app.animate);
                app.update(app.clock.getDelta());
                renderer.render(scene_manager.currentScene, camera);
                stats('FPS').frame();
                stats().update();
            }
        };
        return app;
    }
);