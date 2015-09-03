define(['renderer', 'settings', 'jquery', 'jquery.ui', 'jquery.dform'],
    function (renderer, settings, $) {
        var $settingsPanel     = $('.settings'),
            anisotropyLevels   = {},
            level,
            maxAnisotropyLevel = renderer.getMaxAnisotropy(),
            shaderDetails      = {
                lowp: 'Low',
                midp: 'Mid',
                highp: 'High'
            };

        for (level = 1; level <= maxAnisotropyLevel; level *= 2) {
            anisotropyLevels[level] = 'x' + level;
        }


        console.log(settings);
        $settingsPanel.dform({
            "action": "",
            "method": "get",
            "html": [
                {
                    "type": "tabs",
                    "entries": [
                        {
                            "caption": "Graphics",
                            "id": "first",
                            "html": [
                                {
                                    "name": "shader_detail",
                                    "caption": "Shader detail",
                                    "type": "select",
                                    "value": settings.shader_detail,
                                    "options": shaderDetails
                                },
                                {
                                    "name": "anisotropy_level",
                                    "caption": "Anisotropy level",
                                    "type": "select",
                                    "value": settings.anisotropy_level,
                                    "options": anisotropyLevels
                                },
                                {
                                    "type": "submit",
                                    "value": "Apply"
                                }
                            ]
                        },
                        {
                            "caption": "Tab 2",
                            "id": "second",
                            "html": "Content 2"
                        }
                    ]
                },
            ]
        }).find('form').on('submit', function () {
            "use strict";
            var i, it, d = $(this).serializeArray();
            for (i in d) {
                if (!d.hasOwnProperty(i)) continue;
                it                = d[i];
                settings[it.name] = it.value;
            }
            settings.save();
        });

        $settingsPanel.dialog({
            autoOpen: false,
            height: 200,
            width: 350,
            modal: true
        });
    });