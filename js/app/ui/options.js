define(['renderer', 'settings', 'dot!settings_t', 'jquery', 'jquery.ui', 'lodash'],
    function (renderer, settings, template, $) {
        var $settingsPanel           = $('.settings'),
            shaderDetails            = {
                lowp: 'Low',
                mediump: 'Mid',
                highp: 'High'
            },
            shadows                  = {
                0: 'Off',
                1: 'Simple',
                2: 'PCF',
                3: 'PCF Soft'
            },
            antialiasing             = {
                0: 'Off',
                1: 'On'
            },
            maxAnisotropyLevel       = renderer.getMaxAnisotropy(),
            anisotropyLevels         = _.range(0, Math.log2(maxAnisotropyLevel * 2)),
            anisotropyOptionsArray   = anisotropyLevels.map(function (a) {
                var i = 1 << a;
                return {
                    selected: i == settings.anisotropy_level,
                    text: 'x ' + i,
                    value: i
                };
            }),
            shaderOptionsArray       = _.map(shaderDetails, function (v, k) {
                return {
                    selected: k == settings.shader_detail,
                    text: v,
                    value: k
                }
            }),
            shadowsOptionsArray      = _.map(shadows, function (v, k) {
                return {
                    selected: k == settings.shadows,
                    text: v,
                    value: k
                }
            }),
            antialiasingOptionsArray = _.map(antialiasing, function (v, k) {
                return {
                    selected: k == settings.antialiasing,
                    text: v,
                    value: k
                }
            });

        var form  = template({
            anisotropy: anisotropyOptionsArray,
            shader_detail: shaderOptionsArray,
            shadows: shadowsOptionsArray,
            antialiasing: antialiasingOptionsArray
        }), $form = $(form);

        $form.find('#tabs').tabs();
        $form.dialog({
            title: 'Settings',
            resizable: false,
            autoOpen: false,
            create: function () {
                $(this).closest(".ui-dialog")
                    .find(".ui-button:first") // the first button
                    .addClass("fa fa-close");
            }
        });
        $form.submit(function (e) {

            _.map($(this).serializeArray(), function (v) {
                settings[v.name] = v.value;
                settings.save();
            })
        });
    }
);