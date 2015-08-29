var require = {
    // Default load path for js files
    baseUrl: 'js/app',
    //urlArgs: "bust=" + (new Date()).getTime(),
    shim: {
        // --- Use shim to mix together all THREE.js subcomponents
        'three': {exports: 'THREE'},
        'perlin': {exports: 'noise'},
        'fps_controls': {exports: 'THREE', deps: ['three']},
        'threex_fullscreen': {
            exports: 'THREEx.FullScreen'
        },
        'jquery': {exports: 'jQuery'},
        'jquery.ui': {
            exports: 'jQuery.fn.ui',
            deps: ['jquery']
        },
        'stats': {exports: 'rStats'},
        'Howler': {exports: 'Howler'},
        'SPE': {exports: 'SPE', deps: ['three']},
    },
    // Third party code lives in js/vendor
    paths: {
        three: '../vendor/three',
        perlin: '../vendor/perlin',
        fps_controls: '../vendor/FirstPersonControls',
        threex_fullscreen: '../vendor/THREEx.FullScreen',
        stats: '../vendor/rStats',
        Howler: '../vendor/howler.min',
        SPE: '../vendor/ShaderParticles.min',
        jquery: '../vendor/jquery-2.1.4.min',
        'jquery.ui': '../vendor/jquery-ui.min',

        scenes: '../scenes',
        meshes: '../meshes',
        materials: '../materials'
    }
};
