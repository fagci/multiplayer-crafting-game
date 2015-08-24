var require = {
    // Default load path for js files
    baseUrl: 'js/app',
    urlArgs: "bust=" + (new Date()).getTime(),
    shim: {
        // --- Use shim to mix together all THREE.js subcomponents
        'three': {exports: 'THREE'},
        'jquery': {exports: 'jQuery'},
        'jquery.ui': { exports: 'jQuery.fn.ui', deps: ['jquery'] },
        'stats': {exports: 'Stats'}
    },
    // Third party code lives in js/lib
    paths: {
        three: '../vendor/three',
        stats: '../vendor/stats.min',
        //jquery: '../vendor/jquery',
        jquery: '../vendor/jquery-2.1.4.min',
        'jquery.ui': '../vendor/jquery-ui.min',

        scenes: '../scenes',
        meshes: '../meshes',
        materials: '../materials'
    }
};