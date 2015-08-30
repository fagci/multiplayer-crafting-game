define(['jquery', '../sound', 'threex', 'managers/sceneManager', 'controls/pointerLockControls'],
    function ($, sound_loader, THREEx, scene_manager, controls) {
    console.log('Init menu...');
        var $menuItems = $('.menu-item');

    /** @prop self.onclick */
    $menuItems.click(function () {
        sound_loader.click.play();
        switch ($(this).data('action')) {
            case 'settings':
                $('.settings').dialog('open');
                break;
            case 'newGame':
                console.log(THREEx);
                THREEx.FullScreen.request();
                window.document.body.requestPointerLock();
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