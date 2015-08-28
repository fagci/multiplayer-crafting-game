define(['jquery'], function ($) {
    console.log('Init menu...');
    var $menuItems = $('.menu-item'),
        menu       = {};

    /** @prop self.onhover */
    $menuItems.mouseover(function () {
        menu.onhover && menu.onhover($(this).data('action'));
    });

    /** @prop self.onclick */
    $menuItems.click(function () {
        menu.onclick && menu.onclick($(this).data('action'));
    });
    return menu;
});