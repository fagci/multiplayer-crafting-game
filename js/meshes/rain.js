define(['three', 'SPE', 'particleGroup'], function (THREE, SPE, pg) {
    console.info('Init rain module...');
    var rain = new SPE.Emitter({
        type: 'cube',
        position: new THREE.Vector3(0, 0, 0),
        positionSpread: new THREE.Vector3(200, 200, 200),

        acceleration: new THREE.Vector3(0, 0, 0),

        velocity: new THREE.Vector3(0, 0, 0),
        velocitySpread: new THREE.Vector3(0, 0, 0),
        //particlesPerSecond: 0,
        sizeStart: 40,
        sizeEnd: 40,
        opacityStart: 1,
        opacityEnd: 1,
        //colorStart: new THREE.Color('blue'),
        //colorEnd: new THREE.Color('white')
    });

    pg.addEmitter(rain);

    return rain;
});