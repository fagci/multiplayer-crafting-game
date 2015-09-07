define(function (require) {
        console.info('[Entrypoint]');
        var
        // init UI first
        settings        = require('settings'),
        menu            = require('menu'),

        // then we can load resources
        loading_manager = require('loadingManager'),

        // and prepare scene manager
        scene_manager   = require('sceneManager');

        var app = {
            init: function () {
                require(['scenes/main'], function (s) {
                    "use strict";
                    scene_manager.setCurrent(s);
                });
                require('core/animator');
            }
        };
        return app;
    }
);