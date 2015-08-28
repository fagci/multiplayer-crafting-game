define(['stats'], function (rStats) {
    console.info('Loading fps stats...');
    var stats  = new rStats({
        values: {
            fps: { caption: 'Framerate (FPS)', below: 30 }
        }
    });

    return stats;
});