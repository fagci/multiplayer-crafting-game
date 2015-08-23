define(['jquery'], function ($) {
    var $settingsForm = $('.settings-form'),
        settings      = {};

    var i, item,
        $input,
        saved_settings = JSON.parse(
            window.localStorage.getItem('settings')
        );

    for (i in saved_settings) {
        if (!saved_settings.hasOwnProperty(i)) continue;
        item   = saved_settings[i];
        $input = $settingsForm.find('[name=' + item.name + ']');
        if ($input.is('[type=checkbox]')) {
            $input.prop('checked', item.value);
            continue;
        }
        $input.val(item.value);
    }

    /** @prop self.onchange **/
    $settingsForm.on('change', function () {
        var s = $settingsForm.serializeArray();
        s     = s.concat(
            $settingsForm.find('input[type=checkbox]:not(:checked)')
                .map(function () {
                    return {name: this.name, value: 0}
                }).get()
        );
        window.localStorage.setItem('settings', JSON.stringify(s));
        settings.onchange && settings.onchange(s);
    }).change();
    return settings;
});