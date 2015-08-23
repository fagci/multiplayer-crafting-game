define(['three'], function (THREE) {
    function loadingManagerOnLoad() {
        console.log('LM Load');
        requestAnimationFrame(render);
    }

    function loadingManagerOnProgress(d, a, b) {
        console.log('LM Progress:', d, a, b);
    }

    function loadingManagerOnError(d) {
        console.error('LM Error:', d);
    }

    return new THREE.LoadingManager(
        loadingManagerOnLoad,
        loadingManagerOnProgress,
        loadingManagerOnError
    );
});