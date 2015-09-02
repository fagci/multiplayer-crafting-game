define(['three', '../ui/loadingProgress'], function (THREE, loading_progress) {
    var loading_manager = new THREE.LoadingManager();

    loading_manager.onProgress = function (name, i, total) {
        "use strict";
        loading_progress.toggle(i != total);
        loading_progress.progress(i * 100 / total, name);
    };

    return loading_manager;
});