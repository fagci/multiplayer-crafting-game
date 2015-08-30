var require = {
    baseUrl: 'js/app',
    shim: {
        // --- Use shim to mix together all THREE.js subcomponents
        'three': {exports: 'THREE'},
        'perlin': {exports: 'noise'},
        'fps_controls': {exports: 'THREE', deps: ['three']},
        'pointer_lock_controls': {deps: ['three']},
        'threex_fullscreen': {
            exports: 'THREEx.FullScreen'
        },
        'jquery': {exports: 'jQuery'},
        'jquery.ui': {
            exports: 'jQuery.fn.ui',
            deps: ['jquery']
        },
        'stats_core': {exports: 'rStats'},
        'Howler': {exports: 'Howler'},
        'SPE': {exports: 'SPE', deps: ['three']}
    },

    paths: {
        // THREE components
        three: '../lib/three',
        threex_fullscreen: '../lib/utils/THREEx.FullScreen',

        perlin: '../lib/algo/perlin',
        fps_controls: '../lib/controls/FirstPersonControls',
        pointer_lock_controls: '../lib/controls/PointerLockControls',

        stats_core: '../lib/utils/rStats',
        stats_extras: '../lib/utils/rStats.extras',
        Howler: '../lib/sfx/howler.min',
        SPE: '../lib/gfx/ShaderParticles.min',
        jquery: '../lib/dom/jquery-2.1.4.min',
        'jquery.ui': '../lib/dom/jquery-ui.min',

        scenes: '../scenes',
        meshes: '../meshes',
        materials: '../materials'
    },
    map: {
        '*': {
            'camera': 'objects/camera',
            'light': 'objects/light',
            'renderer': 'core/renderer',
            'scene': 'core/scene',
            'menu': 'ui/menu',
            'fpsStats': 'ui/fpsStats',
            'keyControls': 'controls/keyControls',
            'loadingManager': 'managers/loadingManager',
            'sceneManager': 'managers/sceneManager',
            'textureManager': 'managers/textureManager',
        }
    }
};
