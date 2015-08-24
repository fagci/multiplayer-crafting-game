define(['three', 'texture'], function (THREE, texture) {
    console.info('Rain: ',texture);
    var rMaterial           = new THREE.PointCloudMaterial({
        color: 0x6c7c8c,
        size: 6,
        sizeAttenuation: true,
        transparent: true,
        depthTest: true,
        depthWrite: true,
        alphaTest: 0.1,
        opacity: 0.8,
        map: texture.raindrop
    });
    rMaterial.map.minFilter = THREE.LinearFilter;
    var rain_particles      = new THREE.Geometry();
    var r, r_x, r_y, r_z;
    for (r = 0; r < 6000; r++) {
        r_y = Math.random() * 250;
        r_x = Math.random() * 250;
        r_z = Math.random() * 250;

        rain_particles.vertices.push(new THREE.Vector3(r_x, r_y, r_z));
    }

    var rain           = new THREE.PointCloud(rain_particles, rMaterial);
    rain.name          = 'rain';
    rain.receiveShadow = true;
    rain.castShadow    = true;
    rain.update        = function (delta) {
        this.geometry.vertices.forEach(function (point) {
            point.y -= 150 * delta;
            point.x += 2 * delta;
            point.z += 2 * delta;
            if (point.y <= 0) {
                point.y = 250;
                point.x = Math.random() * 250;
                point.z = Math.random() * 250;
            }
        });
        this.geometry.verticesNeedUpdate = true;
    };
    return rain;
});