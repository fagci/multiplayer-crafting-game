define(['three', 'physics', 'textureManager', 'simplex'],
    function (THREE, Physijs, textureManager, SimplexNoise) {
        var GroundGenerator = {
                CHUNK_WIDTH: 10,
                CHUNK_HEIGHT: 10
            },
            mat             = new THREE.MeshLambertMaterial({map: textureManager.sand}),
            material        = Physijs.createMaterial(
                mat,
                .8, // high friction
                .4 // low restitution
            ),
            NoiseGen        = new SimplexNoise({
                random: function () {
                    return 0.333;
                }
            });

        /**
         * Generates chunk of ground
         * @param nx chunk number by X axis
         * @param nz chunk number by Z axis
         * @param pws number of width segments, 10 by default
         * @param phs number of height segments, 10 by default
         * @returns {window.Physijs.HeightfieldMesh|*}
         */
        GroundGenerator.getChunk = function (nx, nz, pws, phs) {
            pws = pws || GroundGenerator.CHUNK_WIDTH;
            phs = phs || GroundGenerator.CHUNK_HEIGHT;

            var gw       = GroundGenerator.CHUNK_WIDTH,
                gh       = GroundGenerator.CHUNK_HEIGHT,
                gnx      = gw * nx,
                gnz      = gh * nz,
                geometry = new THREE.PlaneGeometry(gw, gh, pws, phs),
                i, vertex, m1, vx, vz;

            m1 = new THREE.Matrix4();
            m1.makeRotationX(Math.PI / -2);
            geometry.applyMatrix(m1);
            for (i = 0; i < geometry.vertices.length; i++) {
                vertex = geometry.vertices[i];
                vx     = vertex.x + gnx;
                vz     = vertex.z + gnz;

                vertex.y = NoiseGen.noise(vx / gw, vz / gh);
                vertex.y *= NoiseGen.noise(vx / 16, vz / gh / 16);
                vertex.y *= NoiseGen.noise(vx / 32, vz / 32) * 4 + 2;
            }

            geometry.computeFaceNormals();
            geometry.computeVertexNormals();

            return geometry;
        };

        GroundGenerator.getGround = function (px, pz) {
            var nx, nz,
                result = false,
                geometry, ground, m1 = new THREE.Matrix4();

            for (nx = -5; nx <= 5; nx++) {
                for (nz = -5; nz <= 5; nz++) {
                    geometry = GroundGenerator.getChunk(
                        nx + px / GroundGenerator.CHUNK_WIDTH,
                        nz + pz / GroundGenerator.CHUNK_HEIGHT
                    );

                    //TODO: доделать мерджинг
                    m1.makeTranslation(gw / 2 + gnx, 0, gh / 2 + gnz);
                    geometry.applyMatrix(m1);

                    if (!result) {
                        result = geometry;
                    } else {
                        result = result.merge(geometry);
                    }
                }
            }

            ground = new Physijs.HeightfieldMesh(geometry, material, 0);

            ground.name          = 'Ground_' + nx + '_' + nz;
            ground.receiveShadow = true;
            ground.castShadow    = true;

            return new Physijs.HeightfieldMesh(result, material, 0);
        };

        return GroundGenerator;
    });