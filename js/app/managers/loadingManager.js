define(['three', '../ui/loadingProgress', 'app'], function (THREE, loading_progress, app) {
    console.info('Init loadingmanager...');
    var loading_manager = new THREE.LoadingManager();

    loading_manager.onProgress = function (name, i, total) {
        "use strict";
        loading_progress.toggle(i != total);
        loading_progress.progress(i * 100 / total, name);
    };

    return loading_manager;
});