define(['SPE', '../managers/textureManager'], function (SPE, textureManager) {

    textureManager.raindrop.minFilter = THREE.NearestFilter;
    textureManager.raindrop.flipY     = false;

    return new SPE.Group({
        texture: textureManager.raindrop,
        maxAge: 1,
        colorize: true,
        blending: THREE.AdditiveBlending
    });
});