define(['renderer', 'settings', 'jquery', 'jquery.ui', 'jquery.dform'],
    function (renderer, settings, $) {
        var $settingsPanel     = $('.settings'),
            anisotropyLevels   = {},
            i, it,
            maxAnisotropyLevel = renderer.getMaxAnisotropy(),
            shaderDetails      = {
                lowp: 'Low',
                midp: 'Mid',
                highp: 'High'
            };

        for (i = 1; i <= maxAnisotropyLevel; i *= 2) {
            if (settings.anisotropy_level == i) {
                anisotropyLevels[i] = {
                    value: i,
                    html: 'x' + i,
                    selected: true
                };
            } else {
                anisotropyLevels[i] = 'x' + i;
            }
        }

        for (i in shaderDetails) {
            if (!shaderDetails.hasOwnProperty(i)) continue;
            it = shaderDetails[i];
            console.log(settings.shader_detail != i);
            if (settings.shader_detail != i) continue;
            it = {
                value: i,
                html: it,
                selected: true
            };
        }


        console.log(anisotropyLevels);
        $settingsPanel.dform({
            action: "",
            method: "get",
            dialog: {
                autoOpen: false,
                height: 200,
                width: 350,
                modal: true,
                title: 'Settings',
                html: [
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
                                        "options": shaderDetails
                                    },
                                    {
                                        "name": "anisotropy_level",
                                        "caption": "Anisotropy level",
                                        "type": "select",
                                        "options": anisotropyLevels
                                    },
                                    {
                                        "type": "submit",
                                        "value": "Apply"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },

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
    });