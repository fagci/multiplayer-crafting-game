define(['three', 'camera', 'light', 'renderer', 'scenes/main', 'menu', 'settings', 'stats', 'loadingmanager'],
    function (THREE, camera, light, renderer, scene, menu, settings, stats, loadingmanager) {
        var app = {
            clock: false,
            update: function (delta) {
                //scene.getObjectByName('rain').update(delta);
            },

            init: function () {
                $('.settings').dialog({
                    autoOpen: false,
                    height: 200,
                    width: 350,
                    modal: true
                });

                settings.onchange = app.onSettingsChange;
                app.clock         = new THREE.Clock();
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
                app.update(clock.getDelta());
                renderer.animate(scene, camera);
                stats.end();
                requestAnimationFrame(app.animate);
            }
        };
        return app;
    }
);