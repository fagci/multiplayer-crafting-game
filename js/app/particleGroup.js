define(['SPE', 'textureManager'], function(SPE, textureManager){
    "use strict";
    /** @global THREE.TextureLoader loader */
        console.info('Init particle group');
    var particleGroup = new SPE.Group({
        texture: textureManager.testHex,
        maxAge: 2,
        //hasPerspective: true,
        //colorize: true,

        // [OPTIONAL] What blending style should be used?
        // THREE.NoBlending
        // THREE.NormalBlending
        // THREE.AdditiveBlending
        // THREE.SubtractiveBlending
        // THREE.MultiplyBlending
        //blending: THREE.NormalBlending,
        //transparent: true,
        //alphaTest: 0.5,
        //depthWrite: true,
        //depthTest: true
    });
    return particleGroup;
});