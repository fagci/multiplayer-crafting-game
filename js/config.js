var require = {
    // Default load path for js files
    baseUrl: 'js/app',
    urlArgs: "bust=" + (new Date()).getTime(),
    shim: {
        // --- Use shim to mix together all THREE.js subcomponents
        'three': {exports: 'THREE'},
        'stats': {exports: 'Stats'}
    },
    // Third party code lives in js/lib
    paths: {
        three: '../vendor/three',
        stats: '../vendor/stats.min',
        jquery: '../vendor/jquery-2.1.4.min',

        scenes: '../scenes',
        meshes: '../meshes',
        materials: '../materials'
    }
};