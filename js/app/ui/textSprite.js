define([], function () {

    var TextSprite    = {};
    /**
     *
     * @param {string} text
     * @returns {THREE.Mesh}
     */
    TextSprite.create = function (text) {
        var canvas = document.createElement('canvas'),
            ctx    = canvas.getContext('2d');

        ctx.font         = 'bold 32px monospace';
        ctx.fillStyle    = "rgb(255,255,255)";
        ctx.strokeStyle  = "rgb(0,0,0)";
        ctx.textBaseline = 'middle';
        ctx.textAlign    = 'center';
        ctx.fillText(text, canvas.width / 2, canvas.height / 2);
        ctx.strokeText(text, canvas.width / 2, canvas.height / 2);

        var texture1         = new THREE.Texture(canvas);
        texture1.needsUpdate = true;
        texture1.minFilter   = THREE.LinearFilter;

        var material = new THREE.SpriteMaterial({
            map: texture1,
            side: THREE.DoubleSide,
            depthWrite: true,
            depthTest: false
        });

        material.transparent = true;

        return new THREE.Sprite(material);
    };
    return TextSprite;
});