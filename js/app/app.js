define(function (require) {
        console.info('[Entrypoint]');
        var THREE           = require('three'),
            camera          = require('camera'),
            light           = require('light'),
            renderer        = require('renderer'),
            menu            = require('menu'),
            settings        = require('settings'),
            stats           = require('fpsStats'),
            sound_loader    = require('sound'),
            scene,
            loading_manager = require('loadingmanager');

        var app = {
            clock: false,
            update: function (delta) {
                scene && scene.update(delta);
            },

            init: function () {
                console.warn('Init');
                settings.onchange      = app.onSettingsChange;
                loading_manager.onload = app.initScene;
                app.clock              = new THREE.Clock();

                menu.onhover = function () {
                    console.log('Menu hover');
                    sound_loader.click.play();
                };
                menu.onclick = function (a) {
                    console.log(a);
                    switch (a) {
                        case 'settings':
                            $('.settings').dialog('open');
                            break;
                        case 'newGame':
                            THREEx.FullScreen.request();
                            break;
                    }
                };
                scene        = require('scenes/main');
                app.initScene();
                app.animate();
            },

            initScene: function () {
                scene.init();
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
                scene && renderer.render(scene, camera);
                stats('FPS').frame();
                stats().update();
            }
        };
        return app;
    }
);