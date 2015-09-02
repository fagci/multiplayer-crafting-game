define(function (require) {
        console.info('[Entrypoint]');
        var
        // init UI first
            settings        = require('settings'),
        menu = require('menu'),

        // then we can load resources
            loading_manager = require('loadingManager'),

        // and prepare scene manager
            scene_manager   = require('sceneManager');

        var app = {
            init: function () {
                settings.onchange = app.onSettingsChange;

                require(['scenes/main'], function (s) {
                    "use strict";
                    scene_manager.setCurrent(s);
                });
                require('core/animator');
            },

            onSettingsChange: function (s) {
                var i, item;
                for (i in s) {
                    if (!s.hasOwnProperty(i)) continue;
                    item                = s[i];
                    settings[item.name] = item.value;
                }
            }
        };
        return app;
    }
);