define(['stats'], function (Stats) {
    var stats = new Stats();

    document.body.appendChild(stats.domElement);

    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left     = '0px';
    stats.domElement.style.top      = '0px';

    return stats;
});