define(['three', 'loadingManager', 'settings'], function (THREE, loader, settings) {

    var i,
        rName,
        gfxFileName,
        textures     = {},
        GFX = ['sand.jpg', 'raindrop.png', 'testHex.png', 't.png', 'crosshair.png'],
        image_loader = new THREE.ImageLoader(loader);

    function onLoad(rName, img) {
        textures[rName].image       = img;
        textures[rName].needsUpdate = true;
        textures[rName].anisotropy = settings.anisotropy_level;
    }

    for (i in GFX) {
        if (!GFX.hasOwnProperty(i)) continue;
        gfxFileName     = GFX[i];
        rName           = gfxFileName.split('.')[0];
        textures[rName] = new THREE.Texture();
        image_loader.load("resources/gfx/" + gfxFileName,
            onLoad.bind(this, rName),
            function (a, b, c) {
            },
            function (e) {
                console.log('Error:', e);
            }
        );
    }
    return textures;
});