define(['three', 'loadingmanager'], function (THREE, loader) {
    return {
        loadTextures: function(){
            "use strict";
            var i,
                gfxFileName,
                GFX            = ['sand.jpg', 'raindrop.png'],
                texture_loader = new THREE.TextureLoader(loader);

            for (i in GFX) {
                if (!GFX.hasOwnProperty(i)) continue;
                gfxFileName = GFX[i];

                texture_loader.load("assets/gfx/" + gfxFileName, (function (rName, tex) {
                    tex.needsUpdate = true;
                    this[rName] = tex;
                }).bind(this, gfxFileName.split('.')[0]));
            }
        }
    };
});