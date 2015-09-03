var require = {
    baseUrl: 'js/app',
    shim: {
        // THREE components
        'three_core': {exports: 'THREE'},
        'three_obj_loader': {exports: 'THREE', deps: ['three_core']},
        'three_json_loader': {exports: 'THREE', deps: ['three_core']},
        'fps_controls': {exports: 'THREE', deps: ['three']},
        'pointer_lock_controls': {deps: ['three']},
        'SPE': {exports: 'SPE', deps: ['three']},

        // THREE game eextensions
        'threex_fullscreen': {exports: 'THREEx'},
        'threex_keyboard_state': {exports: 'THREEx'},

        // jQuery components
        'jquery': {exports: 'jQuery'},
        'jquery.ui': {exports: 'jQuery.fn.ui', deps: ['jquery']},
        'jquery.dform': {exports: 'jQuery.fn.dform', deps: ['jquery']},

        'perlin': {exports: 'noise'},
        'stats_core': {exports: 'rStats'},
        'conzole': {exports: 'conzole'},
        'watch': {exports: 'WatchJS'},
        'Howler': {exports: 'Howler'},
        'socket': {exports: 'io'}
    },

    paths: {
        // THREE components
        three_core: '../lib/three',
        three_obj_loader: '../lib/utils/OBJLoader',
        three_json_loader: '../lib/utils/JSONLoader',
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
        'jquery.dform': '../lib/dom/jquery.dform-1.1.0.min',

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
            'network': 'net/network',
            'keyControls': 'controls/keyControls',
            'pointerLockControls': 'controls/pointerLockControls',
            'loadingManager': 'managers/loadingManager',
            'objectManager': 'managers/objectManager',
            'sceneManager': 'managers/sceneManager',
            'textureManager': 'managers/textureManager'
        }
    }
};
