define(['stats_core', '../core/renderer'], function (rStats) {
    console.info('Loading fps stats...');
    var stats = new rStats({
        values: {
            fps: {caption: 'FPS', below: 30}
        }
    });

    return stats;
});