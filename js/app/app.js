define(function (require) {
        var THREE           = require('three'),
            camera          = require('camera'),
            light           = require('light'),
            renderer        = require('renderer'),
            scene           = require('scenes/main'),
            menu            = require('menu'),
            settings        = require('settings'),
            stats           = require('fpsStats'),
            texture_loader  = require('texture'),
            sound_loader    = require('sound'),
            loading_manager = require('loadingmanager');

        var app = {
            clock: false,
            update: function (delta) {
                //scene.getObjectByName('rain').update(delta);
            },

            init: function () {
                console.info('Init');
                settings.onchange      = app.onSettingsChange;
                app.clock              = new THREE.Clock();
                loading_manager.onLoad = function () {
                    console.info('LM Load');
                    app.initScene();
                    requestAnimationFrame(app.animate);
                };
                texture_loader.loadTextures();

                menu.onhover = function () {
                    console.log('Menu hover');
                    sound_loader.click.stop().play();
                };
                menu.onclick = function (a) {
                    console.log(a);
                    if (a == 'settings') $('.settings').dialog('open');
                    //if (a == 'credits') THREEx.FullScreen.request();
                };
            },

            initScene: function () {
                scene.init();
            },

            onSettingsChange: function (s) {
                console.log('Settings change', s);
                var i, item;
                for (i in s) {
                    if (!s.hasOwnProperty(i)) continue;
                    item                = s[i];
                    settings[item.name] = item.value;
                }
            },
            animate: function () {
                stats.begin();
                app.update(app.clock.getDelta());
                renderer.render(scene, camera);
                stats.end();
                requestAnimationFrame(app.animate);
            }
        };
        return app;
    }
);