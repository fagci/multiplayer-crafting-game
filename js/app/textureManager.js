define(['three', 'loadingmanager'], function (THREE, loader) {

    var i,
        rName,
        gfxFileName,
        textures     = {},
        GFX = ['sand.jpg', 'raindrop.png', 'testHex.png', 't.png'],
        image_loader = new THREE.ImageLoader(loader);

    function onLoad(rName, img) {
        console.log('Loaded:', rName, img);
        textures[rName].image       = img;
        textures[rName].needsUpdate = true;
    }

    console.info('Load textures');
    for (i in GFX) {
        if (!GFX.hasOwnProperty(i)) continue;
        gfxFileName     = GFX[i];
        rName           = gfxFileName.split('.')[0];
        textures[rName] = new THREE.Texture();
        image_loader.load("gfx/" + gfxFileName,
            onLoad.bind(this, rName),
            function (a, b, c) {
                console.log('progress:', a, b, c);
            },
            function (e) {
                console.log('Error:', e);
            }
        );
    }
    return textures;
});