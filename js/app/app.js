define(function (require) {
        var settings        = require('settings'),
            menu            = require('menu'),

            // then we can load resources
            loading_manager = require('loadingManager'),
            texture_manager = require('textureManager'),
            object_manager  = require('objectManager'),

            // and prepare scene manager
            scene_manager   = require('sceneManager');

        return {
            init: function () {
                require(['scenes/main'], function (s) {

                    scene_manager.setCurrent(s);
                });
                require('core/animator');
            }
        };
    }
);