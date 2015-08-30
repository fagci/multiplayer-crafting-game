define(['SPE', '../managers/textureManager'], function (SPE, textureManager) {
    "use strict";
    /** @global THREE.TextureLoader loader */
        console.info('Init particle group');
    textureManager.raindrop.minFilter = THREE.NearestFilter;
    textureManager.raindrop.flipY     = false;
    var particleGroup = new SPE.Group({
        texture: textureManager.raindrop,
        maxAge: 1,
        //hasPerspective: true,
        colorize: true,

        // [OPTIONAL] What blending style should be used?
        // THREE.NoBlending
        // THREE.NormalBlending
        // THREE.AdditiveBlending
        // THREE.SubtractiveBlending
        // THREE.MultiplyBlending
        blending: THREE.AdditiveBlending,
        //transparent: true,
        //alphaTest: 0.5,
        //depthWrite: true,
        //depthTest: true
    });
    return particleGroup;
});