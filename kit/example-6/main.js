requirejs.config({
    paths: {
        app: 'app'
    }
});

requirejs.onError = function(err) {
    if (err.requireType === 'timeout') {
        alert("error: " + err);
    } else {
        throw err;
    }
};

requirejs(['app/init']);