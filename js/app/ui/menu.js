define(['jquery', 'sound', 'threex', 'sceneManager', 'pointerLockControls'],
    function ($, sound_loader, THREEx, scene_manager, controls) {
        var $menuItems = $('.menu-item'),
            document   = window.document,
            element    = document.body;

        element.requestPointerLock = element.requestPointerLock ||
            element.mozRequestPointerLock ||
            element.webkitRequestPointerLock;

        document.exitPointerLock = document.exitPointerLock ||
            document.mozExitPointerLock ||
            document.webkitExitPointerLock;

        function fsChange(e) {
            "use strict";
            var fs = document.fullscreen ||
                document.mozFullScreen ||
                document.webkitIsFullScreen ||
                document.msFullscreenElement;

            if (!fs) {
                document.exitPointerLock();
                controls.enabled = false;
            }
        }

        /** @prop self.onclick */
        $menuItems.click(function () {
            sound_loader.click.play();
            switch ($(this).data('action')) {
                case 'settings':
                    $('.settings').dialog('open');
                    break;
                case 'newGame':
                    document.addEventListener('fullscreenchange', fsChange);
                    document.addEventListener('webkitfullscreenchange', fsChange);
                    document.addEventListener('mozfullscreenchange', fsChange);
                    document.addEventListener('msfullscreenchange', fsChange);

                    THREEx.FullScreen.request(element);
                    element.requestPointerLock();
                    controls.enabled = true;
                    break;
                case 'playOnline':
                    require(['scenes/multiplayer'], function (s) {
                        "use strict";
                        scene_manager.setCurrent(s);
                    });

                    break;
            }
        });
        return $menuItems;
    });