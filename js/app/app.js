define(['three', 'camera', 'light', 'renderer', 'scenes/main', 'menu', 'settings', 'fpsStats', 'loadingmanager'],
    function (THREE, camera, light, renderer, scene, menu, settings, stats, loadingmanager) {
        var app = {
            clock: false,
            update: function (delta) {
                //scene.getObjectByName('rain').update(delta);
            },

            init: function () {
                settings.onchange = app.onSettingsChange;
                app.clock         = new THREE.Clock();
                loadingmanager.onLoad = function(){
                    "use strict";
                    app.initScene();
                    requestAnimationFrame(app.animate);
                };
            },

            initScene: function(){
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
            /*
             initStateManager: function () {
             var menu     = new MenuHandler();
             var hover    = new buzz.sound('assets/sfx/click.wav', {
             preload: true,
             webAudioApi: true
             });
             menu.onhover = function () {
             console.log('Menu hover');
             hover.stop().play();
             };
             menu.onclick = function (a) {
             console.log(a);
             if (a == 'settings') $('.settings').dialog('open');
             if (a == 'credits') THREEx.FullScreen.request();
             };
             },
             */
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