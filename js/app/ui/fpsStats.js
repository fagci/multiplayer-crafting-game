define(['stats_core', '../core/renderer'], function (rStats) {
    return new rStats({
        values: {
            fps: {caption: 'FPS', below: 30}
        }
    });
});