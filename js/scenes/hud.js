define(function (require) {
    var THREE           = require('three'),
        cameraOrtho     = require('cameraOrtho'),
        player          = require('player'),
        texture_manager = require('textureManager'),
        keyboard        = require('keyControls');

    var ch,
        minimap,
        scene = new THREE.Scene();
    /**
     * Update scene objects
     * @param d
     */
    scene.update = function (d) {

    };

    scene.init = function () {
        scene.add(cameraOrtho);
        texture_manager.crosshair.minFilter = THREE.LinearFilter;

        ch = new THREE.Sprite(new THREE.SpriteMaterial({
            map: texture_manager.crosshair,
            useScreenCoordinates: false
        }));


        var mm_cv = window.document.createElement('canvas'),
            mm_sz = 256,
            mm_ct, mm_texture;

        mm_cv.width     = mm_sz;
        mm_cv.height    = mm_sz;
        mm_cv.antialias = false;

        mm_ct                       = mm_cv.getContext('2d');
        mm_ct.translate(0.5, 0.5);
        mm_ct.imageSmoothingEnabled = false;
        mm_ct.fillStyle             = 'rgba(255,255,255,0.5)';
        mm_ct.strokeStyle           = 'rgba(0,0,0,1)';
        mm_ct.fillRect(0, 0, mm_sz, mm_sz);
        mm_ct.strokeRect(0, 0, mm_sz, mm_sz);
        mm_ct.moveTo(~~(mm_sz / 2), 0);
        mm_ct.lineTo(~~(mm_sz / 2), mm_sz);
        mm_ct.stroke();
        mm_texture                  = new THREE.Texture(mm_cv);
        mm_texture.needsUpdate      = true;
        mm_texture.minFilter        = THREE.NearestFilter;

        minimap              = new THREE.Sprite(new THREE.SpriteMaterial({
            map: mm_texture,
            useScreenCoordinates: true
        }));

        minimap.scale.set(mm_sz, mm_sz, 1);
        minimap.position.set(0, 0, 1);

        ch.scale.set(32, 32, 1);
        ch.position.set(0, 0, 1);
        ch.material.rotation = Math.PI / 4;
        scene.add(ch);
        scene.add(minimap);
    };

    return scene;
});