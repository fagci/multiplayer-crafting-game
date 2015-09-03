define([], function () {
    var o = window.localStorage.getItem('settings'),
        s = o ? JSON.parse(o) : [];

    return {
        shader_detail: s.shader_detail || 'lowp',
        anisotropy_level: s.anisotropy_level || 1,

        save: function () {
            "use strict";
            window.localStorage.setItem('settings', JSON.stringify(this));
        }
    };
});