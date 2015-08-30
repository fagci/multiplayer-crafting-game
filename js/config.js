var require = {
    baseUrl: 'js/app',
    shim: {
        // --- Use shim to mix together all THREE.js subcomponents
        'three': {exports: 'THREE'},
        'threex_fullscreen': {exports: 'THREEx'},
        'threex_keyboard_state': {exports: 'THREEx'},
        'perlin': {exports: 'noise'},
        'fps_controls': {exports: 'THREE', deps: ['three']},
        'pointer_lock_controls': {deps: ['three']},
        'jquery': {exports: 'jQuery'},
        'jquery.ui': {
            exports: 'jQuery.fn.ui',
            deps: ['jquery']
        },
        'stats_core': {exports: 'rStats'},
        'conzole': {exports: 'conzole'},
        'watch': {exports: 'WatchJS'},
        'Howler': {exports: 'Howler'},
        'socket': {exports: 'io'},
        'SPE': {exports: 'SPE', deps: ['three']}
    },

    paths: {
        // THREE components
        three: '../lib/three',
        threex_fullscreen: '../lib/utils/THREEx.FullScreen',

        perlin: '../lib/algo/perlin',

        // Network
        socket: '../lib/net/socket.io',

        // Controls
        threex_keyboard_state: '../lib/controls/threex.keyboardstate',
        fps_controls: '../lib/controls/FirstPersonControls',
        pointer_lock_controls: '../lib/controls/PointerLockControls',

        // Utils
        stats_core: '../lib/utils/rStats',
        stats_extras: '../lib/utils/rStats.extras',
        conzole: '../lib/utils/conzole',
        watch: '../lib/utils/watch.min',

        Howler: '../lib/sfx/howler.min',
        SPE: '../lib/gfx/ShaderParticles.min',

        // jQuery components
        jquery: '../lib/dom/jquery-2.1.4.min',
        'jquery.ui': '../lib/dom/jquery-ui.min',

        scenes: '../scenes',
        meshes: '../meshes',
        materials: '../materials'
    },

    map: {
        '*': {
            'player': 'entity/player/player',
            'camera': 'objects/camera',
            'light': 'objects/light',
            'renderer': 'core/renderer',
            'scene': 'core/scene',
            'menu': 'ui/menu',
            'fpsStats': 'ui/fpsStats',
            'keyControls': 'controls/keyControls',
            'pointerLockControls': 'controls/pointerLockControls',
            'loadingManager': 'managers/loadingManager',
            'sceneManager': 'managers/sceneManager',
            'textureManager': 'managers/textureManager',
        }
    }
};
