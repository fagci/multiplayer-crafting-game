define(['jquery'], function ($) {
    var $loadingOverlay = $('.loading-overlay'),
        $label          = $loadingOverlay.find('.loading-label'),
        $progress       = $loadingOverlay.find('.progress');

    return {
        progress: function (p, label) {
            p = p > 100 ? 100 : (p < 0 ? 0 : p);
            $progress.css('width', p + '%');
            $label.text(label || 'Loading...');
        },

        toggle: function (show) {
            $loadingOverlay.toggle(show);
        }
    }
});