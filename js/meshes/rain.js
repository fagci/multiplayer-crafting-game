define(['three', 'SPE', 'particleGroup'], function (THREE, SPE, pg) {
    console.info('Init rain module...');
    var rain = new SPE.Emitter({
        type: 'cube',
        position: new THREE.Vector3(0, 500, 0),
        positionSpread: new THREE.Vector3(500, 0, 500),

        acceleration: new THREE.Vector3(40, -98, 0),

        velocity: new THREE.Vector3(0, -98, 0),
        velocitySpread: new THREE.Vector3(0, 0, 0),
        particlesPerSecond: 20000,
        sizeStart: 6,
        sizeEnd: 6,
        opacityStart: 1,
        opacityEnd: 1,
        colorStart: new THREE.Color('blue'),
        colorEnd: new THREE.Color('blue')
    });

    pg.addEmitter(rain);

    return rain;
});