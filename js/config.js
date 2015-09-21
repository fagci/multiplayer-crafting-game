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

        'dot': {exports: 'doT'},

        'physi': {exports: 'Physijs', deps: ['three']},

        'simplex': {exports: 'SimplexNoise'},
        'stats_core': {exports: 'rStats'},
        'conzole': {exports: 'conzole'},
        'watch': {exports: 'WatchJS'},
        'Howler': {exports: 'Howler'},
        'socket': {exports: 'io'},

        textureManager: {deps: ['loadingManager']},
        objectManager: {deps: ['loadingManager']}

    },

    paths: {
        // THREE components
        three_core: '../lib/three',
        three_obj_loader: '../lib/utils/OBJLoader',
        three_json_loader: '../lib/utils/JSONLoader',
        threex_fullscreen: '../lib/utils/THREEx.FullScreen',

        lodash: '../lib/lodash.min',

        doTCompiler: '../lib/doT.min',
        dot: '../lib/requirejs/doT',
        text: '../lib/requirejs/text',

        simplex: '../lib/algo/simplex-noise',

        physi: '../lib/physics/physi',

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
        materials: '../materials',

        'settings_t': '../../views/settings'
    },

    map: {
        '*': {
            'player': 'entity/player/player',
            'camera': 'objects/camera',
            'cameraOrtho': 'objects/cameraOrtho',
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
    },

    doT: {
        ext: '.dot', // extension of the templates, defaults to .dot
        templateSettings: {
            evaluate: /\{\{([\s\S]+?)}}/g,
            interpolate: /\{\{=([\s\S]+?)}}/g,
            encode: /\{\{!([\s\S]+?)}}/g,
            use: /\{\{#([\s\S]+?)}}/g,
            define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#}}/g,
            conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
            iterate: /\{\{~\s*(?:}}|([\s\S]+?)\s*:\s*([\w$]+)\s*(?::\s*([\w$]+))?\s*}})/g,
            varname: 'it',
            strip: true,
            append: true,
            selfcontained: false
        }
    }
};
