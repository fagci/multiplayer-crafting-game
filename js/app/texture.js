define(['three', 'loadingmanager'], function (THREE, loader) {
    var i,
        gfxFileName,
        textures       = {},
        GFX            = ['sand.jpg', 'raindrop.png'],
        texture_loader = new THREE.TextureLoader(loader);

    for (i in GFX) {
        if (!GFX.hasOwnProperty(i)) continue;
        gfxFileName = GFX[i];

        texture_loader.load("assets/gfx/" + gfxFileName, (function (rName, tex) {
            tex.needsUpdate = true;
            textures[rName] = tex;
        }).bind(this, gfxFileName.split('.')[0]));
    }

    return textures;
});